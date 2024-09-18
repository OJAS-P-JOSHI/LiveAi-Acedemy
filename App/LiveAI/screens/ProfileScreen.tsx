import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView, Button } from 'react-native';
import { Icon } from 'react-native-elements';

const ProfileScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header: Logo and Edit Icon */}
      <View style={styles.header}>
        <Image 
          source={require('../assets/ailogo.jpg')} // replace with your logo path
          style={styles.logo}
        />
        <TouchableOpacity onPress={() => console.log('Edit Profile')}>
          <Icon name="edit" type="font-awesome" size={24} color="#3388B7" />
          <Text style={{ color: '#3388B7' }}>Edit Profile</Text>

        </TouchableOpacity>
      </View>

      {/* User Image */}
      <Image 
        source={require('../assets/demo-user.jpg')} // replace with your user image path
        style={styles.userImage}
      />

      {/* User Info */}
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Student Name</Text>
        <Text style={styles.infoText}>Student@gmail.com</Text>
        <Text style={styles.infoText}>1234567890</Text>
      </View>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton} onPress={() => console.log('Logout')}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
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
    alignSelf: 'center',
    marginVertical: 20,
  },
  infoContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  infoText: {
    fontSize: 18,
    marginVertical: 5,
  },
  logoutButton: {
    backgroundColor: '#3388B7',
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 50,
    marginVertical: 20,
    alignItems: 'center',
  },
  logoutText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default ProfileScreen;
