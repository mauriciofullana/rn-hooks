import React, { FunctionComponent, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const UseRefScreen: FunctionComponent = () => {
  return (
    <View style={styles.container}>
      <Text>useRef</Text>
    </View>
  );
};

export default UseRefScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
