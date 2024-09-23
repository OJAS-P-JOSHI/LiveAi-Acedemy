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
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import GoogleSignIn from "../assets/google";
import { logo } from "../utils/Constant";
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import { getAuth, GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
import { auth } from "./firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";

WebBrowser.maybeCompleteAuthSession();

const Login = () => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate('HomeTab'); 
  };
  const [user, setUser] = useState(null);
  // useEffect(() => {
  //   console.log("here");
    
  //   if (response?.type === "success") {
  //     handleSignInWithGoogle();
  //   }
  //   else if (response?.type === "error") {
  //     console.log("Error during sign-in", response.error);
  //   }
  // }, []);

  // Configure Google Auth request
  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: '339893999874-lduf9hubbb0sqdrf6id4kjnoumg00rju.apps.googleusercontent.com',
    androidClientId: '339893999874-tqp83ovltih6h291eh7bdn60qq2opsps.apps.googleusercontent.com',
    iosClientId: '339893999874-t5e91akvq9f7cqvumvuamg8ofnh6vdla.apps.googleusercontent.com',
    // redirectUri: 'exp://192.168.1.5:8081'
  });

  console.log("response1", response);

  useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params;

      // Pass the token to Firebase
      const authCredential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, authCredential)
        .then(async (userCredential) => {
          const user = userCredential.user;
          await AsyncStorage.setItem('@user', JSON.stringify(user)); // Store user data
          setUser(user);
          navigation.navigate('HomeTab'); // Redirect to Home screen
        })
        .catch((error) => {
          console.log('Firebase sign-in error: ', error);
        });
    }
  }, [response]);
  

  // async function handleSignInWithGoogle() {
  //   const user = await AsyncStorage.getItem("@user");
  //   if(!user){
  //     if(response?.type === "success"){
  //       console.log("response", response)
  //       await getUserInfo(response.authentication?.accessToken);
  //       console.log("done handlesignin");
        
  //     }
  //   } else {
  //     setUser(JSON.parse(user));
  //     navigation.navigate("HomeTab");
  //   }
  // }

  // const getUserInfo = async (token) => {
  //   if (!token) return;
  //   try{
  //     const response = await fetch(
  //       "https://www.googleapis.com/userinfo/v2/me",
  //       {
  //         headers: {Authorization: `Bearer ${token}`},
  //       }
  //     );

  //     const user = await response.json();
  //     await AsyncStorage.setItem("@user", JSON.stringify(user));
  //     setUser(user);
  //     navigation.navigate("HomeTab");
  //     console.log("Done getuserinfo");
      
  //   } catch(error){
  //     console.log("error signing in", error);
  //   }
  // };




  return (
    <View style={styles.container}>
      <View>
        <Image source={require("../assets/ailogo.jpg")} style={styles.image} />
        <Text style={styles.title}>Illuminate the Path to</Text>
        <Text style={styles.title1}>Innovation with AI Mastery</Text>
      </View>
      
        <View style={{ marginBottom: "40%", height: "10%",width:"90%",marginLeft:"10%" }}>
        <TouchableOpacity onPress={() => promptAsync()}
          disabled={!request}>
          <GoogleSignIn width={ "90%"} height={"100%"} />
          </TouchableOpacity>
        </View>
     
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
    textAlign:"center",
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
    height: "50%",
    borderRadius: 100,
    left: "10%",
  },
});
export default Login;
