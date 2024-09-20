import React from "react";
import { Text, View, StyleSheet,Image ,TouchableOpacity} from "react-native";

const CourseDetail = () => {
  return (
    <View style={styles.container}>
      <View style={styles.course}>
              
                <Image
                  source={require("../assets/image.png")}
                  style={styles.courseimage}
                />
                <View style={styles.courseDetail}>
                  <Text style={styles.courseHeading}>Computer Vision</Text>
                  <Text style={styles.teacherHeading}>By Prof. Anil Rokde</Text>
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
  courseimage: {
    width: "98%",
    borderRadius: 12,
    height: "55%",
    alignItems:"center",
    
  },
  course: {
    width: "100%",
    marginTop: "2%",
  },
  courseDetail: {
    bottom: "27%",
    marginLeft: "2%",
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
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default CourseDetail;
