import ListView from "@/components/ListView";
import { expenses } from "@/data/sampleData";
import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import BarChartScreen from "./barChartScreen";
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
  //   console.log("expense", expenses);
  return (
    <View style={{ flex: 1 }}>
      <BarChartScreen />
    </View>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({});
