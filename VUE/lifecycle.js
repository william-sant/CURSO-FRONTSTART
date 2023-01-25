var app = new Vue ({
    el: '#app',
    data: {
        age: 0
    },
    beforeCreate() {
        console.log('before creat')
    },
    created() {
        console.log('created')
        this.age = 26;
    }
});