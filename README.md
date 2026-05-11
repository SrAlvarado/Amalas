# A malas 🎯

PWA de retos fotográficos diarios estilo cómic gamberro para grupos de amigos.

## Stack

- ⚡ **Vite** + **React** + **TypeScript**
- 🎨 **Tailwind CSS** (sistema de diseño propio cómic)
- 🗄️ **Supabase** (base de datos, auth, storage y RLS)
- 🧪 **Vitest** + **React Testing Library**
- 🏗️ **Atomic Design** estricto

## Estructura

```
src/
  components/
    atoms/       # Primitivos visuales sin lógica
    molecules/   # 2+ átomos combinados
    organisms/   # Secciones con lógica y datos
    templates/   # Layouts sin lógica de negocio
  pages/         # Composición final de páginas
  hooks/         # Custom Hooks de Supabase
  test/          # Setup de testing
```

## Desarrollo

```bash
npm install
npm run dev
```

## Tests

```bash
npm test
```

## Reglas de Git

- Ramas: `<tipo>/<numero-issue>-descripcion-en-kebab`
- Commits: Conventional Commits (`feat:`, `fix:`, `chore:`, etc.)
