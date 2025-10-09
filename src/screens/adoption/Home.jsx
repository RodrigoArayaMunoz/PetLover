import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import petData from "../../data/Pets.json"
import HeaderWelcome from "../../components/HeaderWelcome";

const Home = () => {
  return (

    <><HeaderWelcome />
    
    <View style={styles.ListPetsContainer}>
          <FlatList
              data={petData}
              renderItem={({ item }) => (
                  <><Text>{item.name}</Text><Text>{item.age}</Text><Text>{item.gender}</Text></>
              )} />

      </View></>
    


    
    );
};


const styles = StyleSheet.create({

    ListPetsContainer: {
    flex: 3,
    alignItems: 'center',
    backgroundColor: '#fff',
    marginTop: 10,
    width: '100%',
    },
}); 

export default Home;