import Vue from 'vue';
import Mask from './src/mask'
const MaskConstructor = Vue.extend(Mask);

const instance = new MaskConstructor({
    el: document.createElement('div')
});
MaskConstructor.prototype.close = () => {
    instance.$el.parentNode && instance.$el.parentNode.removeChild(instance.$el);
}
Vue.prototype.$mask = (opacity = 0.6, zindex = 1000) => {
    instance.opacity = opacity
    instance.zindex = zindex
    document.body.appendChild(instance.$el);
};