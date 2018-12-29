import './styles/base.scss';
import { Icon } from './components/icon'
import { Button } from './components/button'
import { Layout } from './components/layout'

const install = Vue => {
    Vue.component(Icon.name, Icon)
    Vue.component(Button.name, Button)
    Vue.component(Layout.name, Icon)
}

export default {
    install
}