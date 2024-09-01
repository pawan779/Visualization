import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { BarChart } from "react-native-gifted-charts";

const barChart = () => {
  const data = [
    {
      value: 220,
      label: "Jan",
      frontColor: "#000000",
    },
    {
      value: 280,
      label: "Feb",
      frontColor: "#79D2DE",
    },
    {
      value: 210,
      label: "Mar",
      frontColor: "#ED6665",
    },
    {
      value: 290,
      label: "Apr",
      frontColor: "#F3A953",
    },
    {
      value: 230,
      label: "May",
      frontColor: "#7D4AA2",
    },
    {
      value: 200,
      label: "Jun",
      frontColor: "#24CCB8",
    },
    {
      value: 270,
      label: "Jul",
      frontColor: "#FFB6C1",
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Monthly Sales Data</Text>
      <BarChart
        data={data}
        width={300} // Width of the chart
        height={300} // Height of the chart
        barWidth={30} // Width of each bar
        barBorderRadius={5} // Radius of the bar corners
        yAxisThickness={1} // Thickness of Y-axis
        xAxisThickness={1} // Thickness of X-axis
        yAxisTextStyle={{ color: "grey", fontSize: 12 }}
        xAxisLabelTextStyle={{ color: "grey", fontSize: 12 }}
        yAxisLabelSuffix="k" // Suffix for Y-axis values
        xAxisLabelSuffix="" // Suffix for X-axis labels
        spacing={30} // Space between each bar
        hideOrigin
        isAnimated // Animates the bars on load
        showGradient // Adds a gradient effect to the bars
        // gradientColor={["#FFA07A", "#20B2AA"]} // Gradient colors
        showReferenceLine1
        referenceLine1Position={250} // Position of the reference line
        referenceLine1Config={{
          color: "red",
          thickness: 1,
        }}
      />
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

export default barChart;
