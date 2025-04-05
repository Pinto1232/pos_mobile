import { StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';

const styles = StyleSheet.create({
  bottomImage: {
    height: 250,
    resizeMode: 'contain',
    width: 200,
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 60,
  },
  gradient: {
    flex: 1,
  },
  input: {
    backgroundColor: Colors.background.light,
    borderRadius: 8,
    fontSize: 14,
    marginBottom: 12,
    padding: 12,
  },
  signUpButton: {
    alignItems: 'center',
    backgroundColor: Colors.primary,
    borderRadius: 8,
    marginTop: 20,
    paddingVertical: 14,
  },
  signUpButtonText: {
    color: Colors.text.white,
    fontSize: 16,
    fontWeight: '600',
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 16,
    textAlign: 'center',
  },
});

export default styles;
