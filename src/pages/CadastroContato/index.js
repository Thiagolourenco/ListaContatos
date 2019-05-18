import React, { Component } from 'react'
import { Text, View, Image, TextInput, ScrollView, TouchableOpacity} from 'react-native'
import styles from './style'
import firebase from '../../connect'

import back from '../../assets/img/left-arrow.png'

class Cadastro extends Component {
  constructor(props){
    super(props)
    this.state = {
      nome: null,
      sobrenome: null,
      email: null,
      telefone: null,
      endereco: {
        rua: null,
        bairro: null,
        cidade: null,
        uf: null
      }
    }

    this.handleCadastrar = this.handleCadastrar.bind(this)
  }

  handleCadastrar(){
    if(this.state.nome != ""){
      let contato = firebase.database().ref('Contato/')
      let chave = contato.push().key

      contato.child(chave).set({
        nome: this.state.nome,
        sobrenome: this.state.sobrenome,
        telefone: this.state.telefone,
        endereco: {
          rua: this.state.rua,
          bairro: this.state.bairro,
          cidade: this.state.cidade,
          uf: this.state.uf,
        },
        email: this.state.email
      }).then(() => {
        alert("Contato Cadastrado Com Sucesso")
        this.props.navigation.goBack()
      }).catch((error) => {
        alert("Error ==> ", error)
      })

    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                <Image source={back} style={styles.imgBack}/>
            </TouchableOpacity>
            <Text style={styles.titulo}>Cadastro</Text>
        </View>
        <ScrollView>

            <TextInput placeholder="Nome" placeholderTextColor="#C4C4C4" style={styles.input} onChangeText={(nome) => this.setState({nome})}/>
            <TextInput placeholder="Sobrenome" placeholderTextColor="#C4C4C4" style={styles.input} onChangeText={(sobrenome) => this.setState({sobrenome})}/>
            <TextInput placeholder="Telefone" placeholderTextColor="#C4C4C4" style={styles.input} onChangeText={(telefone) => this.setState({telefone})} keyboardType="numeric"/>
            <Text style={styles.textEndereco}>Endereço</Text>
            <TextInput placeholder="Rua " placeholderTextColor="#C4C4C4" style={styles.input} onChangeText={(rua) => this.setState({rua})}/>
            <TextInput placeholder="Bairro" placeholderTextColor="#C4C4C4" style={styles.input} onChangeText={(bairro) => this.setState({bairro})}/>
            <TextInput placeholder="Cidade" placeholderTextColor="#C4C4C4" style={styles.input} onChangeText={(cidade) => this.setState({cidade})}/>
            <TextInput placeholder="UF" placeholderTextColor="#C4C4C4" style={styles.input} onChangeText={(uf) => this.setState({uf})}/>
            <TextInput placeholder="E-Mail" placeholderTextColor="#C4C4C4" style={styles.input} onChangeText={(email) => this.setState({email})}/>

        <TouchableOpacity onPress={this.handleCadastrar} style={styles.btnCadastrar}>
            <Text style={{fontSize: 20}}>CADASTRAR</Text>
        </TouchableOpacity>
 
        </ScrollView>

      </View>
    )
  }
}

export default Cadastro