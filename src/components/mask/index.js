import Vue from 'vue';
import Mask from './src/mask'

let instance;
function getInstance(callback) {
    if (!instance) {
        const constructor = Vue.extend(Mask);
        instance = new constructor({
            el: document.createElement('div'),
        });
        document.body.appendChild(instance.$el);
    }
    instance.callback = callback
    return instance;
}

Vue.prototype.$mask = {
    show(callback = null) { getInstance(callback).show = true },
    hide() { getInstance().show = false }
};

