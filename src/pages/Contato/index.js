import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image, FlatList, Platform, Modal, TouchableHighlight, ScrollView, TextInput, Alert} from 'react-native'
import styles from './style'
import firebase from '../../connect'

import menu from '../../assets/img/menu.png'
import edit from '../../assets/img/writing.png'
import remove from '../../assets/img/x-button.png'
import plus from '../../assets/img/plus.png'
import back from '../../assets/img/left-arrow.png'

class Contato extends Component {
  constructor(props){
    super(props)
    this.state = {
      swipeToClose: true,
      list: [],
      modalVisible: false,
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

    this.handleRemover = this.handleRemover.bind(this)
    this.handleAtualizar = this.handleAtualizar.bind(this)

  }

  componentDidMount(){
    firebase.database().ref('Contato').on('value', (snapshot) => {
      let state = this.state
      state.list = []

      snapshot.forEach((childItem) => {
        state.list.push({
          key: childItem.key,
          nome: childItem.val().nome,
          email: childItem.val().email
        })
      })
      this.setState(state)
    })
  }

  handleRemover(item){
    setInterval(() => {
      firebase.database().ref('Contato').child(item).remove()
    },5000)
    Alert.alert("Contato removido com Sucesso")
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible})
  }

  handleAtualizar(){
    if(this.state.nome != ""){
      firebase.database().ref('Contato/').update({
        nome: this.state.nome,
        sobrenome: this.state.sobrenome,
        telefone: this.state.telefone,
        rua: this.state.rua,
        bairro: this.state.bairro,
        cidade: this.state.cidade,
        uf: this.state.uf,
        email: this.state.email
      })
      Alert.alert("Contato Editado Com Sucesso")
      this.state.modalVisible = false
    }
  }

  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                <Image source={menu}/>
            </TouchableOpacity>
            <Text style={{marginLeft: 80, fontSize: 24, fontWeight: 'bold', color: '#C4C4C4', marginTop: 5}}> CONTATOS </Text>
        </View>
        <FlatList 
          data={this.state.list}
          renderItem={({item}) => <View style={styles.flatlist}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.textNome}>{item.nome}</Text>
              <TouchableOpacity onPress={() => this.setModalVisible(true)}>
                <Image source={edit} style={{marginRight: 7, marginTop: 5}}/>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.textEmail}>{item.email}</Text>
              <TouchableOpacity onPress={() => this.handleRemover(item.key)}>
                  <Image source={remove} style={{marginTop: 10, marginRight: 7}}/>
              </TouchableOpacity>
            </View>
          </View>
          
          
          
          }
        />

        <Modal
          animationType="fade"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.')
          }}>
            <ScrollView style={{backgroundColor: "#1A1919"}} >
              <Text style={{color: '#C4C4C4', textAlign: 'center', alignItems: 'center', fontSize: 24}}>Atualizar Dados</Text>
              <TextInput placeholder="Nome" placeholderTextColor="#C4C4C4" style={styles.input} onChangeText={(nome) => this.setState({nome})}/>
              <TextInput placeholder="Sobrenome" placeholderTextColor="#C4C4C4" style={styles.input} onChangeText={(sobrenome) => this.setState({sobrenome})}/>
              <TextInput placeholder="Telefone" placeholderTextColor="#C4C4C4" style={styles.input} onChangeText={(telefone) => this.setState({telefone})}/>
              <Text style={{color: '#C4C4C4', textAlign: 'center', alignItems: 'center', fontSize: 22}}>Endereço</Text>
              <TextInput placeholder="Rua " placeholderTextColor="#C4C4C4" style={styles.input} onChangeText={(rua) => this.setState({rua})}/>
              <TextInput placeholder="Bairro" placeholderTextColor="#C4C4C4" style={styles.input} onChangeText={(bairro) => this.setState({bairro})}/>
              <TextInput placeholder="Cidade" placeholderTextColor="#C4C4C4" style={styles.input} onChangeText={(cidade) => this.setState({cidade})}/>
              <TextInput placeholder="UF" placeholderTextColor="#C4C4C4" style={styles.input} onChangeText={(uf) => this.setState({uf})}/>
              <TextInput placeholder="E-Mail" placeholderTextColor="#C4C4C4" style={styles.input} onChangeText={(email) => this.setState({email})}/>

              <TouchableOpacity onPress={this.handleAtualizar} style={{width: 172, height: 42, backgroundColor: 'rgba(196, 196, 196, 0.8)', justifyContent: 'center', alignItems: 'center', borderRadius: 20, marginLeft: 120, marginTop: 20, marginBottom: 20}}>
                  <Text style={{fontSize: 20}}>ATUALIZAR</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible); 
                }}
                style={{marginLeft: 20, marginBottom: 20}}
                >
                  <Image source={back} style={styles.imgBack}/>
              </TouchableOpacity>
    
            </ScrollView>

        </Modal>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('Cadastro')} style={{marginLeft: 300, marginTop: 20}}>
          <Image source={plus}/>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Contato