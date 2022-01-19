import React, { FunctionComponent, useRef, useState } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";

const UseRefScreen: FunctionComponent = () => {
  const [name, setName] = useState<string>("Mauricio");
  const inputRef = useRef<TextInput>(null);

  const handleButtonPress = () => {
    inputRef.current?.focus();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          ref={inputRef}
          value={name}
          onChangeText={setName}
          placeholder="Name"
        />
      </View>
      <Button title="Focus" onPress={handleButtonPress} />
    </View>
  );
};

export default UseRefScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 25,
  },
  text: {
    fontSize: 32,
  },
  inputContainer: {
    width: "100%",
    borderColor: "black",
    borderBottomWidth: 1,
    marginTop: 20,
    paddingVertical: 10,
  },
});
