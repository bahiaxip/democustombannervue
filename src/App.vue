<template>
  <div id="app">
    <div class="modal_global" :class="{show:showMenu}" >
      <div class="box_global">
        <ul>
          <router-link to="/">
            <li>Demo</li>  
          </router-link>
          <router-link :to="{name:'mini'}">
            <li>Mini</li>
          </router-link>

          <router-link :to="{name:'vertical'}">
            <li>Vertical</li>
          </router-link>
          <router-link :to="{name:'flex'}">
            <li>Flex</li>
          </router-link>
          <router-link :to="{name:'docs'}">
            <li>Documentación</li>
          </router-link>
        </ul>
      </div>
      <div class="box_global2" @click="menu" style="cursor:pointer"></div>
    </div>
      <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/>
    <demobanner></demobanner> -->
    <HomeHeader @menu="menu" :switchMenu="showMenu"></HomeHeader>
    <Footer></Footer>
  </div>
    
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import HomeHeader from './components/HomeHeader.vue';
import Footer from './components/CFooter.vue';
//Vue.use(CustomBannerVue)

export default {
  name: 'App',
  components: {
    HomeHeader,
    Footer

  },
  watch: {
    //solo pasa por aquí si cambia de ruta, es decir, pulsamos un enlace a otro componente
    '$route'(){
      //if(this.actualRoute != this.$route.name){        
        this.menu(false);
      //}
      this.actualRoute = this.$route.name;
    }
  },
  mounted(){
    // establecemos la ruta por primera vez
    this.actualRoute = this.$route.name;
  },
  data() {
    return {
      actualRoute:null,
      showMenu:false,
    }
  },
  methods:{
    menu(param=null){
      console.log("param: ",param)
      if(param==false){
        console.log("es false");
        this.showMenu = false;
        return false;
      }
      console.log("ha pasado del false")
      if(this.showMenu)
        this.showMenu = false;
      else
        this.showMenu = true;
    }
  }
}
</script>

<style>
* {
  margin:0;
}
body {
  background-color:#F3F3F3;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
  min-height: 100vh;
  display:flex;
  flex-flow:column;
  justify-content:space-between;
}
.modal_global{
  display:flex;
  position:absolute;
  height:100%;
  opacity:0;
  transition:all .5s linear;
  visibility:hidden;
  width:100%;
  z-index:1;
}

.modal_global.show{
  opacity:1;
  visibility:visible;
}
.modal_global .box_global{
  background-color:rgba(0,0,0,.7);  
  height:100%;
  width:50%;
}
.modal_global .box_global2{
  width:50%;
}
.modal_global ul{

  list-style:none;
  padding:5px 0;
}
.modal_global ul li{
  background-color:rgba(54,91,199,1);
  border:rgba(0,0,255,1) 1px solid;
  color:white;
  font-family:Comfortaa;
  font-size:18px;
  padding:15px;
  transition:background .2s linear,color .1s linear;
}
.modal_global ul li:active{
  background-color:rgba(0,0,255,1);
  color:#FFF00F;
}
.dflex{
  display:flex;
}
section{

    margin: 20px auto;
    text-align:left;
  }
  section h3, section p{
    margin:10px auto;
  }
  .bold{
    font-weight:bold;
  }
article{
  padding: 5px 0;
}

header{
  align-items:center;
  background-color:#151515;
  color:white;
  display:flex;
  height:60px;
  width:100%;
  justify-content:space-between;

  
}
header .image{
  display:flex;
  height:100%;
  width:15%;
}
header .image{
  
}
header .image.left img{
  width: 32px;
  height:32px;
}
header .title{
  width:70%;
  font-family:Comfortaa;
}
header .image.right {
  display:flex;
  justify-content:center;
}
header .image.right .menu_hidden{
  display:none;
}
header .image .home_menu{
  border:#595959 1px solid;
  border-radius:50%;
  height:40px;
  transition:all .3s linear;
  width:40px;
}
header .image .home_menu:hover{
  border:#999999 1px solid;

}
header .image .home_menu.show{
  transform:rotate(135deg)
}
.purple{
  color:#8d5fd3;
}
.yellow{
  color:#fff00f;
}
.pink{
  color:#ff5599;
}
.homeheader {
  /*display:flex;
  flex-flow:column wrap;
  justify-content:space-between;*/
  /*min-height:100vh;*/

}
.container{
    /*display:flex;
    justify-content:space-between;
    flex-flow:column;*/
    /*min-height:70vh;*/
}
.homeheader .div_nav{
  display:flex;
  justify-content: center;
  margin:20px auto
}
.homeheader a{
    color:white;
    margin:auto;
    padding:10px 20px;
}
.homeheader a:hover {
  color:#F3F3F3;
}
.homeheader ul.nav{
  z-index:2;
  

  /*background:rgba(94,66,167,.8);*/
  /*background:rgba(250,202,5,.8);*/
  /*background:rgba(104,212,105,.8);*/
  /*background:rgba(140,140,140,1);*/
  border-radius: 10px;

  display:flex;
  font-family:YoutubeM;
  font-size:18px;
  justify-content: center;
  list-style:none;
  padding:0;
  width:auto 10px
}

.homeheader ul.nav a  {
  background-image: linear-gradient(180deg, rgba(54,91,199,1) 0%, rgba(54,91,199,0.8211659663865546) 50%, rgba(54,91,199,1) 100%);
  
  /*efecto con gradiente
  background-image: linear-gradient(180deg, rgba(0,0,255,1) 0%, rgba(54,91,199,0.8211659663865546) 25%, rgba(0,0,255,1) 40%,rgba(54,91,199,0.821) 50%,rgba(54,91,199,0.6) 75%, rgba(54,91,199,0.821) 100%);  
  background-size:auto 210%;
  background-position: 0 -100%;
  //después (en hover o el evento correspondiente) tan solo es necesario añadir:
  background-position:0 0
  */
  color:#FFF;
  display:flex;
  padding:10px 20px;
  transition:background .4s ease-in,color .1s ease-in;
}
.homeheader ul.nav a.left{
  border-bottom-left-radius:10px;
  border-top-left-radius:10px;
}
.homeheader ul.nav a.right{
  border-bottom-right-radius:10px;
  border-top-right-radius:10px;
}
.homeheader ul.nav a:hover{
  /* efecto hover con gradient
  background-position:0 0;
  */
  /*
  background-image: linear-gradient(180deg, rgba(0,0,255,1) 0%, rgba(54,91,199,0.8211659663865546) 50%, rgba(0,0,255,1) 100%);
  */
  background-color:rgba(0,0,255,1);
  
  /*background:rgba(69,0,155,.9);*/
  /*background:rgba(250,172,24,.8);*/
  /*background:rgba(51,187,61,1);*/
  /*background:rgba(65,65,65,1);*/
  cursor:pointer;
}

.homeheader ul.nav a:active{
  /*color:#FFCA05;*/
  color:#FFF00F;
}
.box{
  opacity:0;
  transform:translateX(-100%);
  transition: all 1s ease-out;
}

.box_active{
  transform:translateX(0);
  opacity:1;  
}
.boxdemo{
  opacity:0;
  transform:translateX(-100%);
  transition: all 1s ease-out;
}
.boxdemo_active{
  transform:translateX(0);
  opacity:1; 
}
.boxvertical{
  opacity:0;
  transform:translateY(-100%);
  transition: all 1s ease-out;
}
.boxvertical_active{
  transform:translateY(0);
  opacity:1; 
}
.boxflex{
  opacity:0;
  transform:scale(0);
  transition: all 1s ease-out;
}
.boxflex_active{
  transform:scale(1);
  opacity:1; 
}
.boxmini{
  opacity:0;
  transform:rotate(180deg);
  transition: all 1s ease-out;
}
.boxmini_active{
  transform:rotate(0);
  opacity:1; 
}
.boxdocs{
  opacity:0;
  
  transition: all 1.5s ease-in-out; 
}
.boxdocs_active {
  
  opacity:1;  
}
.box2{
  opacity:0;
  visibility: hidden;
  transform:translateY(-100%);
  transition: transform 1s linear, opacity 1.2s linear 0.2s;
}
.box2_active{
  transform:translateY(0);    
  opacity:1;
  visibility:visible;
}

.docs,.demo{
    width:70%;
    margin:auto;
    padding: 0 10px;
}
.docs .list_options h3{
  font-size:17px;
}
.docs .list_options{
  list-style:none;
  align-items:center;
}
.docs .list_options span{
  align-items:center;
  color:#18D26E;
  display:flex;
  font-size:12px;
  margin:auto 5px;
  vertical-align: middle;
}
.docs .list_options.detail span{
    align-items:center;
    display:flex;    
    font-size:20px;
    margin:auto 5px;
    vertical-align: middle;
}
.docs .list_options.detail.subdetail{
    line-height:30px;
}
.docs .list_options.detail.subdetail span{
  font-size:16px;
}


.pre{
  background-color: black;
  color:white;
  overflow:auto;
  padding:0 1em;
  width:auto;

}
.code{
  margin:auto;
  width:100%;
  /*white-space:pre-wrap;*/
  line-height:150%;
}

.lgreen{
  color:lightgreen  
}
.tag_banner{
  color:#ffe666
}
.orange{
  color: #e79100;
}
.prop{
  color:#00a0ff;
}
.subprop{
  color:#f3b1ff;
}
.script{
  color:#ff4066
}
@media screen and (max-width:600px) {
    .homeheader .div_nav{
      display:none;
    }
    header .image.right .menu_hidden{
      display:block;
    }
}
@media screen and (max-width:500px) {
    header{
      height:80px;
    }
    header .image,header .title{
      width:auto;
    }
    
    /*
    header .image.left {
      width:15%;
    }
    header .title {
      margin:auto 15px;
      width:85%;
    }
    header .image.right{
      display:none;
      
    }*/
}


</style>
