import { View, StyleSheet } from 'react-native';
import PackageContainer from '@/components/packages/packageContainer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <PackageContainer />
    </View>
  );
}
