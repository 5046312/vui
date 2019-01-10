import './styles/base.scss';
import Icon from './components/icon'
import Button from './components/button'
import Layout from './components/layout'
import { Row, Col } from './components/grid'
import Code from './components/code'
import Transition from './components/transition'
import Mask from './components/mask'
import Toast from './components/toast'
import Alert from './components/alert'
import Loading from './components/loading'
import Confirm from './components/confirm'
import Modal from './components/modal'
import Top from './components/top'


const install = Vue => {
    Vue.component(Icon.name, Icon)
    Vue.component(Button.name, Button)
    Vue.component(Layout.name, Layout)
    Vue.component(Row.name, Row)
    Vue.component(Col.name, Col)
    Vue.component(Code.name, Code)
    Vue.component(Transition.name, Transition)
    Vue.component(Top.name, Top)
}

export default {
    install
}