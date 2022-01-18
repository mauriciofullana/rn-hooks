import React, { FunctionComponent, useReducer, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

type StateType = { count: number };
type ActionType = "increment" | "decrement";

const initialState: StateType = { count: 0 };
const reducer = (state: StateType, action: ActionType): StateType => {
  switch (action) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return { count: 0 };
  }
};

const UseReducerScreen: FunctionComponent = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleIncrement = () => dispatch("increment");
  const handleDecrement = () => dispatch("decrement");
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{state.count}</Text>
      <Button title="Increment" onPress={handleIncrement}></Button>
      <Button title="Decrement" onPress={handleDecrement}></Button>
    </View>
  );
};

export default UseReducerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 32,
  },
});
