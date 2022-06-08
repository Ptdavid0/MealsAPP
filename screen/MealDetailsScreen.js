import React, { useLayoutEffect } from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const MealDetailsScreen = ({ route, navigation }) => {
  const {
    title,
    duration,
    complexity,
    affordability,
    imageUrl,
    ingredients,
    steps,
  } = route.params.item;

  const { categoryColor } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: title,
      headerStyle: {
        backgroundColor: categoryColor,
      },
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
      </View>
      <View style={styles.infoContainer}>
        <ScrollView>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.infoTextContainer}>
            <View style={[styles.infoText, { backgroundColor: categoryColor }]}>
              <Text>{duration}m</Text>
            </View>

            <View style={[styles.infoText, { backgroundColor: categoryColor }]}>
              <Text>{complexity.toUpperCase()}</Text>
            </View>

            <View style={[styles.infoText, { backgroundColor: categoryColor }]}>
              <Text>{affordability.toUpperCase()}</Text>
            </View>
          </View>
          <View style={styles.ingredientsContainer}>
            <View>
              <Text style={styles.ingredientsTitle}>Ingredients : </Text>
            </View>
            <View style={styles.ingredientsList}>
              {ingredients.map((ingredient) => (
                <View style={styles.ingredientContainer} key={ingredient}>
                  <FontAwesome name="circle" size={12} color={categoryColor} />
                  <Text style={styles.ingredient}>{ingredient}</Text>
                </View>
              ))}
            </View>
          </View>
          <View style={styles.stepsContainer}>
            <View>
              <Text style={styles.stepsTitle}>Steps : </Text>
            </View>
            <View style={styles.stepsList}>
              {steps.map((step, index) => (
                <View style={styles.stepContainer} key={step}>
                  <Text style={styles.step}>{`${index + 1} - ${step}`}</Text>
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingBottom: 30,
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  infoContainer: {
    flex: 2,
    flexDirection: "column",
    justifyContent: "space-around",
    paddingHorizontal: 10,
  },
  titleContainer: {
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 12,
  },
  infoTextContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  infoText: {
    flex: 1,
    width: "25%",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    paddingVertical: 32,
    marginHorizontal: 12,
    borderRadius: 10,
  },
  ingredientsContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    marginVertical: 10,
    paddingHorizontal: 12,
  },
  ingredientsTitle: {
    fontSize: 16,
    fontWeight: "bold",
    paddingTop: 10,
  },
  ingredientsList: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    paddingTop: 10,
  },
  ingredientContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
  },
  ingredient: {
    fontSize: 14,
    paddingHorizontal: 12,
    color: "#5b5b5b",
  },

  stepsContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    paddingHorizontal: 12,
  },
  stepsTitle: {
    fontSize: 16,
    fontWeight: "bold",
    paddingTop: 10,
  },
  stepsList: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    paddingTop: 10,
  },
  stepContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
  },
  step: {
    fontSize: 14,
    paddingHorizontal: 12,
    color: "#5b5b5b",
  },
});

export default MealDetailsScreen;
