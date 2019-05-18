import {createDrawerNavigator} from 'react-navigation'

import Home from './pages/Home'
import Contato from './pages/Contato'
import SideBar from './componets/SideBar'

const Drawer = createDrawerNavigator({
    Contato
}, {contentComponent: SideBar})

export default Drawer