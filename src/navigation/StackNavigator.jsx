import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NewPetApplication, PetsLocation, ListsApplication } from "../screens";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Nuevo" component={NewPetApplication} options={{headerShown: false}}/>
            <Stack.Screen name="Mis Solicitudes" component={ListsApplication} options={{headerShown: false}}/>
            <Stack.Screen name="Refugios" component={PetsLocation} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}

export default StackNavigator;
