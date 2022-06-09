import React, { useContext } from "react";
import { View } from "react-native";
import MealsList from "../components/MealsList";
import { FavoritesContext } from "../store/context/favoritesContext";
import { MEALS } from "../data/mockData";

const FavoriteScreen = () => {
  const favoritesMealsContext = useContext(FavoritesContext);

  const favoriteMeals = MEALS.filter((meal) =>
    favoritesMealsContext.favoritesIds.includes(meal.id)
  );

  return (
    <View>
      <MealsList data={favoriteMeals} />
    </View>
  );
};

export default FavoriteScreen;
