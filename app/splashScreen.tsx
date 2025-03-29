import { useEffect, useState } from 'react';
import { View, Image, StyleSheet, ActivityIndicator, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { useSharedValue, useAnimatedStyle, withRepeat, withTiming, withSequence } from 'react-native-reanimated';

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
                withTiming(1, { duration: 1000 })
            ),
            -1,
            true
        );

        fadeAnim.value = withTiming(1, { duration: 2000 });

        const dotInterval = setInterval(() => {
            setDots((prev) => (prev.length < 3 ? prev + '.' : ''));
        }, 500);

        const timer = setTimeout(() => {
            router.replace('/auth/login');
        }, 8000);

        return () => {
            clearTimeout(timer);
            clearInterval(dotInterval);
        };
    }, []);

    const animatedLogoStyle = useAnimatedStyle(() => ({
        transform: [{ scale: scaleAnim.value }],
    }));

    const animatedTextStyle = useAnimatedStyle(() => ({
        opacity: fadeAnim.value,
    }));

    return (
        <LinearGradient
            colors={['#1E3A8A', '#006D77']}
            locations={[0, 1]}
            style={styles.gradient}
        >
            <View style={styles.container}>
                <Animated.Image
                    source={require('../assets/images/logo.jpg')}
                    style={[styles.logo, animatedLogoStyle]}
                />
                <Animated.Text style={[styles.text, animatedTextStyle]}>
                    Welcome To Pisval Tech POS
                </Animated.Text>
                <ActivityIndicator size="large" color="#FE6903" style={styles.loader} />
                <Text style={styles.loadingText}>
                    Loading{dots}
                </Text>
                {!imageLoaded && (
                    <ActivityIndicator size="large" color="#FFFFFF" style={styles.loader} />
                )}
                <Image
                    source={require('../assets/images/pos.png')}
                    style={[
                        styles.bottomImage,
                        { width: 580, height: 450, marginTop: 40 },
                        !imageLoaded && { opacity: 0 },
                    ]}
                    onLoad={() => setImageLoaded(true)}
                />
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
    },
    container: {
        backgroundColor: '#1E3A8A',
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
        marginTop: 120
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
        height: 200,
        resizeMode: 'contain',
        marginTop: 20,
    },
    loadingText: {
        marginTop: 10,
        fontSize: 16,
        color: '#FFFFFF',
        textAlign: 'center',
    },
});