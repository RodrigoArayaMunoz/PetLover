import React from "react";
import { View, Text, StyleSheet, Image, KeyboardAvoidingView, ScrollView, Platform, Dimensions, TextInput, TouchhableOpacity, Pressable } from "react-native";
import { Ionicons} from '@expo/vector-icons';


const { width, height } =  (Dimensions.get('window'));
export default function Login() {

      const onsubmit  = () => {
        console.log("Login");
        
    }

  return (
    <KeyboardAvoidingView
    style={styles.container}
    behavior={Platform.OS === "ios" ? "padding" : "height"}
  >
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}>

        <View style={styles.logoContainer}>
        <Image
        source={require('../../assets/Logo_PetLover.png')}
        style={styles.Logo}
        resizeMode="contain"
        >
        </Image>
        </View>

        <View style={styles.inputContainer}>
            <View style={styles.inputField}>
                <Ionicons name="mail-outline" size={20} color="black" style={styles.icon}/>
                    <TextInput
                    placeholder="Email"
                    placeholderTextColor="8B2E21"
                    style={styles.input}
                    keyboardType="email-address"
                    />
            </View>

            <View style={styles.inputField}>
                <Ionicons name="person-outline" size={20} color="black" style={styles.icon}/>
                    <TextInput
                    placeholder="Nombre"
                    placeholderTextColor="8B2E21"
                    style={styles.input}
                    />

            </View>
        </View>

            <Pressable style={styles.button} onPress={onsubmit}>
            <Text style={styles.buttonText}>Entrar</Text>
        </Pressable>

    </ScrollView>

    </KeyboardAvoidingView>
    

  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },

    scrollcontainer:{
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: height * 0.05,
    },

    logoContainer:{
        alignItems: 'center',
        marginBottom: 10,
    },


  Logo: {
    width: width * 0.65,
    height: width * 0.65,
    },

    inputContainer:{
        width: width * 0.8,    
    },

      inputField: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#8B2E21',
    borderWidth: 2,
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 10,
    height: 45,
  },

    icon: {
    marginRight: 6,
  },

    button: {
    backgroundColor: '#8B2E21',
    borderRadius: 10,
    width: '50%',
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 10,
  },

    buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },

    input: {
    flex: 1,
    color: '#8B2E21',
  },
});
