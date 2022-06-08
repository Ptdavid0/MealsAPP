import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  Platform,
} from "react-native";

const MealItem = ({ item }) => {
  const { title, duration, complexity, affordability, imageUrl } = item;
  return (
    <Pressable
      android_ripple={{ color: "#ccc" }}
      style={({ pressed }) => [
        styles.container,
        pressed ? styles.pressed : null,
      ]}
    >
      <View style={styles.infoContainer}>
        <View style={styles.infoText}>
          <Text>{title}</Text>
        </View>
        <View style={styles.infoText}>
          <Text>{complexity}</Text>
        </View>
        <View style={styles.infoText}>
          <Text>{duration}</Text>
        </View>
        <View style={styles.infoText}>
          <Text>{affordability}</Text>
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: imageUrl,
          }}
          style={styles.image}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    padding: 16,
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 10,
    marginVertical: 8,
    shadowColor: "black",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  pressed: {
    opacity: 0.6,
  },
  infoContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
  },
  infoText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  imageContainer: {
    flex: 1,
    width: "100%",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
});

export default MealItem;
