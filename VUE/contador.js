
var app = new Vue({
    el: '#app', //o elemento que vai renderizar o vue é o elemento com o id APP
    data: { //onde se declara as variáves dos componentes 
        counter: 0
    },
    methods: {
        increase() { 
            this.counter++;
        },
        decrease() {
            this.counter--;
        }
    }
});