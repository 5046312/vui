import Vue from 'vue';
import Loading from './loading'
import LoadingBar from './bar'

// loading bar
class Bar {
    constructor() {
        this.instance = null
    }
    static getInstance() {
        if (!this.instance) {
            const constructor = Vue.extend(LoadingBar);
            this.instance = new constructor({
                el: document.createElement('div'),
            });
            document.body.appendChild(this.instance.$el);
        }
        return this.instance;
    }
    start() { Bar.getInstance().start() }
    to(percent) { Bar.getInstance().percent = percent }
    end() { Bar.getInstance().end() }
    fail() { Bar.getInstance().fail() }
}
const $bar = new Bar()
Vue.prototype.$bar = $bar
export { $bar, Loading };