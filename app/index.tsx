


import { Text, View, StyleSheet, StatusBar, FlatList, TouchableOpacity, ScrollView } from "react-native";
import Header from "./Header";
import Icons from "./Icons";

import TabViewExample from "./TabBar";
import ImageView from "./Body";




export default function Main() {
    return(
      <View>
        <Header/>
        <Icons/>
        <ImageView/>
      </View>

    )
}


