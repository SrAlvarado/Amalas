# 🚀 Guía de Despliegue en Vercel - A malas

Esta guía detalla los pasos para desplegar la PWA en producción utilizando Vercel.

## 1. Configuración del Proyecto en Vercel

1. **Importar Repositorio**: Conecta tu cuenta de GitHub y selecciona el repositorio `Amalas`.
2. **Framework Preset**: Selecciona **Vite**.
3. **Build Settings**:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

## 2. Variables de Entorno

Debes configurar las siguientes variables en la sección **Environment Variables** de tu proyecto en Vercel:

| Variable | Descripción | Ejemplo |
| :--- | :--- | :--- |
| `VITE_SUPABASE_URL` | URL de tu proyecto Supabase | `https://xxxx.supabase.co` |
| `VITE_SUPABASE_ANON_KEY` | Clave anónima de Supabase | `eyJhbGciOiJIUzI1NiIsInR5cCI6...` |

> [!IMPORTANT]
> Asegúrate de que las variables tengan el prefijo `VITE_` para que Vite las inyecte en el cliente. Estas claves se encuentran en **Project Settings > API** en tu panel de Supabase.

## 3. Configuración PWA

Vercel servirá automáticamente el Service Worker (`sw.js`) y el manifiesto. No es necesario realizar configuraciones adicionales en el servidor, ya que `vite-plugin-pwa` gestiona la generación de archivos durante el build.

## 4. Dominio y HTTPS

Vercel proporciona HTTPS por defecto. Esto es **crítico**, ya que las PWAs y la API de Cámara (`MediaDevices`) requieren un contexto seguro (HTTPS) para funcionar.

---
**¡Listo para el gamberrismo! 🏁**
