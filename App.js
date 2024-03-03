// App.js

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import IndexScreen from "./src/screens/IndexScreen";
import ContentScreen from "./src/screens/ContentScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index">
        <Stack.Screen
          name="Index"
          component={IndexScreen}
          options={{ title: "중용자잠(中庸自箴)" }}
        />
        <Stack.Screen
          name="Content"
          component={ContentScreen}
          options={{ title: "중용자잠 해석" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
