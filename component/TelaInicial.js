import React, {Component} from 'react';
import { StyleSheet, Text, View,Image, TouchableOpacity, } from 'react-native';  // 1 import  botão TouchableOpacity
import BombaCombustivel from '../assets/combustivel.png'

// 1 - tela inicial 
class TelaInicial extends Component {

  render(){
  return (
    <View style={styles.containerTelaInicial}>
        <View style={styles.containerCombustivel}>
            <Text style={styles.textCombustivel}>Melhor Preço</Text>
            <Image
                source={BombaCombustivel}
                style={styles.imageCombustivel}
            />
            <TouchableOpacity style={styles.btnCombustivel} onPress={this.props.offTelaInicial}>
                <Text style={styles.textBtn}>Entrar</Text>
            </TouchableOpacity>
        </View>
      
    </View>
  );
  }
}

const styles = StyleSheet.create({
  containerTelaInicial: {
    flex: 1, 
    backgroundColor: '#8A2BE2',
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  textCombustivel: {
    color: '#FFF',
    fontSize: 25,
    fontFamily: 'Roboto',
    fontWeight: 'bold',

  },
  imageCombustivel: {
    width: 150,
    height: 150
  },
  containerCombustivel:  {
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnCombustivel: {
    width: 100,
    height: 50,
    
    
  },
  textBtn: {
    fontSize: 15,
    backgroundColor: '#FFF',
    textAlign: 'center',
    color: '#8a2be2',
    padding: 10,
    borderRadius: 20,
  }
  
});


export default TelaInicial;