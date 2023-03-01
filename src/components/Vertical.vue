<template>
	<div class="container">
		<div class="boxvertical" :class="{boxvertical_active : activeBox}">
			<div style="width:100%">
				<custom-banner-vue :options="options"></custom-banner-vue>	
			</div>
			
			<button class="button ccssb ccssb_fucsia" :class="{cambio:sectionActive}" @click="showSection">
				<span class="button_text">Ver Configuración</span>
				<span class="button_text">Ocultar Configuración</span>
			</button>
			<div class="demo">
				<section ref="section_flex">
					<pre class="pre flex" :class="{active:sectionActive}">
						<code class="code flex" :class="{active:sectionActive}">
<span class="lgreen" >&lt;template&gt;</span>
    &lt;div&gt;
        <span class="tag_banner" >&lt;custom-banner-vue&gt;&lt;/custom-banner-vue&gt;</span>
    &lt;/div&gt;
<span class="lgreen">&lt;/template&gt;</span>
<span class="script">&lt;script&gt;</span>
    export default {
        <span class="prop">name:</span>'miComponente',
        data() {
            return {
                <span class="orange">options:</span>{
                    <span class="prop">orientation:</span>'vertical',
                    <span class="prop">size:</span>'min',
                    <span class="prop">images:</span>[
                        [

                        ],
                        [
                            "img/pizza-maker.jpg",
                            "img/datafono3.jpg",	
                        ],
                        [
                            "img/pizza.jpg",
                            "img/hamburguesa.jpg",
                            "img/lasaña.jpg"
                        ]
                    ],
                    <span class="prop">texts:</span>[
                        [						
                            "Horno de piedra",
                            "Servicio a domicilio",
                            "Pago con tarjeta",
                        ],
                        [],
                        []
                    ],
                    <span class="prop">effects:</span>{
                        <span class="subprop">1:</span>{
                            <span class="prop">modeText:</span>true,
                            <span class="prop">fontSizeStyle:</span>"30px"
                        },
                        <span class="subprop">2:</span>{
                            <span class="prop">left:</span>true
                        },
                        <span class="subprop">3:</span>{}
                    },
                    <span class="prop">order:</span>{
                        <span class="subprop">0:</span>[3],
                        <span class="subprop">1:</span>[1,3],
                        <span class="subprop">2:</span>[1,2],
                        <span class="subprop">3:</span>[3],
                        <span class="subprop">4:</span>[1,2]
                    }
                }
            }
        }
    }
<span class="script">&lt;/script&gt;</span>
						</code>
					</pre>
				</section>
			</div>
			
		</div>
		<!-- <Footer></Footer> -->
	</div>
	
</template>
<script>
	import MethodsMixin from '../mixins/methodsMixin.js';
	//import {CustomBannerVue} from 'custom-banner-vue';
	//import Footer from "./CFooter";
	export default{
		name:'VerticalCBV',
		components:{
			//Footer
			//CustomBannerVue
		},
		mixins:[MethodsMixin],
		mounted(){
			setTimeout(()=>{
				this.activeBox = true;
				//this.showBox2();	
			},100)
		},
		data(){
			return {
				sectionActive:false,
				activeBox:false,
				options:{
					orientation:"vertical",
					size:'min',
					images:[
						[

						],
						[
							"img/pizza-maker.jpg",
							"img/datafono3.jpg",
							//"https://cdn.pixabay.com/photo/2017/09/18/17/15/credit-2762537_150.jpg"
							
						],
						[
							"img/pizza.jpg",
							"img/hamburguesa.jpg",
							"img/lasaña.jpg"

						]
					],
					texts:[
						[						
							"Horno de piedra",
							"Servicio a domicilio",
							"Pago con tarjeta",

						],
						[],
						[]
					],
					effects:{
						1:{
							modeText:true,
							fontSizeStyle:"30px"
						},
						2:{
							left:true
						},
						3:{

						}
					},
					order:{
						0:[3],
						1:[1,3],
						2:[1,2],
						3:[3],
						4:[1,2]
					}
						
				}
			}
		},
		/*methods: {
			showSection(){
				if(!this.sectionActive){
					this.sectionActive = true;
					this.textButton = "Ocultar configuración";
				}else{
					this.sectionActive = false;
					this.textButton = "Ver configuración";
				}
				let sectionFlex = this.$refs.section_flex;
				console.log(sectionFlex)
			}
		}*/
	}
</script>