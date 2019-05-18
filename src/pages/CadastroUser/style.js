import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1A1919",
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: 359,
        height: 52,
        backgroundColor: 'rgba(196, 196, 196, 0.2)',
        margin: 10,
        color: '#C4C4C4'

    },
    titulo: {
        fontSize: 24,
        color: '#C4C4C4',
        fontWeight: 'bold',
        marginBottom: 30   
    },
    btnCadastro: {
        width: 172,
        height: 42,
        backgroundColor: 'rgba(196, 196, 196, 0.8)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginTop: 70
    },
    btnCadastroText: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})

export default styles