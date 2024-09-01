import BarChartScreen from "@/app/barChartScreen";
import SegmentedControl from "@react-native-segmented-control/segmented-control";
import { SymbolView } from "expo-symbols";
import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";

const DataSection = () => {
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
