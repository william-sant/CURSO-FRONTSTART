
//v-if adiciona ou remove o lelemento no HTML de acordo com o resultado da função ou variavel que for passada.

//se for TRUE o elemento será adicionado, e FALSE removido.

var app = new Vue ({
    el: '#app',
    data: {
        show: false,
        title: 'Aula V-if - VUE', //titulo adicionado ao h1 no HTML
    },
    methods: {
        onShowClick() {
            this.show = !this.show; //toda vez que ha um click o show recebe o contrário do que ele é
        }
    }
});