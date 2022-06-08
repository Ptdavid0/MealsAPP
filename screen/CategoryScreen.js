import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/mockData";

const CategoryScreen = () => {
  const renderCategoryItem = ({ item }) => {
    return <CategoryGridTile title={item.title} color={item.color} />;
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
