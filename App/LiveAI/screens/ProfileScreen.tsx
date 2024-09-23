import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Button,
} from "react-native";
import { Icon } from "react-native-elements";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";


const ProfileScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          height: 40,
          flexDirection: "row",
          marginTop: "8%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <AntDesign name="left" size={30} color="#3F4883" />
          <Text style={{ fontSize: 24, marginLeft: "5%" }}>Profile</Text>
        </View>
        <View style={{ marginRight: "5%" }}>
          <Ionicons name="settings-sharp" size={27} color="#3F4883" />
        </View>
      </View>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Image
          source={require("../assets/Ellipse3.png")}
          style={styles.userImage}
        />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Student Name</Text>
        <Text style={styles.infoText}>Student@gmail.com</Text>
        <Text style={styles.infoText}>1234567890</Text>
      </View>

      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => console.log("Logout")}
      >
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "center",
    marginBottom: 50,
    marginTop: 20,
  },
  logo: {
    width: 120,
    height: 120,
  },
  userImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    alignSelf: "center",
    marginVertical: 20,
  },
  infoContainer: {
    alignItems: "center",
    marginVertical: 10,
  },
  infoText: {
    fontSize: 18,
    marginVertical: 5,
  },
  logoutButton: {
    backgroundColor: "#3388B7",
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 50,
    marginVertical: 20,
    alignItems: "center",
  },
  logoutText: {
    color: "#fff",
    fontSize: 18,
  },
});

export default ProfileScreen;
