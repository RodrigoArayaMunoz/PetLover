import react from "react";
import { View, StyleSheet, Image, Text, Pressable } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';

const FlatPetCard = ({pet}) => {
    return(
        <View style={styles.container}>
            
            {/* Imagen de Mascota */}
            <Image
                source={{uri: pet.mainImage}}
                style = {styles.petImage}
            />
           
            {/* Detalles de Mascota */}

            <View style = {styles.detailsContainer}>
                <Text style={styles.PetName}>{pet.name}</Text>
                <Text style= {styles.PetAge}>Edad: {pet.age} </Text>
                <Text style= {styles.PetSize}>Tamaño: {pet.size} </Text>
            </View>

            {/* Boton de Agregar Solicitud Adopcion */}

            <View style={styles.AddPetContainer}>
                <Pressable style = {styles.circleButton}>
                    <FontAwesome name="heart" size={24} color="red" />
                </Pressable>

                 <Pressable style = {styles.circleButton}>
                    <FontAwesome name="whatsapp" size={24} color="green" />
                    
                </Pressable>

            </View>

        </View>
        
    )
}

export default FlatPetCard;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: .1,
        shadowRadius: 4,
        elevation: 3,
        margin:10,
        borderColor: '#cda4a4ff',
        borderWidth: 1,
    },

    petImage: {
        height: 120,
        width: "25%",
        borderRadius: 8,
        resizeMode: 'stretch',
        
    },

    detailsContainer: {
        flex: 1,
        marginHorizontal: 10,
        marginTop: 10,
    },
    PetName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000000ff',
    },

    PetAge: {
        fontSize: 12, 
        color: '#555555ff',
        marginVertical: 3,
    },

        PetSize: {
        fontSize: 12, 
        color: '#555555ff',
        marginVertical: 3,
    },

    AddPetContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    circleButton: {
        height: 35,
        width: 35,
        borderRadius: 20,
        backgroundColor: '#eee',
        alignItems: 'center',
        justifyContent: 'center',
        marginStart: 10,
    },

})