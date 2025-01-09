
import { Text, View, StyleSheet, StatusBar, FlatList, TouchableOpacity, ScrollView } from "react-native";
import Explorar from "./Explorar";
import Routes from "./Tabs";







export default function Main() {
    return(
      <View style={styles.container}>
        <Routes/>
      </View>

    )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  
  }
})

