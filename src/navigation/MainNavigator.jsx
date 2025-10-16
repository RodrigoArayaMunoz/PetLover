import { NavigationContainer } from "@react-navigation/native";
import AuthStackNavigator from "./AuthStackNavigator";
import BottomTabsNavigator from "./BottomTabsNavigator";
import { useSelector, useDispatch } from "react-redux";
import { useGetProfilePictureQuery } from "../store/services/profile/profileApi";
import { useEffect } from "react";
import { setLocalId, setProfilePicture, setUserEmail } from "../store/slices/userSlice";
import { initSessionsTable, getSession } from "../sqlite";
import { useState } from "react";
import { ActivityIndicator, View } from "react-native";

export default function MainNavigator() {
    const [checkingSession, setCheckingSession] = useState(true);
    const user = useSelector(state=> state.userReducer.user);
    const localId = useSelector(state => state.userReducer.localId);
  
    const dispatch = useDispatch();
    const { data: profilePicture, isLoading, error } = useGetProfilePictureQuery(localId);

    useEffect(() => {
        const bootstrap = async () => {
            await initSessionsTable();
            const session = await getSession();
            if (session) {
          dispatch(setUserEmail(session.email));
          dispatch(setLocalId(session.localId));
            }
            setCheckingSession(false);
        };
        bootstrap();
    }, []);

    useEffect(() => {
        if (profilePicture) {
            dispatch(setProfilePicture(profilePicture.image));
        }
    }, [profilePicture]);


        if (checkingSession) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color={"#0000ff"} />
            </View>
        );
    }

    return (
        <NavigationContainer>
            {localId ? <BottomTabsNavigator/> : <AuthStackNavigator/>}
        </NavigationContainer>
    )
}
