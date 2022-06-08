import React from "react";
import { View, Pressable, Text, StyleSheet, Platform } from "react-native";

const CategoryGridTile = ({ item, onSelect }) => {
  const { title, color } = item;

  const handlePress = () => {
    onSelect(item);
  };
  return (
    <View style={styles.gridItem}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.pressed : null,
        ]}
        android_ripple={{ color: "#ccc" }}
        onPress={handlePress}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 3,
    borderRadius: 10,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  button: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.6,
  },
});

export default CategoryGridTile;
