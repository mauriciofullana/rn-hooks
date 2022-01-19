import axios from "axios";
import React, { FunctionComponent, useState, useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const UseEffectScreen: FunctionComponent = () => {
  const [dependecy, setDependecy] = useState<boolean>(false);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => console.log(res.data));
    return () => {
      console.log("clean up");
    };
  }, [dependecy]);

  const handleState = () => {
    setDependecy((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <Text>useEffect</Text>
      <Button title="Change state" onPress={handleState} />
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
