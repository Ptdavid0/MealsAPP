import { StatusBar } from "expo-status-bar";
import React from "react";
import CategoryScreen from "./screen/CategoryScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screen/MealsOverview";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#fff",
            },
            headerTintColor: "#24180f",
            contentStyle: {
              backgroundColor: "#fff",
            },
          }}
          initialRouteName="MealsCategories"
        >
          <Stack.Screen
            name="MealsCategories"
            d
            component={CategoryScreen}
            options={{ title: "Meal Categories" }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            // options={({ route, navigation }) => {
            //   return {
            //     title: route.params.categoryTitle,
            //   };
            // }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="dark" />
    </>
  );
}
