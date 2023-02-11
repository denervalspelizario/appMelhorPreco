import React, {Component} from 'react';
import { StyleSheet, Text, View,Image, TouchableOpacity, } from 'react-native';  // 1 import  botão TouchableOpacity
import Gas from '../assets/gas.png'

// 1 - tela inicial 
class Consulta extends Component {

  render(){
  return (
    <View style={styles.containerTelaInicial}>
        <View style={styles.containerCombustivel}>
            
            <Image
                source={Gas}
                style={styles.imageGas}
            />
            <Text style={styles.textCombustivel}></Text>
            <TouchableOpacity style={styles.btnSair} onPress={this.props.telaConsultaOff}>
                <Text style={styles.textBtn}>Sair</Text>
            </TouchableOpacity>
        </View>
      
    </View>
  );
  }
}

const styles = StyleSheet.create({
  containerTela: {
    flex: 1, 
    backgroundColor: '#8A2BE2',
    justifyContent: 'center', 
    alignItems: 'center' 
  }
  
});


export default Consulta;