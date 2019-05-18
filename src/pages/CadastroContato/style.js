import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A1919'
    },
    header: {
        flexDirection: 'row',
        marginTop: 20
    },
    titulo: {
        fontSize: 24,
        color: '#C4C4C4',
        marginLeft: 105  
    },
    imgBack: {
        marginLeft: 15
    },
    input: {
        width: 390,
        height: 52,
        backgroundColor: 'rgba(196, 196, 196, 0.2)',
        marginTop: 15,
        color: '#C4C4C4',
        marginLeft: 13
    },
    textEndereco: {
        color: '#C4C4C4', 
        textAlign: 'center', 
        alignItems: 'center', 
        fontSize: 22, 
        marginTop: 10
    },
    btnCadastrar: {
        width: 172, 
        height: 42, 
        backgroundColor: 'rgba(196, 196, 196, 0.8)', 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: 20, 
        marginLeft: 120, 
        marginTop: 20, 
        marginBottom: 20
    }
    
})

export default styles