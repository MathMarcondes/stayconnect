import { View, Text, Image, StyleSheet} from 'react-native';



export default function Page1() {
    return(
        <View style={styles.container}>
            <Text>First Image</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,

    },
    
})