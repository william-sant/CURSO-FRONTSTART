
var app = new Vue ({
    el: '#app',
    data: {
        show: false
    },
    methods: {
        onShowClick() {
            this.show = !this.show; //toda vez que ha um click o show recebe o contrário do que ele é
        }
    }
});