import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/auth/Login";

const Stack = createNativeStackNavigator();

export default function AuthStackNavigator() {
    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Login" component={Login}/>
        </Stack.Navigator>
    )
}