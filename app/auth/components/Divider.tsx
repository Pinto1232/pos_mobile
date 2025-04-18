import React from 'react';
import { View, Text } from 'react-native';
import styles from '../login.styles';

export function Divider() {
  return (
    <View style={styles.dividerContainer}>
      <View style={styles.dividerLine} />
      <Text style={styles.dividerText}>or</Text>
      <View style={styles.dividerLine} />
    </View>
  );
}
