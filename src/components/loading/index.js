import Vue from 'vue';
import Loading from './src/loading'

let instance;
function getInstance(data) {
    if (!instance) {
        const constructor = Vue.extend(Loading);
        instance = new constructor({
            el: document.createElement('div'),
        });
        document.body.appendChild(instance.$el);
    }
    return instance;
}

Vue.prototype.$loading = () => {
    
};