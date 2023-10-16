import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TextInput, StyleSheet } from 'react-native';

const App = () => {
  const [favoriteCourse, setFavoriteCourse] = useState('');

  return (
    <ScrollView style={{margin: 10}}>
        <Image source={require('./assets/icon.png')} style={{width: 200, height: 200}} />
        
        <Text>Which course did you like?</Text>
        
        <TextInput
          placeholder="ex. CS624"
          value={favoriteCourse}
          onChangeText={setFavoriteCourse}
          style={{
            borderWidth: 1,
            borderColor: '#000',
            padding: 10,
            borderRadius: 5,
          }}
        />

        <View style={styles.coursesContainer}>
          <Text style={styles.courseHeader}>Core Requirements (24 credits)</Text>
          <Text style={styles.courseItem}>{favoriteCourse}</Text>
          <Text style={styles.courseItem}>CS 506 Programming for Computing</Text>
          <Text style={styles.courseItem}>CS 519 Cloud Computing Overview</Text>
          <Text style={styles.courseItem}>CS 533 Computer Architecture</Text>
          <Text style={styles.courseItem}>CS 547 Secure Systems and Programs</Text>
          <Text style={styles.courseItem}>CS 622 Discrete Math and Algorithms for Computing</Text>
          <Text style={styles.courseItem}>DS 510 Artificial Intelligence for Data Science</Text>
          <Text style={styles.courseItem}>DS 620 Machine Learning & Deep Learning</Text>
        </View>
        <View style={styles.coursesContainer}>
          <Text style={styles.courseHeader}>Depth of Study (6 credits)</Text>
          <Text style={styles.courseItem}>CS 624 Full-Stack Development I</Text>
          <Text style={styles.courseItem}>CS 628 Full-Stack Development II</Text>
        </View>
        <View style={styles.coursesContainer}>
          <Text style={styles.courseHeader}>Capstone Course (3 credits)</Text>
          <Text style={styles.courseItem}>CS 687 Computer Science Capstone</Text>
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  coursesContainer: {
    marginTop: 20
  },
  courseHeader: {
    fontSize: 34,
    fontWeight: 'bold',
    marginTop: 10,
    backgroundColor: 'yellow'
  },
});

export default App;