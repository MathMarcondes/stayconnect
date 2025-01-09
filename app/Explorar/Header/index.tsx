import {View, Text, StatusBar, TextInput, TouchableOpacity, StyleSheet, } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';



export default function Header() {
    return(
        <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Inicie sua busca"
        placeholderTextColor="#555"/>
       <View style={styles.content}>
        <TouchableOpacity style={styles.button}>
           <AntDesign name="filter" color="#000" size={24} />

        </TouchableOpacity>
        </View>
    </View>

    
    
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    marginRight: 30,
    marginLeft: 15,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",
    borderRadius: 25,
    padding: 6,
    backgroundColor: "white",
    marginEnd: 50,
    

    // Sombra para iOS
    shadowColor: "#000", // Cor da sombra
    shadowOffset: { width: 2, height: 4 }, // Posição
    shadowOpacity: 4, // Opacidade
    shadowRadius: 4, // Raio de difusão 
    

    // Sombra para Android
    elevation: 10,
  },
  input: {
    flex: 1,
    height: 40,
    color: "black",
    paddingHorizontal: 10,
    fontSize: 16,
  },
  content:{
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between'
   },
   button:{
    paddingEnd: 15,
   }
  
});
