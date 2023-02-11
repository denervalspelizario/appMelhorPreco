import React, {Component} from 'react';
import { StyleSheet, Text, View,Image, TouchableOpacity, } from 'react-native';  // 1 import  botão TouchableOpacity
import Gas from '../assets/gas.png'

// 1 - tela inicial 
class Consulta extends Component {

  render(){
  return (
    <View style={styles.container}>
        <View style={styles.containerConsulta}>
            
            <Image
                source={Gas}
                style={styles.imageGas}
            />
            <Text style={styles.textConsulta}>Compensa usar {this.props.valorCompensa}</Text>
            <Text style={styles.textPreco}>Com os preços</Text>
            <Text style={styles.textCombustivelUp}>Álcool: {this.props.valorAlcool}</Text>
            <Text style={styles.textCombustivelDown}>Gasolina: {this.props.valorGasolina}</Text>
            <TouchableOpacity style={styles.btnSair} onPress={this.props.telaConsultaOff}>
                <Text style={styles.textBtn}>Sair</Text>
            </TouchableOpacity>
        </View>
      
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#8A2BE2',
    alignItems: 'center' ,
  },
  containerConsulta: {
    marginTop: '30%',
    flex: 1,
    alignItems: 'center'
  },
  imageGas: {
    width: 200,
    height: 200,
  },
  textConsulta: {
    color: '#FFF',
    fontSize: 20,
    marginVertical: 20,
    fontFamily: 'Roboto',
    fontWeight: 'bold',   
  },
  textPreco: {
    textAlign: 'center',
    color: '#FFF',
    paddingBottom: 10,
    fontSize: 20,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    
  },
  textCombustivelUp: {
    marginVertical: 5,
    color: '#FFF',
    fontSize: 20,
    marginRight: '15%',
  },
  textCombustivelDown: {
    marginVertical: 5,
    color: '#FFF',
    fontSize: 20,
    marginRight: '10%',
  },
  textBtn: {
    fontSize: 15,
    textAlign: 'center',
    color: '#8a2be2',
  },
  btnSair: {
    marginVertical: '10%',
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#FFF',
    width: 100,
    
  }

  
});


export default Consulta;