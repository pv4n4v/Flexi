import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Flexi</Text>
      <Text style={styles.subtitle}>Find short-term gigs easily.</Text>
      <Image source={require('../assets/images/welcome-banner.png')} style={styles.image} />

      <TouchableOpacity style={styles.button} onPress={() => router.push('/signup')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonOutline} onPress={() => router.push('/login')}>
        <Text style={styles.buttonOutlineText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d0f9fd',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#175d73',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  image: {
    width: 250,
    height: 250,
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#175d73',
    padding: 15,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  buttonOutline: {
    borderWidth: 2,
    borderColor: '#175d73',
    padding: 15,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonOutlineText: {
    color: '#175d73',
    fontSize: 16,
  },
});
