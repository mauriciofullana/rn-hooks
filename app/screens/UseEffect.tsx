import React, { FunctionComponent, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const UseEffectScreen: FunctionComponent = () => {
  return (
    <View style={styles.container}>
      <Text>useEffect</Text>
    </View>
  );
};

export default UseEffectScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
