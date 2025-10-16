import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { PetLoverStore } from './src/store';
import MainNavigator from './src/navigation/MainNavigator';

export default function App() {
  return (

<Provider store={PetLoverStore}>
  <MainNavigator />
  <StatusBar style="auto" />
</Provider>
      
    

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
