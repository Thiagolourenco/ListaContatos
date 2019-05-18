import React, { Component } from 'react'
import { Text, View, Image, FlatList,TouchableOpacity } from 'react-native'
import styles from './style'
import menu from '../../assets/img/menu.png'
import firebase from '../../connect'

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      list: [],
      user: []
    }
    
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

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                <Image source={menu}/>
            </TouchableOpacity>
            <Text style={{marginLeft: 50, fontSize: 24, fontWeight: 'bold', color: '#C4C4C4', marginTop: 5}}> CONTATOS-LISTA </Text>
        </View>
        <FlatList 
          data={this.state.list}
          renderItem={({item}) => <View style={styles.flatlist}>
            <Text style={styles.textNome}>{item.nome}</Text>
            <Text style={styles.textEmail}>{item.email}</Text>
        </View>}
        />
        
      </View>
    )
  }
}

Home.navigationOptions = {
  header: null
}
export default Home