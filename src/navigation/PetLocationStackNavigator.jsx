import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../components/Header";
import { PetsLocation } from "../screens";

const Stack = createNativeStackNavigator();

const PetLocationStackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                header: () => <Header/>
            }
            }
            >
            <Stack.Screen name="Refugios" component={PetsLocation}/>
        </Stack.Navigator>
    )
}

export default PetLocationStackNavigator;
