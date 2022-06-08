import React, { useLayoutEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import MealItem from "../components/MealItem";
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
      <FlatList
        data={displayedMeals}
        renderItem={({ item }) => (
          <MealItem item={item} categoryColor={categoryColor} />
        )}
        keyExtractor={(item) => item.id}
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
