
var app = new Vue ({
    el: '#app',
    data: {
        age: 17,
        list: [
            {name: 'Rodinalva', age: '25'},
            {name: 'Cabeto', age: '18'},
            {name: 'Marivaldo', age: '67'}
        ]
    },
    created() {
        this.changeAge (25)
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
    computed: {
        isUnderAge() {
            return this.age < 18;
        },
        isOld() {
            return this.age > 60;
        },
        adultUsers() {
            return this.list.filter(el => el.age >18);
        }
    }
});