# 🧩 Pokédex App – React + GraphQL

Aplicación web desarrollada en **React + TypeScript** que consume la **PokéAPI GraphQL** para construir un Pokédex interactivo.  
El proyecto fue realizado como **prueba técnica frontend**, siguiendo estrictamente las indicaciones solicitadas y aplicando buenas prácticas de arquitectura, rendimiento y experiencia de usuario.

---

## 🎯 Objetivo de la prueba

- Consumir la **PokéAPI usando GraphQL**
- Mostrar un listado de Pokémon ordenable
- Implementar búsqueda y validación de datos
- Visualizar el detalle de un Pokémon
- Permitir marcar Pokémon como favoritos
- Mantener persistencia de datos
- Seguir buenas prácticas de React
- No usar frameworks de CSS
- Implementar Atomic Design
- Desplegar la aplicación públicamente

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
