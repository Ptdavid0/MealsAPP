import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import MealsList from "../components/MealsList";
import { FavoritesContext } from "../store/context/favoritesContext";

const FavoriteScreen = () => {
  const favoritesMealsContext = useContext(FavoritesContext);
  const favoriteMeals = favoritesMealsContext.favoritesMeals;

  return (
    <>
      {favoriteMeals.length ? (
        <MealsList data={favoriteMeals} />
      ) : (
        <View style={styles.messageContainer}>
          <Text style={styles.message}> You have no favorite meals</Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  messageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  message: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#24180f",
  },
});

export default FavoriteScreen;
