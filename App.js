import { NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

import { useFonts } from "expo-font";
import { useCallback } from "react";
import useRoute from "./src/hooks/useRoute";

export default function App() {
  const routing = useRoute(null);
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./src/assets/font/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./src/assets/font/Roboto-Medium.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return <NavigationContainer>{routing}</NavigationContainer>;
}
