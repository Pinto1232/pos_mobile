import React, { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './signup.styles'; 
export default function ForgotPasswordScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');

  const handleResetPassword = () => {
    console.log('Reset password for:', email);
    router.replace('/auth/login');
  };

  return (
    <LinearGradient
      colors={['#3B5998', '#4FBDBA']}
      style={styles.gradient}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Forgot Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Pressable style={styles.signUpButton} onPress={handleResetPassword}>
          <Text style={styles.signUpButtonText}>Reset Password</Text>
        </Pressable>
      </View>
    </LinearGradient>
  );
}
