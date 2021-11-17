import React, { FunctionComponent, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const UseMemoScreen: FunctionComponent = () => {
  return (
    <View style={styles.container}>
      <Text>useMemo</Text>
    </View>
  );
};

export default UseMemoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
