import React, { FunctionComponent, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const UseLayoutEffectScreen: FunctionComponent = () => {
  return (
    <View style={styles.container}>
      <Text>useLayoutEffect</Text>
    </View>
  );
};

export default UseLayoutEffectScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
