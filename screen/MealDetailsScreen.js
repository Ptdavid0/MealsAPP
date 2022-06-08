import React, { useLayoutEffect } from "react";
import { View } from "react-native";

const MealDetailsScreen = ({ route, navigation }) => {
  const { title, duration, complexity, affordability, imageUrl, categoryIds } =
    route.params.item;

  const { categoryColor } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: title,
      headerStyle: {
        backgroundColor: categoryColor,
      },
    });
  }, [navigation]);

  return <View />;
};

export default MealDetailsScreen;
