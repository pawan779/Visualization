import ListView from "@/components/ListView";
import { expenses } from "@/data/sampleData";
import React, { useContext, useEffect } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import BarChartScreen from "./barChartScreen";
import Header from "@/components/Header";
import SegmentedControl from "@react-native-segmented-control/segmented-control";
import { AppContext } from "@/components/context/AppContext";
import DataSection from "@/components/DataSection";
import { expenseBarData } from "@/components/context/ExpenseData";

const HomeScreen = () => {
  const [transactionType, setTransactionType] = React.useState<
    "Income" | "Expense"
  >("Income");
  const context = useContext(AppContext);
  const { expenseData, setExpenseData } = context;

  useEffect(() => {
    setExpenseData(expenseBarData);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Header>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <SegmentedControl
            values={["Expense", "Income"]}
            style={{ width: 200 }}
            selectedIndex={0}
            onChange={(event) => {
              const index = event.nativeEvent.selectedSegmentIndex;
              if (index === 0) {
                setTransactionType("Income");
                setExpenseData(expenseBarData("day"));
              } else {
                setTransactionType("Expense");
                setExpenseData([]);
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
