import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../components/Header";
import { NewPetApplication } from "../screens";

const Stack = createNativeStackNavigator();

const NewPetStackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Listado"
            screenOptions={{
                header: () => <Header/>
            }
            }
            >
            <Stack.Screen name="Listado" component={NewPetApplication}/>
        </Stack.Navigator>
    )
}

export default NewPetStackNavigator;
