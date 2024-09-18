import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AntDesign from "@expo/vector-icons/AntDesign";
import Home from "../screens/HomeScreen";
import Quiz from "../screens/QuizPage";
import Profile from "../screens/ProfileScreen";
import { StyleSheet, View, Text } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';

const HomeTabScreen = () => {
  const Tab = createBottomTabNavigator();
  return (
    <SafeAreaProvider>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let labelText;
            let customStyle = styles.iconDefault;

            // Assign icons and labels for each tab
            if (route.name === "Home") {
              iconName = "home";
              labelText = "HOME";
            } else if (route.name === "Quiz") {
              iconName = "barschart";
              labelText = "QUIZ";
            } else if (route.name === "Profile") {
              iconName = "user";
              labelText = "PROFILE";
            }

            // Apply focused style if the tab is selected
            customStyle = focused
              ? styles.iconWithBackground
              : styles.iconDefault;

            return (
              <View style={customStyle}>
                <AntDesign name={iconName} size={size} color={color} />
                {focused && <Text style={styles.tabText}>{labelText}</Text>}
              </View>
            );
          },
          tabBarActiveTintColor: "#3F4883",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: styles.tabBarStyle,
          tabBarLabel: () => null, // Hides the default tab label
        })}
      >
        <Tab.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Tab.Screen name="Quiz" component={Quiz} options={{ headerShown: false }}/>
        <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
      </Tab.Navigator>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 60,
  },
  iconDefault: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconWithBackground: {
    flexDirection: "row",
    backgroundColor: "#E5E5F7", // Light background color for active Home tab
    padding: 8,
    borderRadius: 25,
  },
  homeText: {
    marginLeft: 8,
    fontWeight: "bold",
    color: "blue", // Customize this as per your design
  },
  tabText: {
    marginLeft: 8,
    fontWeight: "bold",
    color: "#3F4883", // Customize this as per your design
  },
});

export default HomeTabScreen;
