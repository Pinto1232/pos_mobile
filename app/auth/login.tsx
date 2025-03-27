import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useRouter } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import styles from '@/app/auth/login.styles';
import { LinearGradient } from 'expo-linear-gradient';

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    router.replace('/(tabs)');
  };

  return (
    <LinearGradient
      colors={['#3B5998', '#4FBDBA']} 
      style={styles.gradient}
    >
      <View style={styles.container}>
        <Image
          source={require('../../assets/images/logo.jpg')}
          style={styles.topImage}
        />
        <Text style={styles.title}>Let’s Connect With You!</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email or Phone Number"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>
        <TouchableOpacity onPress={() => console.log('Forgot Password pressed')}>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>
        <Pressable style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </Pressable>
        <View style={styles.dividerContainer}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>or</Text>
          <View style={styles.dividerLine} />
        </View>
        <Pressable style={[styles.socialButton, { backgroundColor: '#000' }]}>
          <FontAwesome name="apple" size={20} color="#fff" />
          <Text style={styles.socialButtonText}>Sign up with Apple</Text>
        </Pressable>
        <Pressable
          style={[
            styles.socialButton,
            { backgroundColor: '#fff', borderWidth: 1, borderColor: '#ccc' },
          ]}
        >
          <FontAwesome name="google" size={20} color="#EA4335" />
          <Text style={[styles.socialButtonText, { color: '#333' }]}>
            Sign up with Google
          </Text>
        </Pressable>
        <View style={styles.bottomTextContainer}>
          <Text style={styles.bottomText}>Don't have an account?</Text>
          <Pressable onPress={() => router.push('/auth/signup')}>
            <Text style={[styles.bottomText, styles.signUpText]}> Sign Up</Text>
          </Pressable>
        </View>
      </View>
    </LinearGradient>
  );
}
