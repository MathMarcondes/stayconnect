import { ScrollView, View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';



export default function Icons() {
    return(
        <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <MaterialIcons name="maps-home-work" size={24} color="black" />
                </View>
            </TouchableOpacity>
        </ScrollView>
        
    )
}



const styles = StyleSheet.create({
    container:{
        maxHeight: 84,
        marginBottom: 14,
        marginTop: 18,
        paddingEnd: 14,
        paddingStart: 14,
    },
    actionButton:{
        alignContent: 'center',
        marginRight: 10
    },
    areaButton:{
        backgroundColor: '#ecf0fi',
        height: 60,
        width: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    }
    
})
