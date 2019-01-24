import Vue from 'vue';
import Loading from './src/loading'
import Bar from './src/bar'

// loading bar
class Bar {
    instance = null
    static getInstance(){
        if (!this.instance) {
            const constructor = Vue.extend(Bar);
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
Vue.prototype.$bar = Bar.getInstance()
export { '$bar': Bar.getInstance() };