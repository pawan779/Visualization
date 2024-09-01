import ListView from "@/components/ListView";
import { expenses } from "@/data/sampleData";
import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import BarChartScreen from "./barChartScreen";
import Header from "@/components/Header";
import SegmentedControl from "@react-native-segmented-control/segmented-control";
import DataSection from "@/components/DataSection";
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
  const [transactionType, setTransactionType] = React.useState<
    "Income" | "Expense"
  >("Income");
  return (
    <View style={{ flex: 1 }}>
      {/* <BarChartScreen /> */}
      <Header>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <SegmentedControl
            values={["Expense", "Income"]}
            style={{ width: 200 }}
            selectedIndex={1}
            onChange={(event) => {
              const index = event.nativeEvent.selectedSegmentIndex;
              if (index === 0) {
                setTransactionType("Income");
              } else {
                setTransactionType("Expense");
              }
            }}
          />
        </View>
      </Header>
      <DataSection />
    </View>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({});
