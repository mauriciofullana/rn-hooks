import axios from "axios";
import React, { FunctionComponent, useState, useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const UseEffectScreen: FunctionComponent = () => {
  const [dependecy, setDependecy] = useState<boolean>(false);
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      axios
        .get("https://jsonplaceholder.typicode.com/todos/1")
        .then((res) => {
          console.log(res.data);
          setData(res.data);
        })
        .finally(() => setLoading(false));
    }, 2000);
  }, [dependecy]);

  const handleState = () => {
    setDependecy((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      {loading && <Text>Loading...</Text>}
      {data && !loading && <Text>{data.title}</Text>}
      <Button title="Change dependency status" onPress={handleState} />
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
