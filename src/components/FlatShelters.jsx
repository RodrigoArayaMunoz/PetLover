import { StyleSheet, View } from "react-native";

const FlatShelters = ({ children}) => {
    return(
        <View style={styles.sheltersContainer}>
            {children}
        </View>
    )
}

export default FlatShelters;
const styles = StyleSheet.create({
    sheltersContainer: {
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
});