import { AppContext } from "@/components/context/AppContext";
import { categories, expenses } from "@/data/sampleData";
import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { PieChart } from "react-native-gifted-charts";

interface ChartScreenProps {
  children?: React.ReactNode;
}

const ChartScreen: React.FC<ChartScreenProps> = ({ children }) => {
  const context = useContext(AppContext);

  const { expenseData, setExpenseData } = context;
  return (
    <View style={styles.container}>
      {children}
      {/* <Text style={styles.title}>Expense Data by Category</Text>
      <Text style={{ fontWeight: "700", fontSize: 32, marginBottom: 16 }}>
        ${barData.reduce((total, item) => total + item.value, 0).toFixed(2)}
      </Text> */}
      <PieChart
        data={expenseData ?? []}
        donut
        strokeWidth={3}
        strokeColor="#25261f"
        radius={130}
        sectionAutoFocus
        innerRadius={80} // Adjust to control the donut hole size
        showText={false} // Disable value text on slices
        innerCircleColor={"#25261f"}
        centerLabelComponent={() => (
          <View>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              {expenseData[1]?.value}
            </Text>
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
