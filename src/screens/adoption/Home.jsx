import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import FlatPetCard from "../pets/FlatPetCard";
import { useGetPetsQuery } from "../../store/services/PetApi";
import { FontAwesome5 } from '@expo/vector-icons';


const Home = () => {

  const [animalFilter, setAnimalFilter] = useState("perro");
  const { data:pets = {}, isLoading, error} = useGetPetsQuery(animalFilter);


  return (
    <View style={styles.ListPetsContainer}>
      <View style={styles.filterRowBreads}>


        <Pressable
        style={[
          styles.filterButton,
          animalFilter === "perro" && styles.activeButton,
        ]}
        onPress={() => setAnimalFilter("perro")}
      >
                  <FontAwesome5 name="dog" size={24} color="black" />
        </Pressable>

        <Pressable
        style={[
          styles.filterButton,
          animalFilter === "gato" && styles.activeButton,
        ]}
        onPress={() => setAnimalFilter("gato")}
      >
          <FontAwesome5 name="cat" size={24} color="black" />
        </Pressable>

      </View>
          <FlatList
              data={pets}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => <FlatPetCard pet={item} />}
              showsVerticalScrollIndicator={false}
              
              />
      </View>
    );
};
const styles = StyleSheet.create({

    ListPetsContainer: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    marginTop: 20,
    },

      filterRowBreads: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  filterButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 20,
    gap: 6,
  },

    activeButton: {
    backgroundColor: "#f2f2f2",
    borderColor: "#999",
  },
}); 

export default Home;