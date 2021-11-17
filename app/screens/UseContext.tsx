import React, { FunctionComponent, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const UseContextScreen: FunctionComponent = () => {
  return (
    <View style={styles.container}>
      <Text>useContext</Text>
    </View>
  );
};

export default UseContextScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
