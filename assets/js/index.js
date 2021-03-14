const vm = new Vue({
    el: '#app',
    data: {
        navList: [],
        navHide: true,
        navActiveIndex : '',
    },

    methods: {
        handleClick() {
            this.navHide = !this.navHide;
        },
        handleNavCliak(index) {
            this.navActiveIndex = index
        }
    },
    created() {
        axios.get('https://developer.duyiedu.com/vue/bz/nav').then(res => {
            console.log(res);
            if (res.status === 200) {
                this.navList = res.data.data;
            }
        })
    },
})