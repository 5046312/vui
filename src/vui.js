import './styles/base.scss';
import { Button } from './components/button'

const install = Vue => {
    Vue.component(Button.name, Button)
}

export default {
    install
}