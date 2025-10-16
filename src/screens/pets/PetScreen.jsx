import {StyleSheet, Text, View, FlatList} from 'react-native';

const PetScreen = () => {
    return(
        <View style={styles.container}>
            <Text>Pet Screen</Text>
        </View>
    )
}

export default PetScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});
