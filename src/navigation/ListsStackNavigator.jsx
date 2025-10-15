import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ListsApplication, Home } from "../screens";
import Header from "../components/Header";

const Stack = createNativeStackNavigator();

const ListsStackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Listado"
            >
            <Stack.Screen name="Listado" component={ListsApplication}/>
        </Stack.Navigator>
    )
}

export default ListsStackNavigator;
