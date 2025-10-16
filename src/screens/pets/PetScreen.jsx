import React from "react";
import { 
  View, 
  Text, 
  Image, 
  StyleSheet, 
  ScrollView, 
  Dimensions, 
  Alert, 
  Pressable 
} from "react-native";
import { useRoute } from "@react-navigation/native";

const { width } = Dimensions.get("window");

const PetScreen = () => {
  const route = useRoute();
  const { pet } = route.params; // 👈 Se recibe desde navigate("PetScreen", { pet })

  if (!pet) {
    return (
      <View style={styles.centered}>
        <Text>No se encontraron datos de la mascota.</Text>
      </View>
    );
  }

  const handleAdoptPress = () => {
    Alert.alert("Solicitud de adopción enviada ✅");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{ uri: pet.mainImage }}
        style={styles.petImage}
        resizeMode="cover"
      />

      <View style={styles.infoContainer}>
        <View style={styles.infoBlock}>
          <Text style={styles.title}>Nombre</Text>
          <Text style={styles.value}>{pet.name}</Text>
        </View>

        <View style={styles.infoBlock}>
          <Text style={styles.title}>Raza</Text>
          <Text style={styles.value}>{pet.breed}</Text>
        </View>

        <View style={styles.infoBlock}>
          <Text style={styles.title}>Edad</Text>
          <Text style={styles.value}>{pet.age}</Text>
        </View>

        <View style={styles.infoBlock}>
          <Text style={styles.title}>Características</Text>
          <Text style={styles.value}>{pet.characteristics}</Text>
        </View>

        <View style={styles.infoBlock}>
          <Text style={styles.title}>Historia</Text>
          <Text style={styles.value}>{pet.history}</Text>
        </View>

        {/* Botón centrado al final */}
        <Pressable style={styles.adoptButton} onPress={handleAdoptPress}>
          <Text style={styles.adoptButtonText}>ADOPTAR</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  petImage: {
    width: width * 0.9,
    height: width * 0.9,
    borderRadius: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 4, // Android
  },
  infoContainer: {
    width: "100%",
  },
  infoBlock: {
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  value: {
    fontSize: 16,
    color: "#555",
    lineHeight: 22,
  },
  adoptButton: {
    marginTop: 30,
    backgroundColor: "#851515e8",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "70%",
    alignSelf: "center",
    elevation: 3,
  },
  adoptButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default PetScreen;
