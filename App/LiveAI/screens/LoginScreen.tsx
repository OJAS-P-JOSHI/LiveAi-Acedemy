import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Login = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => {navigation.navigate("Home")}}>
        <Text>Open up Login.tsx to start working on your app!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Login;
