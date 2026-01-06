import { createContext, useContext, useEffect, useState } from "react";
import type { Pokemon } from "../utils/types";
import { FAVORITES_KEY } from "../utils/const";


type FavoritesContextType = {
  favorites: Pokemon[];
  addFavorite: (pokemon: Pokemon) => void;
  removeFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
};

const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined
);

export const FavoritesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [favorites, setFavorites] = useState<Pokemon[]>([]);

  // 🔹 Load from localStorage
  useEffect(() => {
    const stored = localStorage.getItem(FAVORITES_KEY);
    if (stored) {
      setFavorites(JSON.parse(stored));
    }
  }, []);

  // 🔹 Persist changes
  useEffect(() => {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (pokemon: Pokemon) => {
    setFavorites((prev) =>
      prev.some((p) => p.id === pokemon.id) ? prev : [...prev, pokemon]
    );
  };

  const removeFavorite = (id: number) => {
    setFavorites((prev) => prev.filter((p) => p.id !== id));
  };

  const isFavorite = (id: number) => {
    return favorites.some((p) => p.id === id);
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites debe usarse dentro de FavoritesProvider");
  }
  return context;
};
