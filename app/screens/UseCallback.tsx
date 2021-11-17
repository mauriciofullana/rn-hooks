import React, { FunctionComponent, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const UseCallbackScreen: FunctionComponent = () => {
  return (
    <View style={styles.container}>
      <Text>useCallback</Text>
    </View>
  );
};

export default UseCallbackScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
