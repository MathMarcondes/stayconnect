import {View, Text, StyleSheet, ScrollView, } from 'react-native';


export default function Body() {
    return(
        <View style={styles.scrollView}>
            <Text style={styles.Text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    scrollView:{
        flex: 1,

    },

    Text:{
        fontSize: 40,
        padding: 12,
        color: 'black'
    }
})