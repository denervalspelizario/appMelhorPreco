import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal } from 'react-native';  // 1 import Modal e um botão TouchableOpacity
import TelaInicial from './component/TelaInicial'; // importando tela inicial que sera colcado como conteudo do modal inicial


// 1 - tela inicial 
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      modalVisible: true
    }
    this.telaInicial = this.telaInicial.bind(this); // 1 - bind para linkar  dados do state com a funcao telaInicial
  };

  telaInicial(){  // 1 - altera state modalvisible de true para false ao clicar no botão (ver linha 17 TelaInicial.js)
    if(this.state.modalVisible == true){   
      this.setState({modalVisible: false})  
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

      
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
});


export default App;