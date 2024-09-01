import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { StyledText } from "./StyledText";
import { useNavigation } from "expo-router";

const ListView: React.FC<ChartProps> = ({
  id = 1,
  name = "",
  type = "",
}: ChartProps) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{
        padding: 15,
        backgroundColor: "#fff",
        borderBottomWidth: 1.5,
        borderColor: "#bfbfbf86",
      }}
      onPress={() => navigation.navigate(type as never)}
    >
      <StyledText>{name}</StyledText>
    </TouchableOpacity>
  );
};

export default ListView;
const styles = StyleSheet.create({});
