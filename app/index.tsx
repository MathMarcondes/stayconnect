


import { Text, View, StyleSheet, StatusBar, FlatList, TouchableOpacity, ScrollView } from "react-native";
import Header from "./Header";
import Icons from "./Icons";

import TabViewExample from "./TabBar";
import ImageView from "./ImageView";




export default function Main() {
    return(
      <View style={styles.container}>
        <Header/>
        <Icons/>
        <ImageView/>
        <TabViewExample/>
      </View>

    )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  
  }
})

