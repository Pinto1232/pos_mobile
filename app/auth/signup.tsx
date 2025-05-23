import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  Image,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import { useRouter } from 'expo-router';
import externalStyles from './signup.styles';
import { LinearGradient } from 'expo-linear-gradient';

export default function SignUpScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] =
    useState('');
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      return;
    }
    router.replace('/(tabs)');
  };

  return (
    <LinearGradient
      colors={['#3B5998', '#4FBDBA']}
      style={[externalStyles.gradient, styles.gradient]}
    >
      <View
        style={[externalStyles.container, styles.container]}
      >
        <Text style={externalStyles.title}>
          Create an Account
        </Text>
        <TextInput
          style={externalStyles.input}
          placeholder='Email'
          value={email}
          onChangeText={setEmail}
          keyboardType='email-address'
          autoCapitalize='none'
        />
        <TextInput
          style={externalStyles.input}
          placeholder='Password'
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TextInput
          style={externalStyles.input}
          placeholder='Confirm Password'
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />
        <Pressable
          style={externalStyles.signUpButton}
          onPress={handleSignUp}
        >
          <Text style={externalStyles.signUpButtonText}>
            Sign Up
          </Text>
        </Pressable>
        {!imageLoaded && (
          <ActivityIndicator
            size='large'
            color='#FFFFFF'
            style={styles.loader}
          />
        )}
        <Image
          source={require('../../assets/images/pos.png')}
          style={[
            styles.signupImage,
            !imageLoaded && styles.hiddenImage,
          ]}
          onLoad={() => setImageLoaded(true)}
        />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  hiddenImage: {
    opacity: 0,
  },
  loader: {
    alignSelf: 'center',
    marginTop: 20,
  },
  signupImage: {
    height: 420,
    marginLeft: -30,
    marginTop: 69,
    width: 500,
  },
});
