import YaButton from  './YaButton/Index.vue'

const YakiUI = {
    install :  (Vue)=>{
        Vue.component(YaButton.name,YaButton)
    }
}

export  default  YakiUI