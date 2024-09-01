import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/components/useColorScheme";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar, TouchableOpacity, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import HomeScreen from "./home";
import { AppProvider } from "@/components/context/AppContext";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <View style={{ flex: 1, backgroundColor: "#000" }}>
      <AppProvider>
        <StatusBar barStyle={"dark-content"} />
        <HomeScreen />
        {/* <Stack initialRouteName="home">
          <Stack.Screen
            name="home"
            options={{
              title: "My Expenses",
              headerRight: () => (
                <TouchableOpacity>
                  <MaterialIcons
                    name="add"
                    size={25}
                    color="black"
                    style={{ marginRight: 10 }}
                  />
                </TouchableOpacity>
              ),
            }}
          />
        </Stack> */}
      </AppProvider>
    </View>
  );
}
