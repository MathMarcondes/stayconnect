import Body from "./Body";
import Header from "./Header";

import { Text, View, StyleSheet, StatusBar, FlatList, TouchableOpacity, ScrollView } from "react-native";

import Icons from "./Icons";



export default function Main() {
    return(
      <View>
        <Header/>
        <Icons/>
        <Body/>
      </View>
    )
}