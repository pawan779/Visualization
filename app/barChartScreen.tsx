import { categories, expenses } from "@/data/sampleData";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { BarChart } from "react-native-gifted-charts";
import { SymbolView } from "expo-symbols";
import SegmentedControl from "@react-native-segmented-control/segmented-control";

const BarChartScreen = () => {
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
    frontColor: "#69b3a2", // Customize color
  }));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expense Data by Category</Text>
      <Text style={{ fontWeight: "700", fontSize: 32, marginBottom: 16 }}>
        ${barData.reduce((total, item) => total + item.value, 0).toFixed(2)}
      </Text>
      <BarChart
        data={barData ?? []}
        // barBorderWidth={1}
        showScrollIndicator={false}
        spacing={40}
        width={300}
        height={200}
        barWidth={30}
        noOfSections={6}
        yAxisThickness={0}
        isAnimated={true}
        renderTooltip={(item, index) => {
          return (
            <View
              style={{
                marginBottom: -20,
                marginLeft: -6,
                backgroundColor: "#ffffff",
                paddingHorizontal: 6,
                paddingVertical: 4,
                borderRadius: 4,
              }}
            >
              <Text>{"$" + item.value.toFixed(2)}</Text>
            </View>
          );
        }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "baseline",
          marginTop: 16,
        }}
      >
        <TouchableOpacity
          // onPress={handlePreviousWeek}
          style={{ alignItems: "center" }}
        >
          <SymbolView
            name="chevron.left.circle.fill"
            size={40}
            type="hierarchical"
            tintColor={"gray"}
          />
          <Text style={{ fontSize: 11, color: "gray" }}>Prev week</Text>
        </TouchableOpacity>
        <SegmentedControl
          values={["Income", "Expense"]}
          style={{ width: 200 }}
          selectedIndex={1}
        />
        <TouchableOpacity
          // onPress={handleNextWeek}
          style={{ alignItems: "center" }}
        >
          <SymbolView
            name="chevron.right.circle.fill"
            size={40}
            type="hierarchical"
            tintColor={"gray"}
          />
          <Text style={{ fontSize: 11, color: "gray" }}>Next week</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f5f5f5",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
    fontWeight: "bold",
  },
});

export default BarChartScreen;
