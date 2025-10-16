import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StackNavigator from "./StackNavigator";
import ListsStackNavigator from "./ListsStackNavigator";
import PetLocationStackNavigator from "./PetLocationStackNavigator";
import ProfileStackNavigator from "./ProfileStackNavigator";
import PetsNavigator from "./PetsNavigator";
import { StyleSheet } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const BottomTabsNavigator = () =>{
    return(
    <Tab.Navigator
        screenOptions={{
            headerShown:false,
            tabBarStyle: styles.tabBar,
            tabBarLabelStyle: styles.tabBarLabelStyle,
            }}

        >

        <Tab.Screen name="Inicio" component={PetsNavigator}
        options={{
            tabBarIcon:() => <Ionicons name="home-outline" size={20} color="#fff"/>
        }}
        />
        <Tab.Screen name="Refugios" component={PetLocationStackNavigator}
                        options={{
            tabBarIcon:() => <Ionicons name="location-outline" size={20} color="#fff"/>
        }}
        />

                <Tab.Screen name="Mi Perfil" component={ProfileStackNavigator}
                        options={{
            tabBarIcon:() => <Ionicons name="person-outline" size={20} color="#fff"/>
        }}
        />

    </Tab.Navigator>
    )
}

export default BottomTabsNavigator

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: '#851515e8',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        height: 75,
    },
    tabBarLabelStyle: {
        fontSize: 12,
        color: '#fff',
    },
});