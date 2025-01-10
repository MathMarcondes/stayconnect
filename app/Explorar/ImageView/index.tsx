import React from "react"
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context"
import { Text, ScrollView, StyleSheet, Image, View} from "react-native"

const Imagpng = require("../Pikachu.png");


export default function ImageView() {
    return(
    <SafeAreaProvider>
    <SafeAreaView>
      <ScrollView>
        <Text style={styles.title}>
        A GPU RTX sédrie 50 alcança uma fidelidade gráfica superior graças a 
        sua alta potência de IA, podendo até gerar imagens em alta velocidade 
        com o NVIDIA Studio. A cereja do bolo, claro, é a melhora de desempenho 
        com o DLSS 4.
        Graças ao Hawk Fan, a turbulência e nível de ruído também foram muito 
        reduzidos enquanto o fluxo de ar aumentou em 12,5%, com a pressão do ar 
        melhorada em 53,6%. Há uma melhora drástica nas condições de 
        resfriamento, seguindo a tendência e trabalho dos últimos anos.
        </Text>

       <Image source={Imagpng} style={{width:300, height:300}}/>
        
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
        fontSize: 40,
        padding: 12
    }
 
})