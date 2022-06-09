import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";

const MealItem = ({ item, categoryColor }) => {
  const { title, duration, complexity, affordability, imageUrl } = item;
  const navigation = useNavigation();

  const handleSelectMeal = () => {
    navigation.navigate("MealDetails", {
      item: item,
      categoryColor: categoryColor,
    });
  };

  return (
    <Pressable
      android_ripple={{ color: "#ccc" }}
      style={({ pressed }) => [
        styles.container,
        pressed ? styles.pressed : null,
      ]}
      onPress={handleSelectMeal}
    >
      <View style={styles.infoContainer}>
        <View style={styles.infoText}>
          <Text style={styles.dataTitle}>{title}</Text>
        </View>
        <View style={styles.dataContainer}>
          <FontAwesome name="circle" size={12} color={categoryColor} />
          <Text style={styles.dataText} a>
            {complexity.toUpperCase()}
          </Text>
        </View>
        <View style={styles.dataContainer}>
          <FontAwesome name="circle" size={12} color={categoryColor} />
          <Text style={styles.dataText} a>
            {duration}m
          </Text>
        </View>
        <View style={styles.dataContainer}>
          <FontAwesome name="circle" size={12} color={categoryColor} />
          <Text style={styles.dataText} a>
            {affordability.toUpperCase()}
          </Text>
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
  dataContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  dataText: {
    fontSize: 12,
    marginHorizontal: 5,
  },
  dataTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default MealItem;
