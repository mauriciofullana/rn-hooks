import React, { FunctionComponent, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const UseImperativeHandleScreen: FunctionComponent = () => {
  return (
    <View style={styles.container}>
      <Text>useImperativeHandle</Text>
    </View>
  );
};

export default UseImperativeHandleScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
