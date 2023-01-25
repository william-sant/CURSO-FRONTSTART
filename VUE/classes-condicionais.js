var app = new Vue({
    el: "#app",
    data: {
        offersList: [
            {
                img: "https://upload.wikimedia.org/wikipedia/commons/0/00/2018_Ford_KA%2B_Zetec_1.0_Front.jpg",
                title: 'Ford Ka',
                price: '37000',
                description: 'Carro novo, 0 km para retirada em SSA',
                bonus: false,
                special: false,
                color: 'red',
            },
            {
                img: "https://img-ik.cars.co.za/images/2016/7/FordFocusST/tr:n-news_1200x/FocusST2.jpg",
                title: 'Ford Focus',
                price: '54000',
                description: 'Carro semi-novo 20 km para retirada em SF',
                bonus: true,
                special: true,
                color: '#024c81'
            }
        ]
    },
});
