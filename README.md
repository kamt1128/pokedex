# 🧩 Pokédex App – React + GraphQL

Aplicación web desarrollada en **React + TypeScript** que consume la **PokéAPI GraphQL** para construir un Pokédex interactivo.

---

## 🚀 Demo

🔗 **Aplicación desplegada en GitHub Pages**  
👉 https://kamt1128.github.io/pokedex/

---

## 🛠️ Tecnologías utilizadas

- ⚛️ **React 18**
- 🧠 **TypeScript**
- ⚡ **Vite**
- 🔗 **Apollo Client v4**
- 🧩 **GraphQL**
- 🗂️ **Atomic Design**
- 🌐 **React Router DOM**
- 💾 **LocalStorage**
- 🚀 **GitHub Actions (CI/CD)**

---

## 🧠 Decisiones arquitectónicas

- **Apollo Client** se utiliza para el manejo de estado remoto y caché.
- **Context API** se emplea únicamente para favoritos, evitando sobreuso.
- **TypeScript** garantiza tipado fuerte desde la API hasta la UI.
- **CSS plano** para demostrar dominio de estilos sin dependencias externas.
- **Hooks puros** siguiendo las reglas oficiales de React.

---

## ⭐ Funcionalidades principales

### 📋 Listado de Pokémon
- Paginación controlada por tamaño constante.
- Ordenamiento por `id` o `name` usando GraphQL (`order_by`).
- Skeleton loading para mejorar UX.

### 🔍 Búsqueda
- Búsqueda por nombre parcial.
- Búsqueda directa por ID.
- Reinicio automático de paginación al cambiar filtros.

### 📄 Detalle del Pokémon
- Información general (altura, peso, tipos, habilidades).
- Estadísticas base.
- Imagen oficial.
- Color de fondo dinámico basado en la especie.

### ❤️ Favoritos
- Agregar / quitar Pokémon de favoritos.
- Persistencia usando **LocalStorage**.
- Vista dedicada para favoritos.

---

## 🧱 Arquitectura del proyecto

El proyecto sigue el patrón **Atomic Design**, separando la UI en niveles de responsabilidad:

```text
src/
 ├── components/
 │   ├── atoms/        # Botones, inputs, textos, iconos
 │   ├── molecules/    # Cards, search bars, chips
 │   ├── organisms/    # Grids, layouts complejos
 ├── pages/            # Home, Details, Favorites
 ├── graphql/
 │   ├── queries.ts    # Queries GraphQL
 ├── context/
 │   └── FavoritesContext.tsx
 ├── utils/
 │   ├── types.ts      # Tipos TypeScript
 │   ├── const.ts      # Constantes globales
 ├── styles/           # CSS plano (sin frameworks)
 └── router.tsx
```

---

## ⚙️ Ejecución del proyecto en local

### 📋 Requisitos previos

- **Node.js** versión 18 o superior
- **npm** o **yarn**

### 📥 Clonar el repositorio

```bash
git clone https://github.com/kamt1128/pokedex.git
cd pokedex
```

### 📦 Instalación de dependencias

```bash
npm install
```

### ▶️ Ejecutar el proyecto en modo desarrollo

```bash
npm run dev
```