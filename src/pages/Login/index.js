import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import styles from './style'
import firebase from '../../connect'

class Login extends Component {

  state = {
    email: null,
    senha: null
  }

  handleLogar = () => {
      firebase.auth().onAuthStateChanged((user) => {
        if(user){
          this.props.navigation.navigate('Home')
        }
      })

      firebase.auth().signInWithEmailAndPassword(
        this.state.email,
        this.state.senha
      ).catch((error) => {
        if(error.code == 'auth/wrong-password'){
          alert("Senha Errad Tenta novamente")
        }else if(error.code == 'auth/user-not-found'){
          alert("Usuário Incorreto")
        }else{
          alert(error)
        }
      })
  }

  handleCadatrar = () => {
      this.props.navigation.navigate('CadastrarUser')
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput placeholder="E-MAIL" placeholderTextColor="#C4C4C4" style={styles.input} onChangeText={(email) => this.setState({email})}/>
        <TextInput placeholder="*********" placeholderTextColor="#C4C4C4" secureTextEntry={true} style={styles.input} onChangeText={(senha) => this.setState({senha})}/>
        <TouchableOpacity onPress={this.handleCadatrar} style={styles.btnCadastrar}>
            <Text style={styles.cadastrarText}>CADASTRAR</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.handleLogar} style={styles.btnLogar}>
            <Text style={styles.logarText}>LOGAR</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

Login.navigationOptions = {
    header: null
}

export default Login

