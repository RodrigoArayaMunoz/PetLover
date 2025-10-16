import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PetListScreen from "../screens/pets/PetListScreen";
import PetScreen from "../screens/pets/PetScreen";

const Stack = createNativeStackNavigator();

export default function PetsNavigator() {
  return (
    <Stack.Navigator
                screenOptions={{
                headerShown: true
            }}>
      <Stack.Screen  name="PetList" component={PetListScreen} options={{ title: "Mascotas" }}  />
      <Stack.Screen name="PetScreen" component={PetScreen} options={{ title: "Detalle" }}
        screenOptions={{ headerShown: true }} />
    </Stack.Navigator>
  );
}