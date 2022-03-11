import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import firebase from "./src/components/firebase";

// Screens
import HomeScreen from "./src/screens/HomeScreen";
import NewPostScreen from "./src/screens/NewPostScreen";
import LoginScreen from "./src/screens/LoginScreen";
import SignupScreen from "./src/screens/SignupScreen";

const App = () => {
  const Stack = createNativeStackNavigator();
  const commonScreensOptions = {
    headerShown: false,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {/* Home Screen */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={commonScreensOptions}
        />

        {/* Add New Post Screen */}
        <Stack.Screen
          name="New Post"
          component={NewPostScreen}
          options={{
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "black" },
          }}
        />

        {/* Login Screen */}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={commonScreensOptions}
        />

        {/* Signup Screen */}
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={commonScreensOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
