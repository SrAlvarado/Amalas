-- ############################################################
-- ESTRUCTURA DE BASE DE DATOS: PWA "A MALAS"
-- ############################################################

-- 1. PERFILES DE USUARIO (Extensión de auth.users)
CREATE TABLE public.profiles (
    id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
    username TEXT UNIQUE NOT NULL,
    full_name TEXT,
    avatar_face TEXT DEFAULT 'face-1', -- face-1 a face-6
    streak INTEGER DEFAULT 0,
    total_points INTEGER DEFAULT 0,
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    
    CONSTRAINT username_length CHECK (char_length(username) >= 3)
);

-- 2. CUADRILLAS (GRUPOS)
CREATE TABLE public.squads (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    invite_code TEXT UNIQUE NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    created_by UUID REFERENCES public.profiles(id)
);

-- 3. MIEMBROS DE LA CUADRILLA (Relación N:M)
CREATE TABLE public.squad_members (
    squad_id UUID REFERENCES public.squads(id) ON DELETE CASCADE,
    profile_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    joined_at TIMESTAMPTZ DEFAULT NOW(),
    role TEXT DEFAULT 'member', -- 'owner', 'member'
    PRIMARY KEY (squad_id, profile_id)
);

-- 4. RETOS DIARIOS
CREATE TABLE public.daily_challenges (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    theme_title TEXT NOT NULL,
    theme_description TEXT,
    start_time TIMESTAMPTZ NOT NULL, -- Hora aleatoria en que salta el reto
    end_time TIMESTAMPTZ NOT NULL,   -- start_time + 4 horas
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. ENTREGAS DE FOTOS (SUBMISSIONS)
CREATE TABLE public.submissions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    challenge_id UUID REFERENCES public.daily_challenges(id) ON DELETE CASCADE,
    profile_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    squad_id UUID REFERENCES public.squads(id) ON DELETE CASCADE,
    photo_url TEXT NOT NULL,
    status TEXT DEFAULT 'pending', -- 'pending', 'voted'
    penalty_points INTEGER DEFAULT 0, -- Calculado en el hook (0, -2)
    created_at TIMESTAMPTZ DEFAULT NOW(),
    
    UNIQUE (challenge_id, profile_id) -- Un solo post por reto
);

-- 6. VOTOS (SISTEMA EUROVISIÓN)
CREATE TABLE public.votes (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    submission_id UUID REFERENCES public.submissions(id) ON DELETE CASCADE,
    voter_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    points INTEGER CHECK (points IN (1, 2, 3)),
    is_pues_bien BOOLEAN DEFAULT FALSE, -- Comodín -1
    created_at TIMESTAMPTZ DEFAULT NOW(),
    
    UNIQUE (submission_id, voter_id) -- Un voto por foto por persona
);

-- ############################################################
-- POLÍTICAS DE SEGURIDAD (RLS)
-- ############################################################

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.squads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.squad_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.daily_challenges ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.votes ENABLE ROW LEVEL SECURITY;

-- Profiles: Todos los autenticados pueden ver perfiles (para buscar amigos)
CREATE POLICY "Public profiles are viewable by everyone" ON public.profiles
    FOR SELECT USING (true);

CREATE POLICY "Users can update own profile" ON public.profiles
    FOR UPDATE USING (auth.uid() = id);

-- Squads: Solo miembros pueden ver su squad
CREATE POLICY "Squads are viewable by members" ON public.squads
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM public.squad_members 
            WHERE squad_id = squads.id AND profile_id = auth.uid()
        )
    );

-- Squad Members: Solo miembros pueden ver a sus compañeros
CREATE POLICY "Squad members are viewable by squadmates" ON public.squad_members
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM public.squad_members sm
            WHERE sm.squad_id = squad_members.squad_id AND sm.profile_id = auth.uid()
        )
    );

-- Challenges: Todos pueden ver el reto activo
CREATE POLICY "Challenges are viewable by everyone" ON public.daily_challenges
    FOR SELECT USING (true);

-- Submissions: Solo puedes ver fotos de tu propia cuadrilla
CREATE POLICY "Submissions are viewable by squadmates" ON public.submissions
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM public.squad_members 
            WHERE squad_id = submissions.squad_id AND profile_id = auth.uid()
        )
    );

CREATE POLICY "Users can insert own submissions" ON public.submissions
    FOR INSERT WITH CHECK (auth.uid() = profile_id);

-- Votes: Solo puedes votar si eres de la misma cuadrilla que la foto
CREATE POLICY "Votes are viewable by squadmates" ON public.votes
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM public.submissions s
            JOIN public.squad_members sm ON s.squad_id = sm.squad_id
            WHERE s.id = votes.submission_id AND sm.profile_id = auth.uid()
        )
    );

CREATE POLICY "Users can insert own votes" ON public.votes
    FOR INSERT WITH CHECK (auth.uid() = voter_id);

-- ############################################################
-- FUNCIONES Y TRIGGERS ÚTILES
-- ############################################################

-- Función para crear perfil automáticamente al registrarse en Auth
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, username, full_name, avatar_face)
  VALUES (
    new.id, 
    LOWER(SPLIT_PART(new.email, '@', 1)), 
    new.raw_user_meta_data->>'full_name',
    'face-1'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();
