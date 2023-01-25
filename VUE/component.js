Vue.component('user-profile', {
    props: {
        name: {
            type: String,
            default: 'William'
        },
        age: {
            type: [Number, String]
        },
    },
    template: '<span> {{name}} - {{age}} </span>'

})

var app = new Vue ({
    el: '#app',
    data: { 
        name: 'Carlos',
        age: '30'
    }
});