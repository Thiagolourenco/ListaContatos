import {createStackNavigator, createAppContainer, createDrawerNavigator} from 'react-navigation'

import Login from './pages/Login'
import Home from './pages/Home'
import Cadastro from './pages/CadastroContato'
import CadastrarUser from './pages/CadastroUser'
import Contato from './pages/Contato'
import SideBar from './componets/SideBar'

const Router = createStackNavigator({
    Login,
    Main: createDrawerNavigator({
        Home, 
        Contato
    }, {
        initialRouteName: 'Home',
        contentComponent: SideBar,
        hideStatusBar: false
    }),
    Cadastro,
    CadastrarUser

})

export default createAppContainer(Router)