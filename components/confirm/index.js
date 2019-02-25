import Vue from 'vue';
import Confirm from './src/confirm'
const ConfirmConstructor = Vue.extend(Confirm);
const instance = new ConfirmConstructor({
    el: document.createElement('div')
});
ConfirmConstructor.prototype.close = () => {
    const el = instance.$el;
    el.parentNode && el.parentNode.removeChild(el);
}

Vue.prototype.$confirm = (msg = 'toast', duration = '2') => {
    instance.msg = msg;
    instance.duration = duration;
    document.body.appendChild(instance.$el);
    const timer = setTimeout(() => {
        clearTimeout(timer);
        instance.close();
    }, instance.duration + 100);
};