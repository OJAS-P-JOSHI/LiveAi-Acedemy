import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,  Dimensions,
} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import { courseImage } from "../utils/Constant";

const { width, height } = Dimensions.get('window');

const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"} // Handle different platforms
        style={styles.avoidingView}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20} // Adjust if needed for your layout
      >
        <ScrollView
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps="handled"
          keyboardDismissMode="on-drag"
        >
          <View style={styles.searchHeader}>
            <View style={styles.searchBar}>
              <TouchableOpacity
                style={{ flexDirection: "row", marginHorizontal: "3%" }}
              >
                <MaterialIcons name="search" size={34} color="#3F4883" />
                <View style={styles.verticalLine} />
                <TextInput
                  placeholder="Search Anaything..."
                  style={{ color: "#3F4883", width: "80%", flex: 1 }}
                  returnKeyType="search"
                />
              </TouchableOpacity>
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
                fontSize: 22,
                color: "#3F4883",
                fontWeight: "bold",
              }}
            >
              Mr. Rehan
            </Text>
          </View>
          <View style={{ borderBottomWidth: 1, marginHorizontal: "5%" }} />
          <View style={styles.courseView}>
            <View style={styles.recent}>
              <Text style={styles.courseText}>RECENT LEARNINGS</Text>
              <TouchableOpacity onPress={() => {}} style={styles.viewAll}>
                <Text style={styles.viewAllText}>View all</Text>
                <MaterialIcons
                  name="arrow-forward-ios"
                  size={19}
                  color="#1435DF"
                />
              </TouchableOpacity>
            </View>
            <View style={styles.course}>
              <TouchableOpacity onPress={() => {navigation.navigate("RegisterScreen")}}>
                <Image
                  source={courseImage}
                  style={styles.courseimage}
                />
                <View style={styles.courseDetail}>
                  <Text style={styles.courseHeading}>Computer Vision</Text>
                  <Text style={styles.teacherHeading}>By Prof. Anil Rokde</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.courseView}>
            <View style={styles.recent}>
              <Text style={styles.courseText}>FEATURED COURSES</Text>
              <TouchableOpacity style={styles.viewAll}>
                <Text style={styles.viewAllText}>View all</Text>
                <MaterialIcons
                  name="arrow-forward-ios"
                  size={19}
                  color="#1435DF"
                />
              </TouchableOpacity>
            </View>
            <View style={styles.course}>
              <Image
                source={courseImage}
                style={styles.courseimage}
              />
              <View style={styles.courseDetail}>
                <Text style={styles.courseHeading}>Computer Vision</Text>
                <Text style={styles.teacherHeading}>By Prof. Anil Rokde</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white", // Or any background color you need
  },
  container: {
    width: width * 0.9,  // 90% of the screen width
    height: height * 0.5,
    backgroundColor: "#fff",
  },
  hello: {
    marginBottom: "3%",
    marginLeft: "8%",
    marginTop: "6%",
  },
  helloText: {
    fontSize: 28,
    color: "#3F4883",
    fontWeight: "bold",
  },
  bellIcon: {
    backgroundColor: "#3F4883",
    height: "100%",
    borderRadius: 800,
    width: "14%",
    alignItems: "center",
    justifyContent: "center",
  },
  searchHeader: {
    flexDirection: "row",
    marginTop: "10%",
    height: 50,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: "2%",
  },
  searchBar: {
    borderRadius: 27,
    borderWidth: 1,
    backgroundColor: "#e2dfdf",
    borderColor: "#f1f0f0f6b",
    width: "85%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  verticalLine: {
    width: 2, // Thickness of line
    height: "100%", // Height
    backgroundColor: "#3F4883", // color
    marginHorizontal: "1%", // Space between the icon and the line
  },
  courseView: {
    marginHorizontal: "5%",
    height: "28%",
    marginVertical: "5%",
  },
  courseHeading: {
    color: "white",
    fontSize: 20,
    fontWeight: "700",
  },
  teacherHeading: {
    color: "white",
    fontSize: 18,
  },
  courseText: {
    fontSize: 20,
  },
  recent: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  courseDetail: {
    bottom: "27%",
    marginLeft: "2%",
  },
  courseimage: {
    width: "100%",
    borderRadius: 12,
    height: "85%",
  },
  viewAll: {
    backgroundColor: "#e4e4ea",
    width: "25%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    flexDirection: "row",
  },
  viewAllText: {
    color: "#1435DF",
    fontSize: 16,
    fontWeight: "400",
  },
  course: {
    width: "100%",
    marginTop: "2%",
  },
  avoidingView: {
    flex: 1,
  },
});

export default Home;
