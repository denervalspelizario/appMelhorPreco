import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, 
          Modal, Image, TextInput, Alert
       } 
       from 'react-native';  // 1 import Modal e um botão TouchableOpacity - 2 import TextInput - 4 Alert
import TelaInicial from './component/TelaInicial'; // importando tela inicial que sera colcado como conteudo do modal inicial
import Consulta from './component/Consulta';
import BombaImage from './assets/logo.png';


// 1 - tela inicial 
// 2 - tela de input de dados,  4 - validacao de input
// 3 - tela consulta

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      modalVisible: true, // 1 
      modalVisibleConsulta: false, // 3 ativacao modal consulta
      input: '', // 2  state input  que recebe dado input
      input2: '', // 2 state input2 que recebe dado input2
    }
    this.telaInicial = this.telaInicial.bind(this); // 1 - bind para linkar  dados do state com a funcao telaInicial
    this.telaConsultaOff = this.telaConsultaOff.bind(this); // 3 - bind para linkar  dados do state com a funcao telaConsulta
    this.telaConsultaOnn = this.telaConsultaOnn.bind(this); // 3 - bind para linkar  dados do state com a funcao telaConsulta
  
  };


  
  

  telaInicial(){  // 1 - altera state modalvisible de true para false ao clicar no botão (ver linha 17 TelaInicial.js)
    if(this.state.modalVisible == true){   
      this.setState({modalVisible: false})  
    };
  };

  telaConsultaOnn(){  // 1 - altera state modalvisibleConsulta de true para false ao clicar no botão (ver linha 18 Consulta.js)
    let gasolina = this.state.input  // 4 - validacao de input
    let alcool = this.state.input2  // 4 - validacao de input 2

    if(this.state.modalVisibleConsulta == false && gasolina != '' && alcool != ''){   // 4 - validacao de dados
      this.setState({modalVisibleConsulta: true})   // 3 alteracao de state para true e mostral o modal consulta
    } else if(gasolina == ''){ // 4 validacao de dado
      Alert.alert('Atenção', 'Digite valor da alcool')
    }else if (alcool == ''){ // 4 validacao de dado
      Alert.alert('Atenção', 'Digite valor do gasolina')
    };
  };


  telaConsultaOff(){  // 1 - altera state modalvisibleConsulta de true para false ao clicar no botão (ver linha 18 Consulta.js)
    if(this.state.modalVisibleConsulta == true){   
      this.setState({modalVisibleConsulta: false})  
    };
  };


  render(){
  return (
    <View style={styles.container}>
      <Modal  // 1 - Modal Tela Inicial
        transparent={false} // 1 - deixa o fundo fora do modal invisivel
        animationType='fade' // 1 - modal vai sumir sem animação por isso o fade 
        visible={this.state.modalVisible} // 1 - mostra quando sera MOSTRADA o modal, neste caso quando o state modalVisible estiver true 
                                          // 1 - se inicia como true(ligado) pois sera a tela inicial 
      >
        {/* 1 - componente que armazena todas as infos da tela inicial(modal), recebe props(dados) que funciona ao clicar(onPress) leia linha 17 TelaInicial.js  */}
        <TelaInicial  offTelaInicial={this.telaInicial} /> 
      </Modal>

      {/* 2 -  */}
      <View style={styles.containerInput}>  
        <Image
          source={BombaImage}
          style={styles.imageBomba}
        />
        <Text style={styles.textBomba}>Qual a melhor opção?</Text>
        <Text style={styles.textInput}>Alcool (preço por litro)</Text>
        <TextInput
          style={styles.input}
          keyboardType='numeric' // 2 - na hora de digitar aparece somente o teclado numerico   
          placeholder="Alcool?" 
          underlineColorAndroid="transparent"  // 2 retira o underline padrao do texto digitado
          onChangeText={(texto) => this.setState({input: texto})} // 2 onChangeText pega o texto digitado no input 
                                                                // 2 com essa funcao ao digitar o state que é "Desenvovledor" 
                                                                // 2 que muda para setState que é o texto recebido pelo parametro texto 
        />

        <Text style={styles.textInput}>Gasolina (preço por litro)</Text>
        <TextInput
          style={styles.input}
          keyboardType='numeric' 
          placeholder="Gasolina?" 
          underlineColorAndroid="transparent"  
          onChangeText={(texto) => this.setState({input2: texto})} 
        />

        <TouchableOpacity style={styles.btnConsulta} onPress={this.telaConsultaOnn}>
          <Text style={styles.btnText}>Consultar</Text>
        </TouchableOpacity>
        <Text>{this.state.input}</Text>

        

      </View>

        <Modal  // 3 - Modal Tela Inicial
          transparent={true} // 3 - deixa o fundo fora do modal invisivel
          animationType='slide' // 3 - animação do modal em slide 
          visible={this.state.modalVisibleConsulta} // 3 - mostra quando sera MOSTRADA o modal, neste caso quando o state modalVisibleConculta estiver true 
                                          // 3 - se inicia como true(ligado) pois sera a tela inicial 
        >
        
          <Consulta  telaConsultaOff={this.telaConsultaOff} />
        </Modal>

      
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerInput: {
    backgroundColor: '#8A2BE2',
    flex: 1,
    alignItems: 'center',
    paddingTop: '30%',
  },
  imageBomba: {
    width: 150,
    height: 150,
  },
  textBomba: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    paddingVertical: 15,
  },
  textInput: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  input: {
    borderWidth: 2,
    borderColor: '#8A2BE2',
    backgroundColor: '#FFF',
    paddingVertical: 2,
    textAlign: 'center',
    borderRadius: 10,
    marginVertical: 5,
    width: 100,
  },
  btnConsulta: {
    width: 100,
    height: 50,
    marginTop: '10%',  
    
  },
  btnText: {
    fontSize: 15,
    fontWeight: 'bold',
    backgroundColor: '#FFF',
    textAlign: 'center',
    color: '#8a2be2',
    padding: 10,
    borderRadius: 20,
    fontFamily: 'Roboto',
  }
  
  
});


export default App;