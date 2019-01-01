import './styles/base.scss';
import { Icon } from './components/icon'
import { Button } from './components/button'
import { Layout } from './components/layout'
import { Code } from './components/code'
import { CodePanel } from './components/codepanel'
import Toast from './components/toast'
import Mask from './components/mask'

const install = Vue => {
    Vue.component(Icon.name, Icon)
    Vue.component(Button.name, Button)
    Vue.component(Layout.name, Layout)
    Vue.component(Code.name, Code)
    Vue.component(CodePanel.name, CodePanel)
}

export default {
    install
}