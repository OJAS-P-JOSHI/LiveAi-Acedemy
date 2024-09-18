import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, SafeAreaView, ScrollView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RegistrationPage = () => {
  const navigation = useNavigation();

  const handleRegister = () => {
    // Navigation logic for Register button
    navigation.navigate('RegisterScreen'); // Replace with actual screen name
  };

  const navigateToHome = () => {
    // Navigation logic for Home
    navigation.navigate('Home');
  };

  const navigateToCourses = () => {
    // Navigation logic for Your Courses
    navigation.navigate('YourCourses');
  };

  const navigateToProfile = () => {
    // Navigation logic for Profile
    navigation.navigate('Profile');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={require('../assets/logo.jpg')} style={styles.logo} />
        <Text style={styles.headerText}>Fill your details to register for course</Text>
        
        <View style={styles.form}>
          <TextInput placeholder="Full Name" style={styles.input} />
          <TextInput placeholder="Email ID" keyboardType="email-address" style={styles.input} />
          <TextInput placeholder="Mobile Number" keyboardType="phone-pad" style={styles.input} />
          <TextInput placeholder="Address" style={styles.input} />
          <TextInput placeholder="College Name" style={styles.input} />
          <TextInput placeholder="Current Education" style={styles.input} />
          <TextInput placeholder="District" style={styles.input} />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Register for Course</Text>
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton} onPress={navigateToHome}>
          <Text style={styles.footerButtonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton} onPress={navigateToCourses}>
          <Text style={styles.footerButtonText}>Your Courses</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton} onPress={navigateToProfile}>
          <Text style={styles.footerButtonText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  headerText: {
    color: '#3388B7',
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  form: {
    width: '100%',
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 15,
    borderRadius: 30,
  },
  button: {
    backgroundColor: '#3388B7',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#f8f8f8',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    ...Platform.select({
      ios: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
      },
      android: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
      },
    }),
  },
  footerButton: {
    padding: 10,
  },
  footerButtonText: {
    color: '#3388B7',
    fontSize: 16,
  },
});

export default RegistrationPage;
