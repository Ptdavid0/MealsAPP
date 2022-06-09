import React, { createContext, useState } from "react";

export const FavoritesContext = createContext({
  favoritesIds: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

export const FavoritesProvider = ({ children }) => {
  const [favoritesIds, setFavoritesIds] = useState([]);

  const addFavorite = (id) => {
    setFavoritesIds((prevFavoritesIds) => {
      if (prevFavoritesIds.includes(id)) {
        return prevFavoritesIds;
      } else {
        return [...prevFavoritesIds, id];
      }
    });
  };

  const removeFavorite = (id) => {
    setFavoritesIds((prevFavoritesIds) => {
      return prevFavoritesIds.filter((item) => item !== id);
    });
  };

  const value = {
    favoritesIds,
    addFavorite,
    removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};
