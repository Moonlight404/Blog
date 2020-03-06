const app = new Vue({
    el: "#app",
    data: {
        menu: false,
        screen: 0,
        system: 0,
        dark: "0",
        galeria: [
            "https://www.urbanarts.com.br/imagens/produtos/156199/0/Ampliada/flor-sakura.jpg",
            "https://http2.mlstatic.com/10-sementes-de-lindas-flores-sakura-flor-de-cerejeira-japo-D_NQ_NP_642015-MLB25125600630_102016-F.jpg",
            "https://2.bp.blogspot.com/-j11PpBudj44/W1NQZAMfqRI/AAAAAAAAIsU/NhJGE9G6CqUAHEbjQjZ2evWgg2o1I8N8wCLcBGAs/s1600/cerejeiras_01.jpg",
            "https://www.anotaai.blog.br/wp-content/uploads/Flor-de-cerejeira-1.jpg"
        ]
    },
    mounted(){
        setInterval(() => {
            this.screen = screen.width;
            this.verificarTela()
        }, 500);
        this.dark = localStorage.getItem("dark")
    },
    methods:{
        darkMode(){
            if(this.dark === "0"){
                this.dark = "1"
            } else{
                this.dark = "0"
            }
            localStorage.setItem("dark", this.dark)
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