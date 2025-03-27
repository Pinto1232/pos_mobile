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

// Example placeholders for Apple/Google icons.
// You can use react-native-vector-icons or your own images.
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Placeholder login logic
    console.log('Email or Phone:', email);
    console.log('Password:', password);
    // Navigate to your tabs (main app)
    router.replace('/(tabs)');
  };

  return (
    <View style={styles.container}>
      {/* Top Image */}
      <Image
        source={require('../../assets/images/logo.jpg')} 
        style={styles.topImage}
      />

      {/* Title */}
      <Text style={styles.title}>Let’s Connect With Us!</Text>

      {/* Input Fields */}
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

      {/* Forgot Password */}
      <TouchableOpacity onPress={() => console.log('Forgot Password pressed')}>
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Login Button */}
      <Pressable style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </Pressable>

      {/* OR Divider */}
      <View style={styles.dividerContainer}>
        <View style={styles.dividerLine} />
        <Text style={styles.dividerText}>or</Text>
        <View style={styles.dividerLine} />
      </View>

      {/* Sign Up with Apple */}
      <Pressable style={[styles.socialButton, { backgroundColor: '#000' }]}>
        <FontAwesome name="apple" size={20} color="#fff" />
        <Text style={styles.socialButtonText}>Sign up with Apple</Text>
      </Pressable>

      {/* Sign Up with Google */}
      <Pressable style={[styles.socialButton, { backgroundColor: '#fff', borderWidth: 1, borderColor: '#ccc' }]}>
        <FontAwesome name="google" size={20} color="#EA4335" />
        <Text style={[styles.socialButtonText, { color: '#333' }]}>Sign up with Google</Text>
      </Pressable>

      {/* Sign Up Link */}
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
    width: 150, // Adjusted width for better clarity
    height: 150, // Adjusted height for better clarity
    resizeMode: 'contain', // Ensures the image is not distorted
    alignSelf: 'center', // Centers the image horizontally
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
    backgroundColor: '#8BC34A', // or your brand color
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
