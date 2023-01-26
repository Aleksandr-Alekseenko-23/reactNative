import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import RegistrationScreen from "../screens/RegistrationScreen";
import LoginScreen from "../screens/LoginScreen";
import Home from "../screens/Home";

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
