import React from 'react';
import { Pressable, Text } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import styles from '../login.styles';

type SocialButtonProps = {
  platform: 'apple' | 'google';
  onPress?: () => void;
};

export function SocialButton({
  platform,
  onPress,
}: SocialButtonProps) {
  const isApple = platform === 'apple';

  const capitalizedPlatform =
    platform.charAt(0).toUpperCase() + platform.slice(1);

  return (
    <Pressable
      style={[
        styles.socialButton,
        isApple ? styles.appleButton : styles.googleButton,
      ]}
      onPress={onPress}
    >
      <FontAwesome
        name={platform}
        size={20}
        color={isApple ? '#fff' : '#EA4335'}
      />
      <Text
        style={[
          styles.socialButtonText,
          !isApple && styles.googleButtonText,
        ]}
      >
        Sign up with {capitalizedPlatform}
      </Text>
    </Pressable>
  );
}
