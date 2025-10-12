import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/screens/Login';
import Home from './src/screens/adoption/Home';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabsNavigator from './src/navigation/BottomTabsNavigator';
export default function App() {
  return (


    <NavigationContainer>
      <BottomTabsNavigator/>
   
      {/* <Login></Login> */}
      {/* <Home></Home> */}
         
    
    <StatusBar style="auto" />
      </NavigationContainer>


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
