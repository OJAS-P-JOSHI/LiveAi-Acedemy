import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function CourseDetail() {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate("ChatBot"); 
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress}>
      <View style={{ marginTop: "70%" }}>
        <Text style={styles.text}>COURSE DETAILS</Text>
        <View style={styles.spacer} />
        <View style={styles.horizontalLine} />
      </View>
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    left:"5%",
  },
  spacer: {
    height: 20, 
  },
  horizontalLine: {
    width: "100%", 
    height: 1, // Line height
    backgroundColor: "grey", // Line color
    marginBottom: 50,
  },
});
