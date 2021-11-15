import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Home, UseState } from "../screens";

export type StackParamList = {
  Home: undefined;
  UseState: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="UseState" component={UseState} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
