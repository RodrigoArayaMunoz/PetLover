import React from "react";
import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
const Header = () => {
  return (
   <View style={styles.WelcomeContainer}>
    <View style = {styles.headerRow}>
      <Text style={styles.WelcomeText}> BIENVENIDO</Text>
    
      <Pressable style={styles.circleButton}>
        <Ionicons name="person-circle-outline" size={40} color="red" />
      </Pressable>
    </View>
        <Text style={styles.NameText}>RODRIGO ARAYA </Text>
      </View>
    
    
    );
};

const styles = StyleSheet.create({
      WelcomeContainer: {
    backgroundColor: '#851515e8',
    width: '100%',
    height: 120,
    borderBottomEndRadius: 10,
    borderBottomStartRadius:10,
  },
    headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40,
    },
    WelcomeText: {
    fontSize: 35,
    fontWeight: 'bold',
    width: '80%',
    color: '#ffffffff',
    },
    NameText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffffff',
    marginTop: 1,
    marginLeft: 10

    },
        circleButton: {
        height: 40,
        width: 40,
        borderRadius: 20,
        backgroundColor: '#eee',
        alignItems: 'center',
        justifyContent: 'center',
    },
}); 

export default Header;