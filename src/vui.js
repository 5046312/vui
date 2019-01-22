import './styles/base.scss';
import Icon from './components/icon'
import Button from './components/button'
import Group from './components/group'
import Layout from './components/layout'
import { Row, Col } from './components/grid'
import Transition from './components/transition'
import Mask from './components/mask'
import Toast from './components/toast'
import Alert from './components/alert'
import {$bar} from './components/loading'
import Confirm from './components/confirm'
import Modal from './components/modal'
import Top from './components/top'
import Hr from './components/hr'
import Scrollspy from './components/scrollspy'
import Pin from './components/pin'


const install = Vue => {
    Vue.component(Icon.name, Icon)
    Vue.component(Button.name, Button)
    Vue.component(Group.name, Group)
    Vue.component(Layout.name, Layout)
    Vue.component(Row.name, Row)
    Vue.component(Col.name, Col)
    Vue.component(Transition.name, Transition)
    Vue.component(Top.name, Top)
    Vue.component(Hr.name, Hr)
    Vue.component(Scrollspy.name, Scrollspy)
    Vue.component(Pin.name, Pin)
}
export default {
    install,
    '$bar': $bar
}