import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/LoginScreen';
import CourseDetail from './screens/CourseDetail';
import OTP from './screens/OTPScreen';
// import ChatBot from './screens/Chatboat';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{headerShown: false }} />
      <Stack.Screen name="OTP" component={OTP} options={{headerShown: false }} />
      <Stack.Screen name="CourseDetail" component={CourseDetail} options={{headerShown: false }} />
      {/* <Stack.Screen name="ChatBot" component={ChatBot} options={{headerShown: false }} /> */}
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
