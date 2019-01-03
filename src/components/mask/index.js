import Vue from 'vue';
import Mask from './src/mask'

let instance;
function getInstance() {
    if (!instance) {
        const constructor = Vue.extend(Mask);
        instance = new constructor({
            el: document.createElement('div'),
        });
        document.body.appendChild(instance.$el);
    }
    return instance;
}

Vue.prototype.$mask = {
    show:() =>  getInstance().show = true,
    close:() =>  getInstance().show = false,
};

