import './styles/base.scss';
import { Icon } from './components/icon'
import { Button } from './components/button'
import { Layout } from './components/layout'
import { Code } from './components/code'
import { CodePanel } from './components/codepanel'
import Transition from './components/transition'
import Mask from './components/mask'
import Toast from './components/toast'
import Alert from './components/alert'
import Loading from './components/loading'
import Confirm from './components/confirm'
import Modal from './components/modal'


const install = Vue => {
    Vue.component(Icon.name, Icon)
    Vue.component(Button.name, Button)
    Vue.component(Layout.name, Layout)
    Vue.component(Code.name, Code)
    Vue.component(CodePanel.name, CodePanel)
    Vue.component(Transition.name, Transition)
}

export default {
    install
}