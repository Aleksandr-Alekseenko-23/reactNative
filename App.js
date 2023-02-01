import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

import { useFonts } from "expo-font";
import { useCallback } from "react";

import { View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import Main from "./src/components/Main";

export default function App() {
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

  return (
    <Provider store={store}>
      <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
        <Main />
      </View>
    </Provider>
  );
}
