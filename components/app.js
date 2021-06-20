Vue.createApp({
    // data() {
    //     return {

    //     }
    // }
    data: () => ({
        myHtml: '<h1>Vue 3 App</h1>',
        title: 'Я заголовок!',
        person: {
            firstName: 'Alexander',
            lastName: 'Troyan',
            age: 23
        },
        items: [1, 2, 3, 4, 5, 6, 7]
    }),
    methods: {
        addItem() {
            this.items.unshift(this.$refs.myInput.value)
            this.$refs.myInput.value = ''
            //console.log(this.$refs.myInput.value)
        }
    },
    computed: {
        evenItems() {
            return this.items.filter(i => i %2 === 0)
        }
    }
}
).mount('#app')