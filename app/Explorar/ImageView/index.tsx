import React from "react"
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context"
import { Text, ScrollView, StyleSheet, Image, View} from "react-native"

const Imagpng = require("../001.png");
const imagpng2 = require("../007.png");
const imagpng3 = require("../004.png");


export default function ImageView() {
    return(
    <SafeAreaProvider>
    <SafeAreaView>
      <ScrollView>

       <Image source={Imagpng} style={styles.image}/>
       <Text style={styles.title}>
       For some time after its birth, it uses the nutrients that are packed into the seed on its back in order to grow.
       </Text>

       <Image source={imagpng2} style={styles.image}/>
       <Text style={styles.title}>
       After birth, its back swells and hardens into a shell. It sprays a potent foam from its mouth.
       </Text>

       <Image source={imagpng3} style={styles.image}/>
       <Text style={styles.title}>
       The flame on its tail shows the strength of its life-force. If Charmander is weak, the flame also burns weakly.
       </Text>

      </ScrollView>
    </SafeAreaView>
  </SafeAreaProvider>
    )
}


const styles = StyleSheet.create({
    
    box:{
        position: 'absolute',
        top: 0.5
    },
    title:{
        fontSize: 25,
        padding: 12
    },
    image:{
      width: 150,
      height: 150,
      alignItems: 'center',
      alignContent: 'center',
      alignSelf: 'center'
    }
 
})