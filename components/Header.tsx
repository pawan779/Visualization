import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";

type HeaderProps = {
  children: React.ReactNode;
};

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <View
      style={{
        backgroundColor: "#1e3e2f",
        width: "100%",
        height: 220,
        borderBottomEndRadius: 40,
        borderBottomStartRadius: 40,
      }}
    >
      <SafeAreaView style={{ flex: 1 }}>{children}</SafeAreaView>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
