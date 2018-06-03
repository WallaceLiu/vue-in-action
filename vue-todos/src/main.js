import Vue from 'vue'
import App from './App.vue'

new Vue({
    el: '#app',
    render: h => h(App) // 与react的 render函数类似，将控件App呈现到id为app的标记内
})
