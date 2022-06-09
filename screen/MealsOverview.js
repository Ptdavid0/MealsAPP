import React, { useLayoutEffect } from "react";
import { View, StyleSheet } from "react-native";
import MealsList from "../components/MealsList";
import { MEALS } from "../data/mockData";

const MealsOverviewScreen = ({ route, navigation }) => {
  const { categoryId, categoryTitle, categoryColor } = route.params;

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: categoryTitle,
      headerStyle: {
        backgroundColor: categoryColor,
      },
    });
  }, [navigation, categoryTitle]);

  return (
    <View style={styles.container}>
      <MealsList
        data={displayedMeals}
        categoryColor={categoryColor}
        isFavorite={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
});

export default MealsOverviewScreen;
