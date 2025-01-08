


import { Text, View, StyleSheet, StatusBar, FlatList, TouchableOpacity, ScrollView } from "react-native";
import Header from "./Header";
import Icons from "./Icons";
import ImageView from "./ImageView";
import TabLayout from "./TabBar";




export default function Main() {
    return(
      <View style={styles.container}>
        <Header/>
        <Icons/>
        <ImageView/>
        <TabLayout/>
      </View>

    )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  
  }
})

