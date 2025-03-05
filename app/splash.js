import { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.replace('/welcome'); // Navigate to Welcome Screen
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/splash-logo-demo.png')} style={styles.logo} />
      <Text style={styles.text}>Flexi</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d0f9fd',
  },
  logo: {
    width: 100,
    height: 100,
  },
  text: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#175d73',
  },
});
