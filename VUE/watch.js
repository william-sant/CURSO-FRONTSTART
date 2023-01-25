//observa e execulta uma ação apenas quando ouver uma alteração

var app = new Vue({
    el: '#app',
    data: {
        name: '',
        completeName: ''
    },
    methods:{
        fillCompletName() {
            this.completeName = this.name + ' santana';
        }
    },
    watch: { //observando nome e execulta a função quando nome for alterado
        name(value, ouldValue) {
            console.log('mudou', value, ouldValue);
            this.fillCompletName();
        }
    }
});

