import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import CategoryScreen from "./screen/CategoryScreen";

export default function App() {
  return (
    <SafeAreaView>
      <CategoryScreen />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
