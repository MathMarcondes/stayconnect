import { Text, View, StyleSheet, StatusBar, FlatList, TouchableOpacity, ScrollView } from "react-native";

import Header from "./Header";
import Icons from "./Icons";
import ImageView from "./ImageView";



export default function Explorar() {
    return(
      <View style={styles.container}>
        <Header/>
        <Icons/>
        <ImageView/>

      </View>

    )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  }
})