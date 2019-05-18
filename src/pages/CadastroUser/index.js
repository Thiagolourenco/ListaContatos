import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity, Alert } from 'react-native'
import styles from './style'
import firebase from '../../connect'

class CadastroUser extends Component {
  constructor(props){
      super(props)
      this.state = {
          nome: null,
          senha: null,
          email: null
      }

      this.handleCadastrar = this.handleCadastrar.bind(this)
  }

  handleCadastrar(){
    if(this.state.nome != '' && this.state.email != '' && this.state.senha != ''){
        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                firebase.database().ref('Usuario').child(user.uid).set({
                    nome: this.state.nome,
                    email: this.state.email
                })
                Alert.alert("Usuário Cadastrado Com Sucesso")
            }
        })
    
        firebase.auth().createUserWithEmailAndPassword(
            this.state.email,
            this.state.senha
        ).catch((error) => {
            alert(error)
        })
    }
    this.props.navigation.goBack()
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}> Cadastro de Usuários</Text>
        <TextInput placeholder="Nome" placeholderTextColor="#C4C4C4" style={styles.input} onChangeText={(nome) => this.setState({nome})}/>
        <TextInput placeholder="*********" placeholderTextColor="#C4C4C4" style={styles.input} secureTextEntry onChangeText={(senha) => this.setState({senha})}/>
        <TextInput placeholder="E-Mail" placeholderTextColor="#C4C4C4" style={styles.input} onChangeText={(email) => this.setState({email})}/>

        <TouchableOpacity onPress={this.handleCadastrar} style={styles.btnCadastro}>
            <Text style={styles.btnCadastroText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

CadastroUser.navigationOptions = {
    header: null
}
export default CadastroUser