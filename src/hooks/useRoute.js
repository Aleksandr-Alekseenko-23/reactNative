import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import RegistrationScreen from "../screens/auth/RegistrationScreen";
import LoginScreen from "../screens/auth/LoginScreen";
import Home from "../screens/home/Home";

const useRoute = (isAuth) => {
  return (
    <Stack.Navigator>
      {!isAuth ? (
        <>
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Login"
            component={LoginScreen}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Register"
            component={RegistrationScreen}
          />
        </>
      ) : (
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Home"
          component={Home}
        />
      )}
    </Stack.Navigator>
  );
};

export default useRoute;
