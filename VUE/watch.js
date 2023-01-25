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
    watch: {
        name(value, ouldValue) {
            console.log('mudou', value, ouldValue);
            this.fillCompletName();
        }
    }
});

