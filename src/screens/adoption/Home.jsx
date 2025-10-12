import React from "react";
import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import petData from "../../data/Pets.json"
import Header from "../../components/Header";
import FlatPetCard from "../pets/FlatPetCard";


const Home = () => {
  return (

    <>
    
    <View style={styles.ListPetsContainer}>
          <FlatList
              data={petData}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => <FlatPetCard pet={item} />}
              showsVerticalScrollIndicator={false}
              
              />


  
      </View></>
    


    
    );
};
const styles = StyleSheet.create({

    ListPetsContainer: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    marginTop: 20,
    },
}); 

export default Home;