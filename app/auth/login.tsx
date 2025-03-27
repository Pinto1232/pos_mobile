import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useRouter } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Email or Phone:', email);
    console.log('Password:', password);
    router.replace('/(tabs)');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/logo.jpg')}
        style={styles.topImage}
      />
      <Text style={styles.title}>Let’s Connect With Us!</Text>
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
        <Pressable onPress={() => console.log('Sign Up pressed')}>
          <Text style={[styles.bottomText, styles.signUpText]}> Sign Up</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 60,
    backgroundColor: '#FFFFFF',
  },
  topImage: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 20,
    borderRadius: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 16,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#F2F2F2',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    fontSize: 14,
  },
  forgotText: {
    alignSelf: 'flex-end',
    color: '#666',
    marginBottom: 16,
  },
  loginButton: {
    backgroundColor: '#8BC34A',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  dividerText: {
    marginHorizontal: 8,
    color: '#666',
  },
  socialButton: {
    flexDirection: 'row',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  socialButtonText: {
    marginLeft: 8,
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  bottomTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  bottomText: {
    color: '#666',
    fontSize: 14,
  },
  signUpText: {
    color: '#8BC34A',
    fontWeight: '600',
  },
});
