import {StyleSheet, Text, View, Pressable, Image} from 'react-native';
import CameraIcon from '../../components/CameraIcon';

const ProfileScreen = () => {
    const user = "Rodrigo"
    const image = ""
    return (
        <View style={styles.profileContainer}>
            <View style={styles.imageProfileContainer}>
                {
                    image
                    ?
                    <Image source={{uri: image}} resizeMode='cover' style={styles.profileImage}/>
                    :
                    <Text style={styles.textProfilePlaceHolder}>{user.charAt(0).toUpperCase()}</Text>
                }
                <Pressable onPress = {() => console.log("soy la camara")} style={({pressed}) => [{opacity: pressed ? 0.9 : 1}, styles.cameraIcon]}>
                    <CameraIcon/>
                    </Pressable>
            </View>
            <Text style={styles.profileData}>Email: {user}</Text>
        </View>
    )
}

export default ProfileScreen;

const styles = StyleSheet.create({
        profileContainer: {
        padding: 32,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageProfileContainer: {
        width: 128,
        height: 128,
        borderRadius: 128,
        backgroundColor: "#999",
        justifyContent: 'center',
        alignItems: 'center'
    },
    textProfilePlaceHolder: {
        color: '#fff',
        fontSize: 48,
    },
    profileData: {
        paddingVertical: 16,
        fontSize: 16
    },
    cameraIcon: {
        position: 'absolute',
        top: 99,
        right: 45,
    },
    profileImage: {
        width: 128,
        height: 128,
        borderRadius: 128
    },
});