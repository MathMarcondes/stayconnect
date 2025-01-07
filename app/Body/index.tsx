import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

export default function ImageView() {
    return(
    <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </View>
    </SafeAreaView>
  </SafeAreaProvider>
    )
}


const styles = StyleSheet.create({
    container:{
        flex: 2
    },
    box:{
        position: 'absolute',
        top: 0.5
    },
    title:{
        fontSize: 40,
        padding: 12
    }
 
})