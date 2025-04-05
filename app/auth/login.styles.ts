import { StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';

const styles = StyleSheet.create({
  appleButton: {
    backgroundColor: Colors.text.black,
  },
  bottomText: {
    color: Colors.text.white,
    fontSize: 14,
  },
  bottomTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 60,
  },
  dividerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 20,
  },

  dividerLine: {
    backgroundColor: Colors.border.light,
    flex: 1,
    height: 1,
  },
  dividerText: {
    color: Colors.text.white,
    marginHorizontal: 8,
  },
  eyeIcon: {
    padding: 5,
    position: 'absolute',
    right: 10,
  },
  forgotText: {
    alignSelf: 'flex-end',
    color: Colors.text.white,
    marginBottom: 16,
  },
  googleButton: {
    backgroundColor: Colors.background.white,
    borderColor: Colors.border.light,
    borderWidth: 1,
  },
  googleButtonText: {
    color: Colors.text.secondary,
  },
  gradient: {
    flex: 1,
  },
  hiddenImage: {
    opacity: 0,
  },
  input: {
    backgroundColor: Colors.background.white,
    borderRadius: 8,
    fontSize: 14,
    height: 55,
    marginBottom: 2,
    padding: 12,
  },
  inputContainer: {
    gap: 8,
    marginBottom: 8,
  },
  inputWithIcon: {
    paddingRight: 40,
  },
  loader: {
    alignSelf: 'center',
    marginTop: 20,
  },
  loginButton: {
    alignItems: 'center',
    backgroundColor: Colors.primary,
    borderRadius: 8,
    marginBottom: 20,
    paddingVertical: 14,
  },
  loginButtonText: {
    color: Colors.text.white,
    fontSize: 16,
    fontWeight: '600',
  },
  passwordContainer: {
    alignItems: 'center',
    backgroundColor: Colors.background.white,
    borderRadius: 8,
    flexDirection: 'row',
    height: 57,
    position: 'relative',
    width: '100%',
  },
  signUpText: {
    color: Colors.success,
    fontWeight: '600',
  },
  socialButton: {
    alignItems: 'center',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 12,
    paddingVertical: 14,
  },
  socialButtonText: {
    backgroundColor: Colors.transparent,
    color: Colors.text.white,
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 16,
    textAlign: 'center',
  },
  topImage: {
    alignSelf: 'center',
    borderRadius: 75,
    height: 100,
    marginBottom: 20,
    resizeMode: 'contain',
    width: 100,
  },
});

export default styles;
