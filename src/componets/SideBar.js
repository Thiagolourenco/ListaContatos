import React, {Component} from 'react'
import {Text, View, TouchableOpacity, Dimensions, StyleSheet, ScrollView} from 'react-native'
import firebase from '../connect'

class SideBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nome: "Usuario",
            email: "email@email.com"
        }
    }

    componentDidMount(){
        firebase.database().ref('Usuario').once('value', (snapshot) => {
            let state = this.state
            state.nome = snapshot.val().nome
            state.email = snapshot.val().email
            this.setState({state})
        })
    }

    handleSair = () => {
        
        setInterval(() =>{
            firebase.auth().signOut()
            this.props.navigation.navigate('Login')
        }, 6000)
        
    }

    navLink(nav, text){
        return (
            <TouchableOpacity onPress={() => this.props.navigation.navigate(nav)} style={{height: 50}}>
                <Text style={{flex: 1, textAlign: 'center', padding: 6, fontSize: 18, paddingLeft: 14, margin: 5, color: 'white'}}>{text}</Text>
            </TouchableOpacity>
        )
    }
    render(){
        return (
            <ScrollView style={styles.container}> 
                <View style={styles.header}>
                    <Text style={styles.usuarioNome}>Usuário</Text>
                    <Text style={styles.usuarioEmail}>Email</Text>
                </View>
                <View style={{flex: 1, marginTop: 10}}>
                    {this.navLink('Home', 'Home')}
                    {this.navLink('Contato', 'Contato')}
                </View>
                <TouchableOpacity onPress={this.handleSair} style={{flex: 1, height: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end'}}>
                    <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold', marginRight: 10}}>Sair</Text>
                </TouchableOpacity>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(26, 25, 25, 0.9)"
    },
    header: {
        flex: 1, 
        backgroundColor: "rgba(26, 25, 25, 0.8)", 
        flexDirection: 'column', 
        justifyContent: 'center', 
        height: 80
    },
    usuarioNome: {
        color: "#C4C4C4", 
        fontSize: 18, 
        paddingBottom: 8, 
        paddingLeft: 8
    },
    usuarioEmail: {
        color: "#C4C4C4", 
        fontSize: 16, 
        paddingTop: 8, 
        paddingLeft: 8
    }
})

export default SideBar