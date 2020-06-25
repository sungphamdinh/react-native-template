import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/home";
import TestTheme from "./screens/test_theme";
import TestStorage from "./screens/test_storage";
import TestUseInterval from "./screens/test_use_interval";
import TestUseHitsAPI from "./screens/test_use_hits_api";

const Stack = createStackNavigator();

export default function Main() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="TestTheme" component={TestTheme} />
        <Stack.Screen name="TestStorage" component={TestStorage} />
        <Stack.Screen name="TestUseInterval" component={TestUseInterval} />
        <Stack.Screen name="TestUseHitsAPI" component={TestUseHitsAPI} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
