import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/screens/Login';
import Home from './src/screens/adoption/Home';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabsNavigator from './src/navigation/BottomTabsNavigator';
import { Provider } from 'react-redux';
import { PetLoverStore } from './src/store';

export default function App() {
  return (

<Provider store={PetLoverStore}>
  
    <NavigationContainer>
      <BottomTabsNavigator/>
   
      {/* <Login></Login> */}
      {/* <Home></Home> */}
         
    
    <StatusBar style="auto" />
      </NavigationContainer>
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
