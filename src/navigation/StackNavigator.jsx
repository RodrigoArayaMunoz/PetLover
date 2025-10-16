import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NewPetApplication, PetsLocation, ListsApplication, Home } from "../screens";
import { PetsNavigator } from "../navigation/PetsNavigator";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{ headerShown: false }}
            >
             <Stack.Screen name="Home" component={PetsNavigator}/>

        </Stack.Navigator>
    )
}

export default StackNavigator;
