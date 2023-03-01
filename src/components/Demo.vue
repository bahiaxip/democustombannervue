<template>
	<div>
	<div class="container">
		<div class="boxdemo" :class="{boxdemo_active:activeBox}">
			<div style="width:100%">
				<custom-banner-vue ></custom-banner-vue>
			</div>
			<button class="button ccssb ccssb_fucsia" :class="{cambio:sectionActive}" @click="showSection">
				<span class="button_text">Ver Configuración</span>
				<span class="button_text">Ocultar Configuración</span>
			</button>
			<div class="demo">
				<section ref="section_flex">
					<pre class="pre flex" :class="{active:sectionActive}" >
						<code class="code flex" :class="{active:sectionActive}">
<span class="lgreen" >&lt;template&gt;</span>
    &lt;div&gt;
        <span class="tag_banner">&lt;custom-banner-vue&gt;&lt;/custom-banner-vue&gt;</span>
    &lt;/div&gt;
<span class="lgreen">&lt;/template&gt;</span>
<span class="script">&lt;script&gt;</span>
    export default {
        <span class="prop">name:</span>'miComponente'
    }
<span class="script">&lt;/script&gt;</span>
						</code>
					</pre>
				</section>
			</div>
			<!-- <button @click="showBox2">Pantalla completa</button>
			<div class="box2" :class="{box2_active:activeBox2}">
				<custom-banner-vue :options=options></custom-banner-vue>
			</div> -->
		</div>
		
		
  </div>
  </div>
</template>
<script>

	//importar localmente
	//import { CustomBannerVue } from 'custom-banner-vue';
	import MethodsMixin from '../mixins/methodsMixin.js';
	//import Footer from './CFooter';
	export default{
		name:'DemoCBV',
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
				activeBox: false,
				activeBox2 : false,
				
				/*options:{
					orientation:"horizontal",					
					time:5,
					//podrìamos establecer la opción fullscreen tan solo eliminando el max-width de 
					//medium y min, pero sería interesante poder añadir más imágenes si es posible
					responsive:true,
					screen:'full',
					size:'medium',
					
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
				}*/

			}
		},
		methods:{
			showBox2(){
				console.log("llega bien");
				this.activeBox2 = true;
			}
		}
	}
	
</script>
<style>

	
</style>