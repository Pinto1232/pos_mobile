import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import { useRouter } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import externalStyles from '@/app/auth/login.styles';
import { LinearGradient } from 'expo-linear-gradient';

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
      style={[externalStyles.gradient, styles.gradient]}
    >
      <View style={[externalStyles.container, styles.container]}>
        {!imageLoaded && (
          <ActivityIndicator size="large" color="#FFFFFF" style={styles.loader} />
        )}
        <Image
          source={require('../../assets/images/logo.jpg')}
          style={[
            externalStyles.topImage,
            !imageLoaded && { opacity: 0 },
          ]}
          onLoad={() => setImageLoaded(true)}
        />
        <Text style={externalStyles.title}>Let’s Connect With You!</Text>
        <View style={externalStyles.inputContainer}>
          <TextInput
            style={externalStyles.input}
            placeholder="Email or Phone Number"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={externalStyles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>
        <TouchableOpacity onPress={() => router.push('/auth/ForgotPassword')}>
          <Text style={externalStyles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>
        <Pressable style={externalStyles.loginButton} onPress={handleLogin}>
          <Text style={externalStyles.loginButtonText}>Login</Text>
        </Pressable>
        <View style={externalStyles.dividerContainer}>
          <View style={externalStyles.dividerLine} />
          <Text style={externalStyles.dividerText}>or</Text>
          <View style={externalStyles.dividerLine} />
        </View>
        <Pressable style={[externalStyles.socialButton, { backgroundColor: '#000' }]}>
          <FontAwesome name="apple" size={20} color="#fff" />
          <Text style={externalStyles.socialButtonText}>Sign up with Apple</Text>
        </Pressable>
        <Pressable
          style={[
            externalStyles.socialButton,
            { backgroundColor: '#fff', borderWidth: 1, borderColor: '#ccc' },
          ]}
        >
          <FontAwesome name="google" size={20} color="#EA4335" />
          <Text style={[externalStyles.socialButtonText, { color: '#333' }]}>
            Sign up with Google
          </Text>
        </Pressable>
        <View style={externalStyles.bottomTextContainer}>
          <Text style={externalStyles.bottomText}>Don't have an account?</Text>
          <Pressable onPress={() => router.push('/auth/signup')}>
            <Text style={[externalStyles.bottomText, externalStyles.signUpText]}> Sign Up</Text>
          </Pressable>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  loader: {
    marginTop: 20,
    alignSelf: 'center',
  },
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
});
