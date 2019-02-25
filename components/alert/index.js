import Vue from 'vue';
import Alert from './src/alert'
const AlertConstructor = Vue.extend(Alert);
const instance = new AlertConstructor({
    el: document.createElement('div')
});
AlertConstructor.prototype.close = () => {
    const el = instance.$el;
    el.parentNode && el.parentNode.removeChild(el);
}

Vue.prototype.$alert = (msg = 'toast', duration = '2') => {
    instance.msg = msg;
    instance.duration = duration;
    document.body.appendChild(instance.$el);
    const timer = setTimeout(() => {
        clearTimeout(timer);
        instance.close();
    }, instance.duration + 100);
};