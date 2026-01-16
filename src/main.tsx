// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ApolloProvider } from "@apollo/client/react";
import { client } from "./apollo/client";
import { FavoritesProvider } from './context/FavoritesContext.tsx';
import './styles/global.css'
import App from "./App.tsx";

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
    <ApolloProvider client={client}>
        <FavoritesProvider>
          <App />
        </FavoritesProvider>
    </ApolloProvider>
  // </StrictMode>,
)
