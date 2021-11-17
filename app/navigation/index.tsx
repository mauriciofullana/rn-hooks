import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import {
  Home,
  UseState,
  UseReducer,
  UseEffect,
  UseRef,
  UseLayoutEffect,
  UseImperativeHandle,
  UseContext,
  UseMemo,
  UseCallback,
} from "../screens";

export type StackParamList = {
  Home: undefined;
  UseState: undefined;
  UseReducer: undefined;
  UseEffect: undefined;
  UseRef: undefined;
  UseLayoutEffect: undefined;
  UseImperativeHandle: undefined;
  UseContext: undefined;
  UseMemo: undefined;
  UseCallback: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="UseState" component={UseState} />
        <Stack.Screen name="UseReducer" component={UseReducer} />
        <Stack.Screen name="UseEffect" component={UseEffect} />
        <Stack.Screen name="UseRef" component={UseRef} />
        <Stack.Screen name="UseLayoutEffect" component={UseLayoutEffect} />
        <Stack.Screen
          name="UseImperativeHandle"
          component={UseImperativeHandle}
        />
        <Stack.Screen name="UseContext" component={UseContext} />
        <Stack.Screen name="UseMemo" component={UseMemo} />
        <Stack.Screen name="UseCallback" component={UseCallback} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
