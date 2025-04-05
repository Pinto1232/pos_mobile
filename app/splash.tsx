import { useEffect, useState } from 'react';
import {
  View,
  Image,
  StyleSheet,
  ActivityIndicator,
  Text,
} from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  withSequence,
} from 'react-native-reanimated';
import { Colors } from '@/constants/Colors';

export default function SplashScreen() {
  const router = useRouter();
  const scaleAnim = useSharedValue(1);
  const fadeAnim = useSharedValue(0);
  const [dots, setDots] = useState('');
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    scaleAnim.value = withRepeat(
      withSequence(
        withTiming(1.2, { duration: 1000 }),
        withTiming(1, { duration: 1000 }),
      ),
      -1,
      true,
    );

    fadeAnim.value = withTiming(1, { duration: 2000 });

    const dotInterval = setInterval(() => {
      setDots((prev) =>
        prev.length < 3 ? prev + '.' : '',
      );
    }, 500);

    const timer = setTimeout(() => {
      router.replace('/auth/login');
    }, 8000);

    return () => {
      clearTimeout(timer);
      clearInterval(dotInterval);
    };
  }, [fadeAnim, router, scaleAnim]);

  const animatedLogoStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scaleAnim.value }],
  }));

  const animatedTextStyle = useAnimatedStyle(() => ({
    opacity: fadeAnim.value,
  }));

  return (
    <LinearGradient
      colors={[Colors.primary, Colors.secondary]}
      locations={[0, 1]}
      style={styles.gradient}
    >
      <View style={styles.container}>
        <Animated.Image
          source={require('../assets/images/logo.jpg')}
          style={[styles.logo, animatedLogoStyle]}
        />
        <Animated.Text
          style={[styles.text, animatedTextStyle]}
        >
          Welcome To Pisval Tech POS
        </Animated.Text>
        <ActivityIndicator
          size='large'
          color={Colors.warning}
          style={styles.loader}
        />
        <Text style={styles.loadingText}>
          Loading{dots}
        </Text>
        {!imageLoaded && (
          <ActivityIndicator
            size='large'
            color={Colors.text.white}
            style={styles.loader}
          />
        )}
        <Image
          source={require('../assets/images/pos.png')}
          style={[
            styles.bottomImage,
            styles.bottomImageLarge,
            !imageLoaded && styles.hiddenImage,
          ]}
          onLoad={() => setImageLoaded(true)}
        />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  bottomImage: {
    height: 200,
    marginTop: 20,
    resizeMode: 'contain',
    width: 200,
  },
  bottomImageLarge: {
    height: 450,
    marginTop: 40,
    width: 580,
  },
  container: {
    alignItems: 'center',
    backgroundColor: Colors.primary,
    flex: 1,
    justifyContent: 'center',
  },
  gradient: {
    flex: 1,
  },
  hiddenImage: {
    opacity: 0,
  },
  loader: {
    color: Colors.primary,
    marginTop: 20,
  },
  loadingText: {
    color: Colors.text.white,
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
  },
  logo: {
    alignSelf: 'center',
    borderRadius: 80,
    height: 120,
    marginTop: 120,
    resizeMode: 'contain',
    width: 120,
  },
  text: {
    color: Colors.text.white,
    fontSize: 18,
    fontWeight: '600',
    marginTop: 20,
    textAlign: 'center',
  },
});
