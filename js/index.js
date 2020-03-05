const app = new Vue({
    el: "#app",
    data: {
        menu: false,
        screen: 0,
        system: 0,
        dark: false
    },
    mounted(){
        setInterval(() => {
            this.screen = screen.width;
            this.verificarTela()
        }, 500);
    },
    methods:{
        darkMode(){
            if(this.dark){
                this.dark = false
            } else{
                this.dark = true
            }
        },
        openMenu(){
            if(this.menu){
                this.menu = false
            } else{
                this.menu = true
            }
        },
        verificarTela(){
            if(this.screen < 800){
                this.system = 1
            } else{
                this.system = 0
            }
        }
    }
})