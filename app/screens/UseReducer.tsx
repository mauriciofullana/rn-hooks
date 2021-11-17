import React, { FunctionComponent, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const UseReducerScreen: FunctionComponent = () => {
  return (
    <View style={styles.container}>
      <Text>useReducer</Text>
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
});
