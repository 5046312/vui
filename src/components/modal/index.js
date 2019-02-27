import Vue from 'vue';
import Modal from './modal'
const ModalConstructor = Vue.extend(Modal);
const instance = new ModalConstructor({
    el: document.createElement('div')
});
ModalConstructor.prototype.close = () => {
    const el = instance.$el;
    el.parentNode && el.parentNode.removeChild(el);
}
Vue.prototype.$modal = (msg = 'modal', duration = '2') => {
    instance.msg = msg;
    instance.duration = duration;
    document.body.appendChild(instance.$el);
    const timer = setTimeout(() => {
        clearTimeout(timer);
        instance.close();
    }, instance.duration + 100);
};