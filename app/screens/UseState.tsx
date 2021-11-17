import React, { FunctionComponent, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const UseStateScreen: FunctionComponent = () => {
  const [counter, setCounter] = useState<number>(0);
  return (
    <View style={styles.container}>
      <Button
        title="Increment"
        onPress={() => {
          setCounter(counter + 1);
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          setCounter(counter - 1);
        }}
      />
      <Text>{counter}</Text>
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
