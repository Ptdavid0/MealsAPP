import React from "react";
import { View, Pressable, Text, StyleSheet, Platform } from "react-native";

const CategoryGridTile = (props) => {
  const { title, color, onSelect } = props;
  return (
    <View style={[styles.gridItem, { backgroundColor: color }]}>
      <Pressable style={styles.button} android_ripple={{ color: "#ccc" }}>
        <View style={styles.innerContainer}>
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
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 3,
    overflow: Platform.OS === "android" && "hidden",
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
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
    opacity: 0.5,
  },
});

export default CategoryGridTile;
