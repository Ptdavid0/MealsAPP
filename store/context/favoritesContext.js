import React, { createContext, useState } from "react";

export const FavoritesContext = createContext({
  favoritesMeals: [],
  addFavorite: (item) => {},
  removeFavorite: (id) => {},
});

export const FavoritesProvider = ({ children }) => {
  const [favoritesMeals, setFavoritesMeals] = useState([]);

  const addFavorite = (item) => {
    setFavoritesMeals((prevFavoritesIds) => {
      if (prevFavoritesIds.includes(item.id)) {
        return prevFavoritesIds;
      } else {
        return [...prevFavoritesIds, item];
      }
    });
  };

  const removeFavorite = (id) => {
    setFavoritesMeals((prevFavoritesIds) => {
      return prevFavoritesIds.filter((item) => item.id !== id);
    });
  };

  const getFavoriteMealsIds = () => {
    return favoritesMeals.map((meal) => meal.id);
  };

  const value = {
    favoritesMeals,
    addFavorite,
    removeFavorite,
    getFavoriteMealsIds,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};
