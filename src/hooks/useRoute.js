import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createStackNavigator();
const MainTab = createBottomTabNavigator();

import { View } from "react-native";
import RegistrationScreen from "../screens/RegistrationScreen";
import LoginScreen from "../screens/LoginScreen";
import PostsScreen from "../screens/PostsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import CreateScreen from "../screens/CreateScreen";

import { AntDesign, Feather } from "@expo/vector-icons";

const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Register"
          component={RegistrationScreen}
        />
      </Stack.Navigator>
    );
  }
  return (
    <MainTab.Navigator
      initialRouteName="Posts"
      screenOptions={{
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontFamily: "Roboto-Medium",
          fontSize: 17,
          lineHeight: 22,
        },
        headerStyle: {
          backgroundColor: "#ffffff",
          borderBottomWidth: 0.5,
          borderBottomColor: "#21212120",
        },
        tabBarOptions: {
          tabBarHideOnKeyboard: true,
        },
      }}
      tabBarOptions={{ showLabel: false }}
    >
      <MainTab.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <AntDesign name="appstore-o" size={size} color={color} />
          ),
          title: "Публикации",
          headerTitleStyle: {
            fontFamily: "Roboto-Medium",
            color: "#212121",
            fontSize: 17,
            lineHeight: 22,
          },
          headerRight: () => (
            <Feather
              name="log-out"
              color="#BDBDBD"
              size={24}
              style={{ marginRight: 10 }}
              onPress={() => {
                console.log("logout");
              }}
            />
          ),
        }}
      />

      <MainTab.Screen
        name="Create"
        component={CreateScreen}
        options={{
          tabBarStyle: { display: "none" },
          tabBarIcon: ({ focused, size, color }) => (
            <View
              style={{
                width: 70,
                height: 40,
                backgroundColor: "#FF6C00",
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Feather name="plus" size={size} color={"#fff"} />
            </View>
          ),
          title: "Создать публикацию",
          headerStyle: {
            borderBottomWidth: 0.5,
            borderBottomColor: "#212121CC",
          },
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontFamily: "Roboto-Medium",
            color: "#212121",
            fontSize: 17,
            lineHeight: 22,
          },
          headerLeft: () => (
            <Feather
              name="arrow-left"
              color="#212121CC"
              size={24}
              style={{ marginLeft: 16 }}
              // onPress={() => {
              //   navigation.navigate("Posts");
              // }}
            />
          ),
        }}
      />
      <MainTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, size, color }) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
      />
    </MainTab.Navigator>
  );
};

export default useRoute;
