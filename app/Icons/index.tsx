import { ScrollView, View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';






export default function Icons() {
    return(
        <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <MaterialIcons name="maps-home-work" size={24} color="black" />
                </View>
                <Text style={styles.Text}>Vistas Incríveis</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <MaterialCommunityIcons name="home-assistant" size={24} color="black" />
                </View>
                <Text style={styles.Text}>Icônicos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <Feather name="coffee" size={24} color="black" />
                </View>
                <Text style={styles.Text}>Pousadas</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <MaterialCommunityIcons name="home-circle" size={24} color="black" />
                </View>
                <Text style={styles.Text}>Casa na árvore</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <AntDesign name="picture" size={24} color="black" />
                </View>
                <Text style={styles.Text}>Lagos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <MaterialIcons name="maps-home-work" size={24} color="black" />
                </View>
                <Text style={styles.Text}>Vistas Incríveis</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <MaterialCommunityIcons name="home-assistant" size={24} color="black" />
                </View>
                <Text style={styles.Text}>Icônicos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <Feather name="coffee" size={24} color="black" />
                </View>
                <Text style={styles.Text}>Pousadas</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <MaterialCommunityIcons name="home-circle" size={24} color="black" />
                </View>
                <Text style={styles.Text}>Casa na árvore</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <AntDesign name="picture" size={24} color="black" />
                </View>
                <Text style={styles.Text}>Lagos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <MaterialIcons name="maps-home-work" size={24} color="black" />
                </View>
                <Text style={styles.Text}>Vistas Incríveis</Text>
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
        alignItems: 'center',
        marginRight: 10
    },
    areaButton:{
        backgroundColor: '#ecf0fi',
        height: 40,
        width: 60,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Text:{
        color: 'black',
        fontSize: 12,
    }
    
})
