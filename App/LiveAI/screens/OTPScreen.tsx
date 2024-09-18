import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  Alert,
} from "react-native";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const OTP = () => {
  const navigation = useNavigation();
  const [timeRemaining, setTimeRemaining] = useState<number>(120);
  const [otp, setOtp] = useState<string>("");

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime > 0) {
          return prevTime - 1;
        } else {
          clearInterval(timer);
          return 120; 
        }
      });
    }, 1000);

    
    return () => clearInterval(timer);
  }, []);

  const handleOtpChange = (text: string, index: number) => {
    const otpArray = otp.split(""); // Split the current OTP into an array
    otpArray[index] = text; // Replace the value at the given index
    setOtp(otpArray.join("")); // Join the array back into a string and update the state
  };

  
  const verifyOtp = async () => {
    navigation.navigate('HomeTab'); 
  };

  return (
    <View style={styles.container}>
      <View>
        <Image source={require("../assets/ailogo.jpg")} style={styles.image} />
        <Text style={styles.title}>Illuminate the Path to</Text>
        <Text style={styles.title1}>Innovation with AI Mastery</Text>
      </View>

      <View style={{marginBottom:80}}>
        <Text style={[styles.email, styles.spacing]}>Enter OTP</Text>
        <View>
          <Text style={styles.timing}>OTP in {timeRemaining}s</Text>
        </View>

        <View style={styles.otpContainer}>
          {Array(5)
            .fill("")
            .map((_, index) => (
              <TextInput
                key={index}
                style={styles.otpInput}
                maxLength={1}
                keyboardType="numeric"
                value={otp[index] ? otp[index] : ""}
                onChangeText={(text) => handleOtpChange(text, index)}
              />
            ))}
        </View>

        <View style={{ justifyContent: "flex-end" }}>
          <Button
            style={styles.button}
            title="Submit"
            onPress={verifyOtp} 
          />
        </View>
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
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10, 
    marginBottom: 20,
  },
  otpInput: {
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 8,
    textAlign: "center",
    fontSize: 20,
    width: 40,
    height: 50,
    marginHorizontal: 5,
  },
  button: {
    margin: 50,
    overflow: "hidden",
    width: 350,
    borderRadius: 8,
  },
  timing: {
    fontWeight: "700",
    fontSize: 20,
  },
  title: {
    fontSize: 30,
    color: "#2F88A0",
    fontWeight: "bold",
    textAlign: "center",
  },
  title1: {
    fontSize: 30,
    color: "#2F88A0",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10, 
  },
  email: {
    color: "#E7AA43",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 5, 
  },
  image: {
    width: 270,
    backgroundColor: "black",
    height: "50%",
    borderRadius: 100,
    left: "10%",
    marginBottom: 10, 
  },
});

export default OTP;
