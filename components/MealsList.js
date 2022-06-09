import React from "react";
import { FlatList } from "react-native";
import MealItem from "./MealItem";

const MealsList = ({ data, categoryColor }) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <MealItem item={item} categoryColor={categoryColor} />
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

export default MealsList;
