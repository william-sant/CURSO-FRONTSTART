
var app = new Vue ({
    el: '#app',
    data: {
        age: 17,
        list: [
            {name: 'Rodinalva', age: '15'},
            {name: 'Cabeto', age: '19'},
            {name: 'Marivaldo', age: '67'}
        ]
    },
    created() {
        this.changeAge (67)
    },
    methods: {
        changeAge(value) {
            this.age = value;

            if(this.isUnderage) {
                console.log('tem menos de 18');
                return;
            }

            if(this.isOld) {
                console.log('tem mais de 60');
                return;
            }

            console.log('É idade ok');
        },
    },
    computed: { //só retorna quando ouver mudança na variavel
        isUnderAge() {
            return this.age < 18;
        },
        isOld() {
            return this.age > 60;
        },
        adultUsers() {
            return this.list.filter(el => el.age > 18);
        }
    }
});