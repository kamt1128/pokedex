// import { StrictMode } from 'react'
import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import { ApolloProvider } from "@apollo/client/react";
import { client } from "./apollo/client";
import { FavoritesProvider } from './context/FavoritesContext.tsx';
import { AppRouter } from "./router/AppRouter.tsx";
import './styles/global.css'

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter basename="/pokedex">
        <FavoritesProvider>
          <AppRouter />
        </FavoritesProvider>
      </BrowserRouter>
    </ApolloProvider>
  // </StrictMode>,
)
