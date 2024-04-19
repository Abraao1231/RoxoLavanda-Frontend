import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';
export default function App() {
  return (
    <View  style={styles.container}>
      <Text style={styles.text}>GymTracker</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'purple',
    fontSize: 20,
    fontWeight: 'bold' 
  }
});
