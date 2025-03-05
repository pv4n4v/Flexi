import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Home'); // Navigate to HomeScreen after 3 seconds
    }, 3000);
    
    return () => clearTimeout(timer); // Cleanup timeout when unmounting
  }, [navigation]);

  return (
    <View style={styles.screen}>
      <View style={styles.card}>
        {/* Ensure the image path is correct */}
        <Image source={require('../../assets/logo.png')} style={styles.icon} />
      </View>
      <Text style={styles.text}>Flexi</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d0f9fd', // Light blue background
  },
  card: {
    width: 100,
    height: 100,
    backgroundColor: '#175d73',
    borderRadius: 9999, // Circle shape
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 48,
    height: 48,
    resizeMode: 'contain', // Ensures the image scales properly
    tintColor: '#eef92d', // Yellow color (Only works on monochrome images)
  },
  text: {
    marginTop: 20,
    color: '#175d73',
    fontSize: 30,
    fontWeight: '700',
  },
});

export default SplashScreen;
