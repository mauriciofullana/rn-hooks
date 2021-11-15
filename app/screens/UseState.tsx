import React, { FunctionComponent } from "react";
import { View, Text, StyleSheet } from "react-native";

const UseStateScreen: FunctionComponent = () => {
  return (
    <View style={styles.container}>
      <Text>UseState</Text>
    </View>
  );
};

export default UseStateScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
