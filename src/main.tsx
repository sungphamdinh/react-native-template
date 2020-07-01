import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/home";
import TestTheme from "./screens/test_theme";
import TestStorage from "./screens/test_storage";
import TestUseInterval from "./screens/test_use_interval";
import TestUseHitsAPI from "./screens/test_use_hits_api";
import PanGestureExample from "./screens/pan_gesture_example";
import GlobalStore from "./shared/stores/global_store/useGlobalStore";
import { ApolloProvider } from "react-apollo";
import GraphQL from "./screens/graph_ql";

const Stack = createStackNavigator();

function Base() {
  const { apolloClient } = GlobalStore.useContainer();

  if (!apolloClient) return null;

  return (
    <ApolloProvider client={apolloClient}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="TestTheme" component={TestTheme} />
          <Stack.Screen name="TestStorage" component={TestStorage} />
          <Stack.Screen name="TestUseInterval" component={TestUseInterval} />
          <Stack.Screen name="TestUseHitsAPI" component={TestUseHitsAPI} />
          <Stack.Screen
            name="PanGestureExample"
            component={PanGestureExample}
            options={{ title: "PanGesture" }}
          />
          <Stack.Screen name="GraphQL" component={GraphQL} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}

export default function Main() {
  return (
    <GlobalStore.Provider>
      <Base />
    </GlobalStore.Provider>
  );
}
