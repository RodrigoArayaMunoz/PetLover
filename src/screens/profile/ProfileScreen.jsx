import {StyleSheet, Text, View, Pressable, Image} from 'react-native';
import CameraIcon from '../../components/CameraIcon';
import * as  ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setProfilePicture } from '../../store/slices/userSlice';
import { usePutProfilePictureMutation } from '../../store/services/profile/profileApi';
import { clearSession } from '../../sqlite';
import { clearUser } from '../../store/slices/userSlice';

const ProfileScreen = () => {

    const user = useSelector(state => state.userReducer.user);
    const profilePicture = useSelector(state => state.userReducer.profilePicture);
    const localId = useSelector(state => state.userReducer.localId);

    const [triggerPutProfilePicture, result] = usePutProfilePictureMutation();


    const dispatch = useDispatch();

    const pickImage = async () => {
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            aspect: [1,1],
            quality: 0.7,
            base64: true
        });

        if (!result.canceled) {
            const imgBase64 = `data:image/jpg;base64,${result.assets[0].base64}`;
            dispatch(setProfilePicture(imgBase64))
            triggerPutProfilePicture({localId: localId, image: imgBase64});
        }
    };

    const handleClearSession = async () => {
        try{
            await clearSession();
            
        } catch (error) {
            console.log("Error clearing session:", error);
        }
        dispatch(clearUser())
    };

    return (
        <View style={styles.profileContainer}>
            <View style={styles.imageProfileContainer}>
                {
                    profilePicture
                    ?
                    <Image source={{uri: profilePicture}} resizeMode='cover' style={styles.profileImage}/>
                    :
                    <Text style={styles.textProfilePlaceHolder}>{user.charAt(0).toUpperCase()}</Text>
                }
                <Pressable onPress={pickImage} style={({pressed}) => [{opacity: pressed ? 0.9 : 1}, styles.cameraIcon]}>
                    <CameraIcon/>
                    </Pressable>
            </View>
            <Text style={styles.profileData}>Email: {user} </Text>

            <View style = {styles.CloseSessionButton}>
                <Pressable onPress={handleClearSession}>
                    <Text style={{color: '#fff'}}>Cerrar sesión</Text>
                </Pressable>
            </View>
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
    CloseSessionButton: {
        marginTop: 32,
        paddingVertical: 8,
        borderColor: '#851515e8',
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#851515e8',
        borderRadius: 8,
    },
});