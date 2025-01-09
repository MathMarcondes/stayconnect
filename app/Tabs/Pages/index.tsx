import { Text, View, StyleSheet, StatusBar, FlatList, TouchableOpacity, ScrollView } from "react-native";


export default function Config() {
    return(
        <View style={styles.container}>
            <Text>Página de configuração</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex: 1
    }
})