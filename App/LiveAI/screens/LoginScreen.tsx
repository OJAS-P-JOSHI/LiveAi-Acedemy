import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  Alert,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Google from "../assets/google";

const Login = () => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate('OTP'); 
  };
  return (
    <View style={styles.container}>
      <View>
        <Image source={require("../assets/ai logo.jpg")} style={styles.image} />
        <Text style={styles.title}>Illuminate the Path to</Text>
        <Text style={styles.title1}>Innovation with AI Mastery</Text>
      </View>
      <TouchableOpacity onPress={handlePress}>
        <View style={{ marginBottom: "40%", height: "10%" }}>
          <Google />
        </View>
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
  button: {
    margin: 50,
    overflow: "hidden",
    width: 350,
    borderRadius: 8,
  },
  inputContainer: {},
  inputBox: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    height: "20%",
    width: "69%",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
    color: "black",
  },
  title: {
    fontSize: 30,
    alignItems: "center",
    color: "#2F88A0",
    fontWeight: "bold",
  },
  title1: {
    fontSize: 30,
    alignItems: "center",
    color: "#2F88A0",
    fontWeight: "bold",
  },
  email: {
    color: "#E7AA43",
    fontSize: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  spacing: {
    // marginTop: 20,
  },
  spacing1: {
    // marginTop: 20,
  },
  image: {
    width: 250,
    backgroundColor: "black",
    height: "50%",
    borderRadius: 100,
    left: "10%",
  },
});
export default Login;

