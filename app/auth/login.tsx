import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './login.styles';
import { SocialButton } from './components/SocialButton';
import { PasswordInput } from './components/PasswordInput';
import { Divider } from './components/Divider';

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleLogin = () => {
    router.replace('/(tabs)');
  };

  return (
    <LinearGradient
      colors={['#3B5998', '#4FBDBA']}
      style={styles.gradient}
    >
      <View style={styles.container}>
        {!imageLoaded && (
          <ActivityIndicator
            size='large'
            color='#FFFFFF'
            style={styles.loader}
          />
        )}

        <Image
          source={require('../../assets/images/logo.jpg')}
          style={[
            styles.topImage,
            !imageLoaded && styles.hiddenImage,
          ]}
          onLoad={() => setImageLoaded(true)}
        />

        <Text style={styles.title}>
          Let's Connect With You!
        </Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder='Email or Phone Number'
            value={email}
            onChangeText={setEmail}
            keyboardType='email-address'
            autoCapitalize='none'
          />

          <PasswordInput
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <TouchableOpacity
          onPress={() =>
            router.push('/auth/ForgotPassword')
          }
        >
          <Text style={styles.forgotText}>
            Forgot Password?
          </Text>
        </TouchableOpacity>

        <Pressable
          style={styles.loginButton}
          onPress={handleLogin}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </Pressable>

        <Divider />

        <SocialButton platform='apple' />
        <SocialButton platform='google' />

        <View style={styles.bottomTextContainer}>
          <Text style={styles.bottomText}>
            Don't have an account?
          </Text>
          <Pressable
            onPress={() => router.push('/auth/signup')}
          >
            <Text
              style={[styles.bottomText, styles.signUpText]}
            >
              {' '}
              Sign Up
            </Text>
          </Pressable>
        </View>
      </View>
    </LinearGradient>
  );
}
