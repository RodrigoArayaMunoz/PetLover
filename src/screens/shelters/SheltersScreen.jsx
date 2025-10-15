import { StyleSheet, Text, View, FlatList, Image, Pressable } from "react-native";
import Shelters from "../../data/Shelters.json";
import FlatShelters from "../../components/FlatShelters";
import FontAwesome from '@expo/vector-icons/FontAwesome';

const SheltersScreen = () => {
    
    const renderSheltersItem = ({item}) => (
        <FlatShelters>
             <Image source={{uri: item.mainImage}}
                style = {styles.sheltersImage}
             />

             <View style = {styles.detailsContainer}>
            <Text style={styles.sheltersName}>{item.name}</Text>
            <Text style={styles.sheltersLocation}>{item.location}</Text>
            </View>

                        <View style={styles.buttonsContainer}>
                            <Pressable style = {styles.circleButton}>
                                <FontAwesome name="map-marker" size={24} color="green" />
                            </Pressable>
            
                             <Pressable style = {styles.circleButton}>
                                <FontAwesome name="phone" size={24} color="blue" />
                                
                            </Pressable>
            
                        </View>

        </FlatShelters>
    )

    return(
        <View style={{flex:1}}>
            <FlatList
                data={Shelters}
                renderItem={renderSheltersItem}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default SheltersScreen;

const styles = StyleSheet.create({
    sheltersImage: {
        height: 80,
        width: "25%",
        borderRadius: 8,
        resizeMode: 'stretch',
        alignSelf: 'center',
        justifyContent: 'center',
        
    },
        detailsContainer: {
        flex: 1,
        marginHorizontal: 10,
        marginTop: 10,
    },

    sheltersName: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    sheltersLocation: {
        fontSize: 12,
        color: '#666',
    },
    buttonsContainer: {
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
});