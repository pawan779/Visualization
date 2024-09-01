import { categories, expenses } from "@/data/sampleData";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { BarChart, PieChart } from "react-native-gifted-charts";
import { SymbolView } from "expo-symbols";
import SegmentedControl from "@react-native-segmented-control/segmented-control";

interface ChartScreenProps {
  children?: React.ReactNode;
}

const ChartScreen: React.FC<ChartScreenProps> = ({ children }) => {
  const groupExpensesByCategory = (
    expenses: Expense[]
  ): Record<string, number> => {
    return expenses.reduce<Record<string, number>>((acc, expense) => {
      if (!acc[expense.categoryId]) {
        acc[expense.categoryId] = 0;
      }
      acc[expense.categoryId] += expense.price;
      return acc;
    }, {});
  };

  const groupedExpenses = groupExpensesByCategory(expenses);

  const chartData: ChartData[] = categories
    .map((category) => ({
      label: category.name,
      total: groupedExpenses[category.id] || 0,
    }))
    .filter((data) => data.total > 0);

  const barData = chartData.map((item) => ({
    value: item.total,
    label: item.label,
    frontColor: "#69b3a2",
  }));

  return (
    <View style={styles.container}>
      {children}
      {/* <Text style={styles.title}>Expense Data by Category</Text>
      <Text style={{ fontWeight: "700", fontSize: 32, marginBottom: 16 }}>
        ${barData.reduce((total, item) => total + item.value, 0).toFixed(2)}
      </Text> */}
      <PieChart
        data={barData ?? []}
        donut
        radius={130}
        sectionAutoFocus
        innerRadius={80} // Adjust to control the donut hole size
        showText={false} // Disable value text on slices
        innerCircleColor={"#25261f"}
        centerLabelComponent={() => (
          <View>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>Total</Text>
          </View>
        )}
        isAnimated
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginTop: -50,
    padding: 20,
    backgroundColor: "#25261f",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
    fontWeight: "bold",
  },
});

export default ChartScreen;
