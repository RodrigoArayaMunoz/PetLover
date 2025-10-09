import react from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const HeaderWelcome = () => {
  return (
   <> <View style= {styles.WelcomeContainer}>
        <Text style={styles.WelcomeText}> BIENVENIDO</Text>
        <Text style={styles.NameText}>RODRIGO ARAYA </Text>
    </View>
    </>
    );
};

const styles = StyleSheet.create({
      WelcomeContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    marginTop: 50,
  },
    WelcomeText: {
    fontSize: 40,
    fontWeight: 'bold',
    },
    NameText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF5733',
    },
}); 

export default HeaderWelcome;