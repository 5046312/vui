import Vue from 'vue';
import Loading from './src/loading'
const LoadingConstructor = Vue.extend(Loading);
const instance = new LoadingConstructor({
    el: document.createElement('div')
});
LoadingConstructor.prototype.close = () => {
    const el = instance.$el;
    el.parentNode && el.parentNode.removeChild(el);
}

Vue.prototype.$loading = (msg = 'loading', duration = '2') => {
    instance.msg = msg;
    instance.duration = duration;
    document.body.appendChild(instance.$el);
    const timer = setTimeout(() => {
        clearTimeout(timer);
        instance.close();
    }, instance.duration + 100);
};