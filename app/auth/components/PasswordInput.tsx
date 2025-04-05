import React, { useState } from 'react';
import { View, TextInput, Pressable } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import styles from '../login.styles';

type PasswordInputProps = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
};

export function PasswordInput({
  value,
  onChangeText,
  placeholder = 'Password',
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <View style={styles.passwordContainer}>
      <TextInput
        style={[styles.input, styles.inputWithIcon]}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={!showPassword}
      />
      <Pressable
        onPress={togglePassword}
        style={styles.eyeIcon}
      >
        <FontAwesome
          name={showPassword ? 'eye' : 'eye-slash'}
          size={20}
          color='#333'
        />
      </Pressable>
    </View>
  );
}
