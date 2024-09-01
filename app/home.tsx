import ListView from "@/components/ListView";
import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";

const chartType: ChartProps[] = [
  {
    id: 1,
    name: "Bar Chart",
    type: "barChart",
  },
  {
    id: 2,
    name: "Line Chart",
    type: "lineChart",
  },
  {
    id: 3,
    name: "Pie Chart",
    type: "pieChart",
  },
];

const HomeScreen = () => {
  return <View style={{ flex: 1 }}></View>;
};

export default HomeScreen;
const styles = StyleSheet.create({});
