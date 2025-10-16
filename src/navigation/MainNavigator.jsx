import { NavigationContainer } from "@react-navigation/native";
import AuthStackNavigator from "./AuthStackNavigator";
import BottomTabsNavigator from "./BottomTabsNavigator";
import { useSelector, useDispatch } from "react-redux";
import { useGetProfilePictureQuery } from "../store/services/profile/profileApi";
import { use, useEffect } from "react";
import { setProfilePicture } from "../store/slices/userSlice";
import { initSessionTable, getSession } from "../sqlite";

export default function MainNavigator() {
    const user = useSelector(state=> state.userReducer.user);
    const localId = useSelector(state => state.userReducer.localId);
    const dispatch = useDispatch();

    const { data: profilePicture, isLoading, error } = useGetProfilePictureQuery(localId);

    useEffect(() => {
        const bootstrap = async () => {
            await initSessionTable();
            const session = await getSession(localId);
            if (session) {
                dispatch(setUser({email: session.email, localId: session.localId}));
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

    return (
        <NavigationContainer>
            {user ? <BottomTabsNavigator/> : <AuthStackNavigator/>}
        </NavigationContainer>
    )
}
