import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NewPetApplication, PetsLocation, ListsApplication, Home } from "../screens";
import Header from "../components/Header";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                header: () => <Header/>
            }
            }
            >
             <Stack.Screen name="Home" component={Home}/>
            {/* <Stack.Screen name="Nuevo" component={NewPetApplication}/> */}
{/*             <Stack.Screen name="Listado" component={ListsApplication}/>
            <Stack.Screen name="Refugios" component={PetsLocation}/>  */}
        </Stack.Navigator>
    )
}

export default StackNavigator;
