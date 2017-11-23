
var vm = new Vue({
    el:'#app',
    data:{
        mainMenuOptions:[
            "cat",
            "dog",
            "frog"
        ],
        optionsText:foto,
        optionSelect:''
    },
    components:{
        'dropdown-menu':BaseDropdownMenu,
        'show-img-items':showImg
    }
})
vm.$on ( 'menuSelect', function ( val ) {
    this.optionSelect = this.optionsText [ val ]
})
vm.$on ( 'exitimg', function ( ) {
    this.optionSelect = "";
})


/*
Vue.component ( 'picture-img', {
    props: ["arr"],
    template: `<div>
                <div v-for="item in arr">
                     <img :src="item">
                </div>
             </div>`
})
var sample = new Vue ({
    el: '#app',
    data: {
        selected:0,
        pictures: ['http://mirpozitiva.ru/uploads/posts/2016-09/1474011186_02.jpg','http://mirpozitiva.ru/uploads/posts/2016-09/1474011164_27.jpg','http://mirpozitiva.ru/uploads/posts/2016-09/1474011210_15.jpg']
    }
})*/
