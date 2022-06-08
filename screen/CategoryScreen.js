import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/mockData";

const CategoryScreen = ({ navigation }) => {
  const handleSelectCategory = (item) => {
    navigation.navigate("MealsOverview", {
      categoryId: item.id,
      categoryTitle: item.title,
      categoryColor: item.color,
    });
  };

  const renderCategoryItem = ({ item }) => {
    return <CategoryGridTile item={item} onSelect={handleSelectCategory} />;
  };
  return (
    <View>
      <FlatList
        key={"#"}
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={(item) => renderCategoryItem(item)}
        numColumns={2}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CategoryScreen;
