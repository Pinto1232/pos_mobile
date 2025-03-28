import { useEffect, useRef, useState } from 'react';
import { View, Image, StyleSheet, ActivityIndicator, Animated, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

export default function SplashScreen() {
  const router = useRouter();
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [dots, setDots] = useState('');

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.2,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();

    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();

    const dotInterval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + '.' : ''));
    }, 500);

    const timer = setTimeout(() => {
      router.replace('/auth/login');
    }, 126000);

    return () => {
      clearTimeout(timer);
      clearInterval(dotInterval);
    };
  }, []);

  return (
    <LinearGradient
      colors={['#1A237E', '#B2EBF2']} // Lighter bottom color
      locations={[0, 1]} // Ensure the length matches the colors array
      style={styles.gradient}
    >
      <View style={styles.container}>
        <Animated.Image
          source={require('../assets/images/logo.jpg')}
          style={[styles.logo, { transform: [{ scale: scaleAnim }] }]}
        />
        <Animated.Text style={[styles.text, { opacity: fadeAnim }]}>
          Welcome To Pisval Tech POS
        </Animated.Text>
        <ActivityIndicator size="large" color="#4E67EB" style={styles.loader} />
        <Text style={styles.loadingText}>
          Loading{dots}
        </Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    alignSelf: 'center',
    borderRadius: 80,
  },
  text: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  loader: { marginTop: 20, color: 'blue' },
  bottomImage: {
    width: 200,
    height: 250,
    resizeMode: 'contain',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
  },
});
