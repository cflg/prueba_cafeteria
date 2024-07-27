# Cafetería

## Tecnologías Usadas en el proyecto

![Vite](https://img.shields.io/badge/Vite-4.1.4-brightgreen)
![React](https://img.shields.io/badge/React-18.3.1-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.7-purple)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-blueviolet)
![ESLint](https://img.shields.io/badge/ESLint-8.57.0-yellowgreen)
![Node.js 20+](https://img.shields.io/badge/node.js-20%2B-green?logo=node.js&logoColor=white)

## Descripción

Hice esta pequeña app para un proceso de seleccion.
Como compilador use SWC para mayor rendimiento.

## Tecnologías Utilizadas

- **React**: Librería para construir interfaces de usuario.
- **Vite**: Herramienta de construcción rápida y moderna.
- **Tailwind CSS**: Framework de CSS para diseño rápido y personalizable.
- **TypeScript**: Superset de JavaScript para una mejor escalabilidad y seguridad de tipos.
- **ESLint**: Herramienta para identificar y reportar patrones en el código JavaScript.
- **Node**: Herramienta que permite ejecutar JavaScript fuera del navegador.

### Estructura del Proyecto

```bash
Cafetería/
│
├── public/
│ └── ...
│
├── src/
│ ├── api/
│ │ ├── coffee.d.types.tsx
│ │ └── coffeeAPI.tsx
│ ├── assets/
│ │ ├── bienvenida.jpg
│ │ ├── coffee_logo.webp
│ │ └── loading.gif
│ ├── components/
│ │ ├── card.tsx
│ │ ├── footer.tsx
│ │ └── navbar.tsx
│ ├── pages/
│ │ ├── contact.tsx
│ │ ├── home.tsx
│ │ └── products.tsx
│ ├── App.css
│ ├── App.tsx
│ ├── index.css
│ ├── input.css
│ ├── main.tsx
│ ├── output.css
│ └── vite-env.d.ts
│
├── .gitignore
├── .eslintrc.cjs
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── LICENSE
├── tsconfig.node.json
├── vite.config.ts
└── README.md
```

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/cflg/prueba_cafeteria.git
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd prueba_cafeteria
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

## Scripts

- **`npm run dev`**: Inicia el servidor de desarrollo con Vite.
- **`npm run build`**: Construye el proyecto para producción (transpila TypeScript y genera los archivos estáticos).
- **`npm run lint`**: Ejecuta ESLint para verificar la calidad del código.
- **`npm run preview`**: Muestra una vista previa de la aplicación construida.

## Uso

1. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

2. Abre tu navegador y visita `http://localhost:5173/` para ver la aplicación en acción (puede variar en tu pc, siempre mira la consola).

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

---

Para más información, consulta la documentación de [React](https://reactjs.org/), [Vite](https://vitejs.dev/), [Tailwind CSS](https://tailwindcss.com/), y [TypeScript](https://www.typescriptlang.org/).
