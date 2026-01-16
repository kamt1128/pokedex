import { Routes, Route, Navigate, HashRouter } from "react-router-dom";
import { HomePage } from "../pages/Home";
import { FavoritesPage } from "../pages/Favorites";
import { DetailsPage } from "../pages/Details";

export const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/pokemon/:id" element={<DetailsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
};
