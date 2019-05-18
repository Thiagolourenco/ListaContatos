import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1A1919",
    },
    header: {
        flexDirection: 'row',
        margin: 20,
    },
    flatlist: {
        width: 364,
        height: 84,
        backgroundColor: 'rgba(196, 196, 196, 0.7)',
        marginLeft: 25,
        marginTop: 15,
        borderRadius: 10
    },
    textNome: {
        fontSize: 18, 
        marginTop: 3,
        marginLeft: 10,
        fontWeight: 'bold'
    },
    textEmail: {
        fontSize: 14, 
        marginTop: 10,
        marginLeft: 10,
        fontWeight: 'bold'
    },
    modal: {
        justifyContent: 'center',
        alignItems: 'center'
      },
    
      modal2: {
        height: 230,
        backgroundColor: "#3B5998"
    },
    input: {
        width: 385,
        height: 52,
        backgroundColor: 'rgba(196, 196, 196, 0.2)',
        marginTop: 15,
        color: '#C4C4C4',
        marginLeft: 13
    },
    btnAtualizar: {
        width: 172, 
        height: 42, 
        backgroundColor: 'rgba(196, 196, 196, 0.8)', 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: 20, 
        marginLeft: 120, 
        marginTop: 20, 
        marginBottom: 20
    },
    textEndereco: {
        color: '#C4C4C4', 
        textAlign: 'center', 
        alignItems: 'center', 
        fontSize: 22, 
        marginTop: 10
    },
    textTituloAtualizar: {
        color: '#C4C4C4', 
        textAlign: 'center', 
        alignItems: 'center', 
        fontSize: 24
    }
})

export default styles