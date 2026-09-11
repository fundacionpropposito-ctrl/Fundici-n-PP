# Fundación Propósito Posible

Sitio web institucional de la Fundación Propósito Posible (Cartago, Valle del Cauca, Colombia), construido con [Next.js](https://nextjs.org).

## Desarrollo local

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000) para ver el sitio.

## Scripts

- `npm run dev` — servidor de desarrollo
- `npm run build` — build de producción
- `npm run start` — sirve el build de producción (requiere `npm run build` previo)
- `npm run lint` — linting con ESLint

## Despliegue en Render

1. Crear un **Web Service** en Render y conectarlo a este repositorio de GitHub.
2. **Build Command:** `npm install && npm run build`
3. **Start Command:** `npm run start`
4. **Node version:** la fija `engines.node` en `package.json` (`>=20.9.0`); si Render lo pide explícito, usar Node 22.
5. No se requieren variables de entorno para que el sitio funcione.
6. Una vez desplegado, apuntar el dominio propio desde la sección **Custom Domains** del servicio en Render.
