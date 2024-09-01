import BarChartScreen from "@/app/barChartScreen";
import SegmentedControl from "@react-native-segmented-control/segmented-control";
import { SymbolView } from "expo-symbols";
import React, { useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { expenseBarData } from "./context/ExpenseData";
import { AppContext } from "./context/AppContext";

const DataSection = () => {
  const [transactionType, setTransactionType] = React.useState<
    "Day" | "Week" | "Month" | "Year"
  >("Day");

  const context = useContext(AppContext);
  const { expenseData, setExpenseData } = context;
  return (
    <View>
      <BarChartScreen>
        <SegmentedControl
          values={["Day", "Week", "Month", "Year"]}
          style={{
            width: Dimensions.get("window").width - 100,
            marginBottom: 20,
          }}
          selectedIndex={0}
          onChange={(event) => {
            const index = event.nativeEvent.selectedSegmentIndex;
            if (index === 0) {
              setTransactionType("Day");
              setExpenseData([expenseBarData({ type: "day" })]);
            } else {
              setTransactionType("Month");
              setExpenseData(
                expenseBarData({
                  type: "month",
                  input: "1",
                })
              );
            }
          }}
        />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <TouchableOpacity
            // onPress={handlePreviousWeek}
            style={{ alignItems: "center" }}
          >
            <SymbolView
              name="chevron.left"
              size={20}
              type="hierarchical"
              tintColor={"gray"}
            />
          </TouchableOpacity>
          <Text style={{ flex: 1, textAlign: "center" }}>September 1</Text>
          <TouchableOpacity
            // onPress={handleNextWeek}
            style={{ alignItems: "center" }}
          >
            <SymbolView
              name="chevron.right"
              size={20}
              type="hierarchical"
              tintColor={"gray"}
            />
          </TouchableOpacity>
        </View>
      </BarChartScreen>
    </View>
  );
};

export default DataSection;
const styles = StyleSheet.create({});
