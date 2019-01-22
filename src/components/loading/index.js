import Vue from 'vue';
import Loading from './src/loading'
import Bar from './src/bar'

// loading bar
let barInstance;
function getInstance() {
    if (!barInstance) {
        const constructor = Vue.extend(Bar);
        barInstance = new constructor({
            el: document.createElement('div'),
        });
        document.body.appendChild(barInstance.$el);
    }
    return barInstance;
}

const $bar = {
    start:() =>  getInstance().start(),
    to: percent =>  getInstance().percent = percent,
    end:() =>  getInstance().end(),
    fail:() =>  getInstance().fail()
};

Vue.prototype.$bar = $bar

export { $bar };