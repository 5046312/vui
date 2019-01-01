import Vue from 'vue';
import Toast from './src/toast'
const ToastConstructor = Vue.extend(Toast);
const instance = new ToastConstructor({
    el: document.createElement('div')
});
ToastConstructor.prototype.close = () => {
    const el = instance.$el;
    el.parentNode && el.parentNode.removeChild(el);
}

Vue.prototype.$toast = (msg = 'toast', duration = '2') => {
    instance.msg = msg;
    instance.duration = duration;
    document.body.appendChild(instance.$el);
    const timer = setTimeout(() => {
        clearTimeout(timer);
        instance.close();
    }, instance.timeout + 100);
};