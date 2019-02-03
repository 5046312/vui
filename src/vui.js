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
import { $bar } from './components/loading'
import Confirm from './components/confirm'
import Modal from './components/modal'
import Top from './components/top'
import Hr from './components/hr'
import Scrollspy from './components/scrollspy'
import Pin from './components/pin'
import Progress from './components/progress'
import { Dot, Tag } from './components/tag'
import Img from './components/img'
import Bread from './components/bread'
import Switch from './components/switch'
import Radio from './components/radio'
import Checkbox from './components/checkbox'
import Navbar from './components/navbar'

const install = Vue => {
    Vue.component(Transition.name, Transition)
    Vue.component(Icon.name, Icon)
    Vue.component(Button.name, Button)
    Vue.component(Group.name, Group)
    Vue.component(Layout.name, Layout)
    Vue.component(Row.name, Row)
    Vue.component(Col.name, Col)
    Vue.component(Top.name, Top)
    Vue.component(Hr.name, Hr)
    Vue.component(Scrollspy.name, Scrollspy)
    Vue.component(Pin.name, Pin)
    Vue.component(Progress.name, Progress)
    Vue.component(Tag.name, Tag)
    Vue.component(Dot.name, Dot)
    Vue.component(Img.name, Img)
    Vue.component(Bread.name, Bread)
    Vue.component(Switch.name, Switch)
    Vue.component(Radio.name, Radio)
    Vue.component(Checkbox.name, Checkbox)
    Vue.component(Navbar.name, Navbar)
}

export default {
    install,
    $bar
}