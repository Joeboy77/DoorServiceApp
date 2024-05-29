import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Components/Login';
import { ClerkProvider } from '@clerk/clerk-expo';

export default function App() {
  return (
    
      <ClerkProvider publishableKey='pk_test_dWx0aW1hdGUtc3dhbi0yMS5jbGVyay5hY2NvdW50cy5kZXYk'>
        <View style={styles.container}>
          <Login />
        </View>
      <StatusBar style="auto" />
      </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30
  },
});
