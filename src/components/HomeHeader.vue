<template>
	<div  >
		<!-- <div :class="{ shake: disabled }"> -->
		<div class="homeheader">
			<div>
			<header>
					<div class="image left">
						<router-link to="/">
							<img src="icon/custombannervue_logo.png" alt="" >
						</router-link>
					</div>
					<div class="title">
							<h1>								
								<span class="purple">Custom </span>
								<span class="yellow">Banner </span>
								<span class="pink">Vue</span>
							</h1>
							<!-- <h1 class="mini">
								<span class="purple">C</span>
								<span class="yellow">B</span>
								<span class="pink">V</span>
								
							</h1> -->
					</div>
					<div class="image right">
						<a href="javascript:void(0)" class="menu_hidden" @click="showMenu">
							<img class="home_menu" :class="{show:switchMenu}" src="icon/home_menu.svg" alt="" >
						</a>
					</div>

				
			</header>
			<div class="div_nav" >
				<ul class="nav">
					<router-link :to="{name:'demo'}" class="left demo" :class="linkActive=='demo' ? 'active':''">
							<li >
								Demo
								<!-- <span v-if="disabled">This features is disabled</span> -->
							</li>
					</router-link>
					<router-link :to="{name:'mini'}" class="mini" :class="linkActive=='mini' ? 'active':''">
							<li>
								Mini
							</li>
					</router-link>
					
					<router-link :to="{name:'vertical'}" class="vertical" :class="linkActive=='vertical' ? 'active':''">
							<li>
								Vertical
							</li>
					</router-link>
					
					<router-link :to="{name:'flex'}" class="flex" :class="linkActive=='flex' ? 'active':''">
							<li>
								Flex
							</li>
					</router-link>
					
					<router-link :to="{name:'docs'}" class="right docs" :class="linkActive=='docs' ? 'active':''">
							<li>
								Documentación
							</li>
					</router-link>
				</ul>
				<!-- <router-link :to="{name:'banner'}">
					<button class="ccssb ccssb_verdeB">Demo</button>-->			
									<!-- <span v-if="disabled">This features is disabled</span> -->
				<!--</router-link>
				<router-link :to="{name:'banner2'}">
					<button class="ccssb ccssb_azulB">Mini</button>					
				</router-link>
				<router-link :to="{name:'banner3'}">
					<button class="ccssb ccssb_naranja">Vertical</button>
				</router-link>
				<router-link :to="{name:'docs'}">
					<button class="ccssb ccssb_lila">Documentación</button>
				</router-link> -->
			</div><router-view ></router-view>
			</div>
			<!-- <Footer></Footer> -->
			<!-- <MyFooter :activeFooter = "activeFooter" ></MyFooter> -->

		</div>
	</div>
</template>
<script>
	//import footer from './CFooter';
	import servicesMixin from '../mixins/servicesMixin';
	export default{
		name:'HomeHeader',
		mixins:[servicesMixin],
		props:["switchMenu"],
		components:{
			//'MyFooter':footer
			//Footer:footer
		},
		watch:{		
		'$route'(){			
			this.setClassLink(this.$route.name);

		}
	},
		mounted(){			
			this.setClassLink(this.$route.name);

		},
		destroyed(){
			//console.log("destruido")
		},
		data(){
			return {
				menuHidden:false,
				linkActive:false,
				disabled:false,
				stateFooter:false,
				//activeFooter:false,
				
			}
		},
		
		methods:{
			warnDisabled() {
				this.disabled = true
				setTimeout(() => {
					this.disabled = false
				}, 1500)
			},
			/*footer(data){
				if(data){
						this.activeFooter = true;
				}else{
						this.activeFooter = false;
				}
			}*/
			setClassLink(routeName){
				switch(routeName){
					case 'demo':
						this.linkActive='demo';
						break;
					case 'mini':
						this.linkActive='mini';
						break;
					case 'vertical':
						this.linkActive='vertical';
						break;
					case 'flex':
						this.linkActive='flex';
						break;
					case 'docs':
						this.linkActive='docs';
						break;
				}
			},
			showMenu(){
				console.log("pulsado: ",this.switchMenu)
				this.$emit('menu');
				
			}

		}
	}
</script>
<style>

/*efecto deslizar y mostrar*/

	.shake {
  /*animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;*/
  /*animation: shake 3s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;*/
  animation: shake 1s ease-out both;
  transform: translate3d(0, 0, 0);
}
/*efecto vibración*/
/*@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }  
}*/
@keyframes shake {
	0% {
		transform: translate3d(-100%, -250px, 0px);
	}
	/*10% ,*/
	/*30%{
		transform: translate3d(0, 100px, 0);		
	}
	40%{
		transform: translate3d(0, -50px, 0);
	}
	
  50% {
    transform: translate3d(0, 50px, 0);
  }
  60% {
    transform: translate3d(0, -20px, 0);
  }*/
  

  /*20%,*/
  /*70% {
    transform: translate3d(0px, 0px, 0);
  }
  80% {
    transform: translate3d(-20px, -20px, 0);
  }*/
  /*70% {
    transform: translate3d(0px, 0px, 0);
  }
  80% {
    transform: translate3d(-20px, -20px, 0);
  }*/

  /*30%,
  50%,*/
  

  
  /*65% {
    transform: translate3d(0, 45px, 0);
  } */ 
}

a{
	text-decoration:none;
}
/* botones para revisar con customcssbutton*/
/*.ccssb
{
font-family:'Comfortaa';
//padding:2px 8px 4px 8px;
padding:5px 12px;
display:flex;
justify-content:center;
border:none;border-radius:5px;
font-weight:bold;font-size:15px;
min-width:80px;height:30px;
transition:all 0.1s linear;
position:relative;bottom:0;
outline:none;
overflow:hidden;
display:inline-block;
text-align:center
}
.ccssb:active
{
bottom:-3px;
}
.ccssb_lila
{
box-shadow:0 3px 0 #ff0066, 2px 2px 2px #ffaacc inset,
-2px -2px 2px #ffaacc inset;
background-color:#ff5599;
color:#FFF;
cursor:pointer}
.ccssb_lila:active
{
box-shadow:0 0 0 #ff0066, 1px 1px 2px #ff0066 inset,-1px -1px 2px #ff0066 inset;
}

.ccssb_verdeB
{
box-shadow:0 3px 0 #5a2ca0, 2px 2px 2px #c6afe9 inset,
-2px -2px 2px #c6afe9 inset;
background-color:#aa87de;
color:#FFF;
cursor:pointer}
.ccssb_verdeB:active
{
box-shadow:0 0 0 #5a2ca0, 1px 1px 2px #5a2ca0 inset,-1px -1px 2px #5a2ca0 inset;
}

.ccssb_azulB
{
box-shadow:0 3px 0 #1454c3, 2px 2px 2px #00FFFF inset,
-2px -2px 2px #00FFFF inset;
background-color:#1E90FF;
color:#FFF;
cursor:pointer}
.ccssb_azulB:active
{
box-shadow:0 0 0 #1454c3, 1px 1px 2px #1454c3 inset,-1px -1px 2px #1454c3 inset;
}

.ccssb_naranja
{
box-shadow:0 3px 0 #c31500, 2px 2px 2px #ffb400 inset,
-2px -2px 2px #ffb400 inset;
background-color:#ff5100;
color:#FFF;
cursor:pointer}
.ccssb_naranja:active
{
box-shadow:0 0 0 #c31500, 1px 1px 2px #c31500 inset,-1px -1px 2px #c31500 inset;
}*/
.homeheader .div_nav a.demo,
.homeheader .div_nav a.mini,
.homeheader .div_nav a.vertical,
.homeheader .div_nav a.flex, 
.homeheader .div_nav a.docs {
	transition:background 1.2s ease-out;

}


.homeheader .div_nav a.demo.active,
.homeheader .div_nav a.mini.active,
.homeheader .div_nav a.vertical.active,
.homeheader .div_nav a.flex.active, 
.homeheader .div_nav a.docs.active{
	background:rgba(0,0,255,1);

}
@media screen and (max-width:500px) {
	.homeheader header .title h1{
		font-size:25px;
	}
}
</style>