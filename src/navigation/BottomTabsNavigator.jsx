import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StackNavigator from "./StackNavigator";
import ListsStackNavigator from "./ListsStackNavigator";
import PetLocationStackNavigator from "./PetLocationStackNavigator";
import NewPetStackNavigator from "./NewPetStackNavigator";

const Tab = createBottomTabNavigator();

const BottomTabsNavigator = () =>{
    return(
    <Tab.Navigator
        screenOptions={{
            headerShown:false
        }}>
        <Tab.Screen name="Inicio" component={StackNavigator}/>
        <Tab.Screen name="Nueva Adopcion" component={NewPetStackNavigator}/>
        <Tab.Screen name="Mis Solicitudes" component={ListsStackNavigator}/>
        <Tab.Screen name="Refugio" component={PetLocationStackNavigator}/>
    </Tab.Navigator>
    )
}

export default BottomTabsNavigator