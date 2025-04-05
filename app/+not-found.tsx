import React from 'react';
import { Link } from 'expo-router';
import {
  StyleSheet,
  View,
  Text,
  Pressable,
} from 'react-native';
import { Colors } from '@/constants/Colors';

export default function NotFoundScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        This screen doesn't exist.
      </Text>
      <Link
        href='/'
        asChild
      >
        <Pressable>
          <Text style={styles.link}>
            Go to home screen!
          </Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    color: Colors.primary,
    marginTop: 15,
    paddingVertical: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
