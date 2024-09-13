import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { SearchBar } from "react-native-screens";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchHeader}>
        <View style={styles.searchBar}>
            
        </View>
        <View style={styles.bellIcon}>
          <MaterialCommunityIcons name="bell" size={30} color="white" />
        </View>
      </View>
      <View style={styles.hello}>
        <Text style={styles.helloText}>Hi!</Text>
        <Text
          style={{
            fontSize: 23,
            color: "#3F4883",
          }}
        >
          Good Morning,
        </Text>
        <Text
          style={{
            fontSize: 20,
            color: "#3F4883",
            fontWeight: "bold",
          }}
        >
          Mr. Rehan
        </Text>
      </View>
      <View style={{ borderBottomWidth: 1, margin: "5%" }} />
      <View style={{ margin: "5%" }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text>RECENT LEARNINGS</Text>
          <TouchableOpacity>
            <Text>View All</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ margin: "5%" }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text>FEATURED COURSES</Text>
          <TouchableOpacity>
            <Text>View All</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  hello: {
    marginTop: "40%",
    marginLeft: "8%",
    margin: "5%",
  },
  helloText: {
    fontSize: 28,
    color: "#3F4883",
    fontWeight: "bold",
  },
  bellIcon: {
    backgroundColor: "#3F4883",
    height: "48%",
    borderRadius: 800,
    width: "10%",
    alignItems: "center",
    justifyContent: "center",
  },
  searchHeader: {
    flexDirection: "row",
    marginTop: "10%",
    height: "8%",
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  searchBar: {
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#ccc",
    width: "80%",
    height: "80%",
  },
});

export default Home;
