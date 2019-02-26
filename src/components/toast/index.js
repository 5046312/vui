import Vue from 'vue';
import Toast from './src/toast'

let instance;
let timer;
function getInstance() {
    if (!instance) {
        const constructor = Vue.extend(Toast);
        instance = new constructor({
            el: document.createElement('div'),
        });
        document.body.appendChild(instance.$el);
    }
    return instance;
}

Vue.prototype.$toast = {
    show(msg, duration = 2000) {
        getInstance().msg = msg
        getInstance().show = true
        clearTimeout(timer)
        timer = setTimeout(() => this.hide(), duration)
    },
    hide() {
        getInstance().show = false
    }
}