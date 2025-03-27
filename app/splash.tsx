import { useEffect, useRef } from 'react';
import { View, Image, StyleSheet, ActivityIndicator, Animated, Text } from 'react-native';
import { useRouter } from 'expo-router';

export default function SplashScreen() {
  const router = useRouter();
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

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

    const timer = setTimeout(() => {
      router.replace('/auth/login');
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../assets/images/logo.jpg')}
        style={[styles.logo, { transform: [{ scale: scaleAnim }] }]}
      />
      <Animated.Text style={[styles.text, { opacity: fadeAnim }]}>
        Pisval Tech POS
      </Animated.Text>
      <ActivityIndicator size="large" color="#4E67EB" style={styles.loader} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#1E3A8A',
    alignItems: 'center', 
    justifyContent: 'center' 
  },
  logo: { 
    width: 160, 
    height: 160, 
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
  loader: { marginTop: 20 },
});
