import Vue from 'vue';
import Toast from './src/toast'

let instance;
let timer;
function getInstance(data) {
    if (!instance) {
        const constructor = Vue.extend(Toast);
        instance = new constructor({
            el: document.createElement('div'),
        });
        document.body.appendChild(instance.$el);
    }
    instance.msg = data.msg
    instance.duration = data.duration
    console.log(instance)
    return instance;
}

Vue.prototype.$toast = function (msg = 'toast', duration = '2') {
    getInstance({msg, duration}).show()
    clearTimeout(timer)
    timer = setTimeout(() => {
        clearTimeout(timer);
        instance.hide()
    }, instance.duration + 100);
};