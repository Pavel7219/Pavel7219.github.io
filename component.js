const BaseDropdownMenu = ('dropdown-menu',{
    props:{
        options:{
            type:Array,
        }
    },
    data:function () {
        return {
            visibleStatus: false,
            thebutton:"select foto"
            /*selectUrl:this.optionSelect*/
        }
    },
    methods:{
        changeMenuVisibility: function ( event ) {
            this.visibleStatus = !this.visibleStatus,
                this.visibleStatus1 = !this.visibleStatus1
        },
        selectOptionHandler: function ( event ) {
            /*this.visibleStatus = false*/
            this.$parent.$emit ( 'menuSelect', event.target.innerHTML.trim() )
        },
        exitImg: function () {
            this.$parent.$emit ( 'exitimg')
        }
    },
    template:`
    <div>
       <div class='left-dropdown-menu-button'  @click="changeMenuVisibility">{{thebutton}}</div>
       <div class="option-menu" v-if = "visibleStatus" >
           <div class="option-menu-drop" @mouseenter="selectOptionHandler" 
               v-for="item in options"
               :key="item" @mouseleave = "exitImg"
            >
            {{item}}</div>
       </div>
       
    </div>
    `
})
const showImg = ( 'show-img-items', {
    props:["optionSelect"],
    data:function () {
        return {
            visibleStatus1: true,
            optionSelect1:'optionSelect'
        }
    },
    methods: {
        changeMenuVisibility1: function (event) {
            this.visibleStatus1 = !this.visibleStatus1
        }
    },
    template: `
  
   
      <img class="show-img" v-if="visibleStatus1" >
    
  `
})
