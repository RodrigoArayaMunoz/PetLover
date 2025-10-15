import { StyleSheet, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

const CameraIcon = () =>{
    return(
        <View style={styles.iconContainer}>
            <Ionicons name="camera-outline" size={24} color="black" />
        </View>
    )
}

export default CameraIcon;

const styles = StyleSheet.create({
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        width: 40,
        height: 40,
        borderRadius: 20,
    }
});