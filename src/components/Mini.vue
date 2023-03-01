<template>
	<div class="container">
		<div class="shake boxmini" :class="{boxmini_active : activeBox}">
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
        },

    }
<span class="script">&lt;/script&gt;</span>
						</code>
					</pre>
				</section>
			</div>				
		</div>
		
    </div>
</template>
<script>
	import MethodsMixin from '../mixins/methodsMixin.js';
	//import { CustomBannerVue } from 'custom-banner-vue';
	//import Footer from './CFooter';
	export default{
		name:'MiniCBV',
		components:{
			//CustomBannerVue
			//Footer
		},
		mixins:[MethodsMixin],
		mounted(){
			setTimeout(()=>{
				this.activeBox = true;
				//this.showBox2();


				
			},100)
		},
		
		data() {
			return {
				sectionActive:false,
				activeBox:false,
				options:{
					orientation:"horizontal",
					size:'min',
					//responsive:'false',
					//screen:'full',
					time:6,
					images:[
							[

							],
							[
								//playa gran canaria
								"https://images.unsplash.com/photo-1570460148084-3dfb1059b4fe?w=200",
								"https://images.pexels.com/photos/380169/pexels-photo-380169.jpeg?h=130",
								"https://cdn.pixabay.com/photo/2016/08/01/20/13/girl-1561989_150.jpg"
								//crucero
								/*"https://images.unsplash.com/photo-1599640842225-85d111c60e6b?w=200",
								"https://pixabay.com/get/g3d54679941a69db572a68388f4f0f049b7890e3893fbd2c9dfffcb0819042de66d8dcc4abb6105f1afc1d506bbe1b24a4c7b334ecd29e17fde40bed20dede2f4_640.jpg"*/
								
								
								
								//"img/pizza-maker.jpg",
								//"img/datafono3.jpg",
								
							],
							[
								"https://cdn.pixabay.com/photo/2016/11/22/16/04/dive-1849534_150.jpg",
								"https://cdn.pixabay.com/photo/2021/05/06/01/23/disney-6232121_150.jpg",
								"img/pizza.jpg",
								/*"https://pixabay.com/get/g62999c08f17a2bad7d5324c3b1866d9c2fa9d38f4e6e905b7ed1b85eeb5662fddd567a135038f52828a79f53916d4bf3e9f0c24326e9ddaec6e90da80e1e4a7f_640.jpg",
								"https://pixabay.com/get/g497f2ca2711b32c27e1671ceb75c04cf6e9b5d6edb4c48afc834bdf904b732e797c7db53b411aa5aaf179233099a2972e67a9c08a394ba1c25aa92b780ae8e72_640.jpg",
								"https://pixabay.com/get/gd96a6d91c17ab726d8720682625cbe97c55222c828578a385e5f0b418b80648ca12a282319b429fef9e8670be1f7ee860497b62140d527c74960c9d3a9ab983c_640.jpg",*/
								//"https://pixabay.com/get/gc63084349432883eb0f1b2037445a03e4698358cb8d2b263387ec4cc4c5a7771b0feae82d529c4307cdc7a28c553b5213a0507fe847179ebc4ac603d6a068ad7_640.jpg",
								//"img/hamburguesa.jpg",
								//"img/lasaña.jpg"

							]
						],
					texts:[
						[
							"Viajes a Gran Canaria desde 250€",
							"Reserva ya tu crucero",
							"Disfruta de unas vacaciones incréibles",
							//"Horno de piedra",
							//"Servicio a domicilio",
							//"Pago con tarjeta",

						],
						[],
						[
							"Haz ya tu reserva online",
							"Descubre nuestros viajes todo incluido",
							"Financiación hasta 24 meses",
							
						]
					],
					effects:{
						1:{
							modeText:true,
							fontSizeStyle:"20px"
						},
						2:{
							left:true
						},
						3:{
							
							modeText:true,
						}
					},
					order:{
						0:[1,2],
						1:[3],
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
<style>
	
</style>
