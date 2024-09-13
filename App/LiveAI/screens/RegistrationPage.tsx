import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // For dropdown
import SelectDropdown from 'react-native-select-dropdown'; // For searchable dropdown

const RegistrationPage = () => {
  const [selectedEducation, setSelectedEducation] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');

  const educationLevels = [
    "8th/9th/10th", "11th/12th", "Bachelor of Technology (B.Tech)", "Bachelor of Engineering (B.E.)",
    "Bachelor of Computer Applications (BCA)", "Bachelor of Commerce (B.Com)", "Bachelor of Science (B.Sc)",
    "Master of Technology (M.Tech)", "Master of Engineering (M.E.)", "Master of Computer Applications (MCA)",
    "Master of Commerce (M.Com)", "Master of Science (M.Sc)", "Other"
  ];

  const districts = [
    "Agartala", "Agra", "Ahmedabad", "Aizawl", "Ajmer", "Alappuzha", "Aligarh", "Allahabad", "Almora", "Alwar", "Ambala", "Ambassa", "Amravati",
    "Amritsar", "Anand", "Anantapur", "Ara", "Bagalkot", "Bageshwar", "Bagmara", "Ballari", "Bareilly", "Bardhaman", "Baddi", "Balangir", "Balasore",
    "Baleshwar", "Bapatla", "Baripada", "Bathinda", "Beed", "Belagavi", "Belonia", "Bengaluru", "Berhampur", "Bhandara", "Bharuch", "Bhadrak", 
    "Bhagalpur", "Bhavnagar", "Bhiwani", "Bhilai", "Bhilwara", "Bhopal", "Bhubaneswar", "Bidar", "Bicholim", "Bilaspur", "Bodh Gaya", "Bokaro", 
    "Bomdila", "Canacona", "Chamoli", "Chamba", "Chandel", "Chhatrapati Sambhajinagar", "Cherrapunji", "Chennai", "Chikkamagaluru", "Chittoor", 
    "Churachandpur", "Coimbatore", "Cuddalore", "Curchorem", "Cuttack", "Darbhanga", "Darjeeling", "Davangere", "Dehradun", "Dewas", "Dhamtari", 
    "Dhanbad", "Dibrugarh", "Dimapur", "Dindigul", "Diphu", "Dispur", "Diu", "Durg", "Ernakulam", "Erode", "Faridabad", "Faridkot", "Fatehgarh Sahib", 
    "Ferozepur", "Gadchiroli", "Gandhinagar", "Gangtok", "Gaya", "Ghaziabad", "Giridih", "Goa", "Goalpara", "Golaghat", "Gondia", "Gorakhpur", 
    "Guntur", "Guwahati", "Gwalior", "Hamirpur", "Haldwani", "Haridwar", "Hassan", "Hazaribagh", "Hisar", "Hingoli", "Howrah", "Hubballi", "Hyderabad", 
    "Idukki", "Imphal", "Indore", "Itanagar", "Jabalpur", "Jagdalpur", "Jalandhar", "Jalgaon", "Jalna", "Jamshedpur", "Jamnagar", "Jorhat", "Jodhpur", 
    "Junagadh", "Kailasahar", "Kakinada", "Kalaburagi", "Kanchipuram", "Kanpur", "Karnal", "Karimnagar", "Kasaragod", "Katni", "Khammam", "Kharagpur", 
    "Khonsa", "Kochi", "Kohima", "Kolhapur", "Kollam", "Kozhikode", "Kurnool", "Kurukshetra", "Lachung", "Latur", "Lawngtlai", "Lucknow", "Ludhiana", 
    "Lunglei", "Madurai", "Mairang", "Malkangiri", "Mamit", "Mandi", "Mangaluru", "Mapusa", "Margao", "Meerut", "Mohali", "Mormugao", "Muzaffarpur", 
    "Mysuru", "Nagaland", "Nagpur", "Nagaon", "Nainital", "Namchi", "Nanded", "Nandurbar", "Nashik", "Nellore", "Nizamabad", "Dharashiv", "Palakkad", 
    "Palamu", "Palghar", "Panaji", "Panipat", "Patiala", "Patna", "Pasighat", "Pauri", "Phek", "Pimpri-Chinchwad", "Pithoragarh", "Pune", "Puri", 
    "Raigad", "Raigarh", "Raipur", "Rajahmundry", "Rajkot", "Rajnandgaon", "Rajahmundry", "Ratlam", "Ratnagiri", "Rohtak", "Rourkela", "Sagar", 
    "Saharsa", "Salem", "Sangli", "Saraikela", "Satara", "Shillong", "Shimla", "Silchar", "Siliguri", "Sindhudurg", "Sikar", "Solan", "Solapur", 
    "Sonipat", "Surat", "Suryapet", "Tawang", "Tezpur", "Thane", "Thanjavur", "Thiruvananthapuram", "Thrissur", "Tiruchirappalli", "Tirunelveli", 
    "Tirupati", "Tura", "Udaipur", "Udaipur (Tripura)", "Udhampur", "Ujjain", "Ukhrul", "Umarkhed", "Uttarkashi", "Vadodara", "Varanasi", "Vijayawada", 
    "Visakhapatnam", "Vizianagaram", "Wardha", "Warangal", "Washim", "Wokha", "Yavatmal", "Yadadri"
  ];

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 20, backgroundColor: '#fff' }}>
      {/* Logo */}
      <View style={{ alignItems: 'center', marginTop: 20 }}>
        <Image source={require('C:\LiveAi-Acedemy\App\LiveAI\assets\logo.jpg')} style={{ width: 100, height: 100 }} />
      </View>

      {/* Title */}
      <Text style={{ textAlign: 'center', color: 'blue', fontSize: 20, marginVertical: 20 }}>
        Fill your details
      </Text>

      {/* Form Fields */}
      <TextInput placeholder="Full Name" style={styles.input} />
      <TextInput placeholder="Email ID" style={styles.input} keyboardType="email-address" />
      <TextInput placeholder="Mobile Number" style={styles.input} keyboardType="phone-pad" />
      <TextInput placeholder="Address" style={styles.input} />
      <TextInput placeholder="College Name" style={styles.input} />

      {/* Current Education (Dropdown) */}
      <SelectDropdown
        data={educationLevels}
        onSelect={(selectedItem) => setSelectedEducation(selectedItem)}
        defaultButtonText="Select Current Education"
        buttonStyle={styles.dropdown}
        buttonTextStyle={styles.dropdownText}
        search
        searchPlaceHolder="Search Education"
      />

      {/* District (Dropdown) */}
      <SelectDropdown
        data={districts}
        onSelect={(selectedItem) => setSelectedDistrict(selectedItem)}
        defaultButtonText="Select District"
        buttonStyle={styles.dropdown}
        buttonTextStyle={styles.dropdownText}
        search
        searchPlaceHolder="Search District"
      />

      {/* Submit Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Proceed</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = {
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
  },
  dropdown: {
    width: '100%',
    marginVertical: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
  dropdownText: {
    textAlign: 'left',
    fontSize: 16,
  },
  button: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  }
};

export default RegistrationPage;