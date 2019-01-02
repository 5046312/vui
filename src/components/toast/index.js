import Vue from 'vue';
import Toast from './src/toast'

let instance;
function getInstance(data) {
    if (!instance) {
        const constructor = Vue.extend(Toast);
        instance = new constructor({
            el: document.createElement('div'),
        });
    }
    instance.msg = data.msg
    instance.duration = data.duration
    return instance;
}

Vue.prototype.$toast.prototype.close = () => {
    const el = instance.$el;
    el.parentNode && el.parentNode.removeChild(el);
}

Vue.prototype.$toast = (msg = 'toast', duration = '2') => {
    getInstance({msg, duration})
    document.body.appendChild(instance.$el);
    const timer = setTimeout(() => {
        clearTimeout(timer);
        instance.close();
    }, instance.duration + 100);
};