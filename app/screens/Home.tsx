import React, { FunctionComponent } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackParamList } from "../navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<StackParamList, "Home">;

const HOOKS = [
  "useState",
  "useReducer",
  "useEffect",
  "useRef",
  "useLayoutEffect",
  "useImperativeHandle",
  "useContext",
  "useMemo",
  "useCallback",
];

type Hook = typeof HOOKS[number];

const renderButton = (hook: string, navigation: any) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() =>
        navigation.navigate(hook.charAt(0).toUpperCase().concat(hook.slice(1)))
      }
    >
      <Text style={styles.buttonText}>{hook}</Text>
    </TouchableOpacity>
  );
};

const Home: FunctionComponent<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {HOOKS.map((hook) => renderButton(hook, navigation))}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 50,
    paddingHorizontal: 25,
  },
  button: {
    width: "100%",
    height: 54,
    borderRadius: 10,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 24,
  },
});
