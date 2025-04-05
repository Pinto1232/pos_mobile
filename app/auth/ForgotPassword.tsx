import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './signup.styles';
import { Colors } from '@/constants/Colors';

const forgotStyles = {
  forgotImage: {
    height: 420,
    marginTop: 105,
    width: 500,
  },
  hiddenImage: {
    opacity: 0,
  },
};

export default function ForgotPasswordScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleResetPassword = () => {
    console.log('Reset password for:', email);
    router.replace('/auth/login');
  };

  return (
    <LinearGradient
      colors={[Colors.primary, Colors.secondary]}
      style={styles.gradient}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Forgot Password</Text>
        <TextInput
          style={styles.input}
          placeholder='Email'
          value={email}
          onChangeText={setEmail}
          keyboardType='email-address'
          autoCapitalize='none'
        />
        <TouchableOpacity
          style={styles.signUpButton}
          onPress={handleResetPassword}
        >
          <Text style={styles.signUpButtonText}>
            Reset Password
          </Text>
        </TouchableOpacity>
        <Image
          source={require('../../assets/images/pos.png')}
          style={[
            forgotStyles.forgotImage,
            !imageLoaded && forgotStyles.hiddenImage,
          ]}
          onLoad={() => setImageLoaded(true)}
        />
      </View>
    </LinearGradient>
  );
}
