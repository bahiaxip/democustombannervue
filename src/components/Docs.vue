<template>
	<div class="container">
		<div class="boxdocs" :class="{ boxdocs_active:activeBox}">
			<!-- <h2>Documentación de Custom Banner Vue</h2> -->
			<div class="docs">
				<section>
					<article>
						<h3>Instalación</h3>
						<pre class="pre">
							<code class="code">
npm install <span class="tag_banner">custom-banner-vue</span>
							</code>
						</pre>
						
					</article>
					<article>
						<h3>Importar</h3>
						<p>El módulo CustomBannerVue se puede importar de forma global (archivo main.js), permitiendo disponibilidad en todos los componentes, o de forma local en cada uno de los componentes.</p>
					</article>
					<article>
						<h3>Importar globalmente</h3>
						<pre class="pre" >
							<code class="code">
import CustomBannerVue from '<span class="script">custom-banner-vue</span>';
...
Vue.use(<span class="script">CustomBannerVue</span>);
...
							</code>
						</pre>
					</article>
					<article>
						<h3>Importar localmente</h3>
						<pre class="pre">
							<code class="code">
import { CustomBannerVue } from '<span class="script">custom-banner-vue</span>';
...
export default {
...
	components: {
		<span class="script">CustomBannerVue</span>										
	}
}
...
							</code>
						</pre>
					</article>
				</section>
				<section>
					<article>
						<h3>Demo</h3>
						<p>Para la comprobación de CBV existe una configuración por defecto que permite obtener una versión de demostración con imágenes por defecto. Tan solo es necesario incluir la etiqueta <span class="bold">custom-banner-vue </span>en tu componente</p>
						<pre class="pre">
							<code class="code">
<span class="lgreen" >&lt;template&gt;</span>
	&lt;div&gt;
		<span class="tag_banner" >&lt;custom-banner-vue&gt;&lt;/custom-banner-vue&gt;</span>
	&lt;/div&gt;
<span class="lgreen">&lt;/template&gt;</span>
							</code>
						</pre>
					</article>
				</section>
				<section>
					<article>
						<h3>Configuración</h3>
						<p>La configuración de CBV se basa en un objeto que contiene las distintas opciones y declarado en la etiqueta del componente a través del atributo "options".</p>
						<pre class="pre">
							<code class="code">
<span class="lgreen" >&lt;template&gt;</span>
	&lt;div&gt;
		<span class="tag_banner">&lt;custom-banner-vue :options="options" &gt;&lt;/custom-banner-vue&gt;</span>
	&lt;/div&gt;
<span class="lgreen">&lt;/template&gt;</span>
<span class="script">&lt;script&gt;</span>
	export default {
		name:'miComponente',
		data() {
			return {
				<span class="orange">options:</span>{
					//Aquí las opciones de configuración
				}
			}
		}
	}
<span class="script">&lt;/script&gt;</span>
							</code>
						</pre>
					</article>
				</section>
				<section>
					<article>
						<h3>Opciones de configuración</h3>
						<ul>
							<p>A continuación se muestra el listado de las opciones de configuración.</p>
						</ul>
						<ul>
							<li class="list_options" >
								<h3 class="dflex">
									<span >
										&#x02756;
									</span>
									Orientación
								</h3>
								<ul>
								<li class="list_options">
									Opciones de orientación: horizontal y vertical. Horizontal es la opción por defecto.
								</li>
								</ul>
							</li>
						</ul>
						<ul>
							<li class="list_options">
								<h3 class="dflex">
									<span>
										&#x02756;
									</span>
									Dimensiones
								</h3>
								<ul>
									<li class="list_options">
										Opciones de medida: medium, min. Medium es la opción por defecto.			
									</li>
								</ul>
							</li>
						</ul>
						<ul>
							<li class="list_options">
								<h3 class="dflex">
									<span>
										&#x02756;
									</span>
									Orden de animaciones
								</h3>
								<ul>
									<li class="list_options">
										Permite establecer el orden de las animaciones y el cambio de los elementos, ya sean imágenes o textos			
									</li>
								</ul>
							</li>
							
						</ul>
						<ul>
							<li class="list_options">
								<h3 class="dflex">
									<span>
										&#x02756;
									</span>
									Animaciones
								</h3>
								<ul>
									<li class="list_options">
										Tipos de animaciones: width, height, top, left, rotate, opacity. La opción opacity permite establecerse simultáneamente con cualquiera de las otras animaciones.		
									</li>
								</ul>
							</li>							
						</ul>
						<ul>
							<li class="list_options">
								<h3 class="dflex">
									<span>
										&#x02756;
									</span>
									Tiempo
								</h3>
								<ul>
									<li class="list_options">
										Tiempo que transcurre entre una animación y la siguiente. El tiempo se establece en segundos.			
									</li>
								</ul>
							</li>
						</ul>
						<ul>
							<li class="list_options">
								<h3 class="dflex">
									<span>
										&#x02756;
									</span>
									Imágenes
								</h3>
								<ul>
									<li class="list_options">
										Los enlaces de las imágenes pueden provenir de la carpeta public, la carpeta assets y/o desde un servidor externo.
									</li>									
								</ul>
							</li>							
						</ul>
					</article>
					<article>
						<h3>Configuración de CBV</h3>
						<pre class="pre">
							<code class="code">
<span class="lgreen">&lt;template&gt;</span>
	&lt;div&gt;
		<span class="tag_banner">&lt;custom-banner-vue :options="options" &gt;&lt;/custom-banner-vue&gt;</span>		
	&lt;/div&gt;
<span class="lgreen">&lt;/template&gt;</span>
<span class="script">&lt;script&gt;</span>
	export default {
		name:'miComponente',
		data() {
			return {
				<span class="orange">options:</span>{
					orientation:"horizontal",
					<span class="prop">images:</span>[
						//imágenes de elemento 1
						[
							"img/image1.jpg",
							"img/image2.jpg",
							"img/image3.jpg"
						],
						//imágenes de elemento 2							
						[
							"img/image4.jpg",
							"img/image5.jpg",
							"img/image6.jpg"
						],
						//imágenes de elemento 3
						[
							"img/image7.jpg",
							"img/image8.jpg",
							"img/image9.jpg"							
						]
					],
					<span class="prop">effects:</span> {
						//tipo de animación de elemento 1
						<span class="subprop">1:</span> {
							left:true
						},
						//tipo de animación de elemento 2
						<span class="subprop">2:</span> {
							width:true
						},
						//tipo de animación de elemento 3
						<span class="subprop">3:</span> {
							opacity:true
						}
					}
				}
			}
		}
	}
<span class="script">&lt;/script&gt;</span>
							</code>
						</pre>
					</article>

					<p>Detalle de la configuración:</p>
					<ul>
						<li class="list_options detail dflex">
							<span>
								&#x1F539;
							</span>
							Se define una orientación de tipo horizontal.
						</li>
						<li class="list_options detail dflex">
							<span>
								&#x1F539;
							</span>
							Se definen las imágenes de cada elemento.
						</li>
						<li class="list_options detail dflex">
							<span>
								&#x1F539;
							</span>
							Se definen las animaciones para cada elemento.
						</li>
					</ul>
					<p>
						Nota: Si se requieren textos en alguno de los elementos, en lugar de imágenes, se añade el array de textos y se definen los textos. Para activar el texto es necesario establecer la propiedad "modeText" y su valor "true" en el elemento correspondiente desde el objeto "effects".
					</p>
				</section>
				<section>
					<article>
						<h3>Configuración de CBV con textos</h3>
						<pre class="pre">
							<code class="code">
<span style="color:lightgreen">&lt;template&gt;</span>
	&lt;div&gt;
		<span class="tag_banner">&lt;custom-banner-vue :options="options" &gt;&lt;/custom-banner-vue&gt;</span>
	&lt;/div&gt;
<span style="color:lightgreen">&lt;/template&gt;</span>
<span class="script">&lt;script&gt;</span>
	export default {
		name:'miComponente',
		data() {
			return {
				<span class="orange">options:</span>{
					orientation:"horizontal",
					<span class="prop">images:</span>[
						//imágenes de elemento 1
						[
							"img/image1.jpg",
							"img/image2.jpg",
							"img/image3.jpg"
						],
						//imágenes de elemento 2
						[
							"img/image4.jpg",
							"img/image5.jpg",
							"img/image6.jpg"
						],
						//imágenes de elemento 3	
						[
							"img/image7.jpg",
							"img/image8.jpg",
							"img/image9.jpg"
						]
					],
					<span class="prop">texts:</span> [
						//textos de elemento 1
						[
							"Texto del elemento 1"	
						],
						//textos de elemento 2
						[
							"Primer texto del elemento 2",
							"Segundo texto del elemento 2"
							"Tercer texto del elemento 2"
						],
						//textos de elemento 3
						[
							"Texto del elemento 3"
						]

					],
					<span class="prop">effects:</span> {
						//tipo de animación de elemento 1
						<span class="subprop">1:</span> {
							left: true
						},
						//tipo de animación de elemento 2
						<span class="subprop">2:</span> {
							width: true,
							modeText: true
						},
						//tipo de animación de elemento 3
						<span class="subprop">3:</span> {
							opacity: true
						}
					}
				}
			}
		}
	}
<span class="script">&lt;/script&gt;</span>
							</code>
						</pre>
					</article>
				</section>
				<section>
					<h3>Configuración de cambio de elementos</h3>
					<p>La configuración de los cambios se establece en el objeto "orders" y se define mediante arrays, en los que, cada array representa un cambio y los valores dentro del array representan los elementos.</p>
					<pre class="pre">
						<code class="code">
<span style="color:lightgreen">&lt;template&gt;</span>
	&lt;div&gt;
		<span class="tag_banner">&lt;custom-banner-vue :options="options"&gt;&lt;/custom-banner-vue&gt;</span>
	&lt;/div&gt;
<span style="color:lightgreen">&lt;/template&gt;</span>
<span class="script">&lt;script&gt;</span>
	export default {
		name:'miComponente',
		data() {
			return {
				<span class="orange">options:</span>{
					<span class="prop">orientation:</span>"vertical",
					<span class="prop">images:</span>[
						//public
						[
							"img/image1.jpg",
							"img/image2.jpg",
							"img/image3.jpg"
						],							
						[
							"img/image4.jpg",
							"img/image5.jpg",
							"img/image6.jpg"
						],							
						[
							"img/image7.jpg",
							"img/image8.jpg",
							"img/image9.jpg"
						]
					],					
					<span class="prop">effects: </span>{
						//tipo de animación de elemento 1
						<span class="subprop">1:</span> {
							left: true
						},
						//tipo de animación de elemento 2
						<span class="subprop">2:</span> {
							width: true,
							modeText: true
						},
						//tipo de animación de elemento 3
						<span class="subprop">3:</span> {
							opacity: true
						}
					},
					<span class="prop">order:</span>{
						<span class="subprop">0:</span>[1,3],
						<span class="subprop">1:</span>[2],
						<span class="subprop">2:</span>[3],
						<span class="subprop">3:</span>[1,2,3]
					}
				}
			}
		}
	}
<span class="script">&lt;/script&gt;</span>
						</code>
					</pre>
					<article>
					<p>
						Detalle de la configuración anterior:
					</p>
					<ul>
						<li class="list_options detail dflex">
							<span>
								&#x1F539;
							</span>
							Se define una orientación de tipo vertical.
						</li>
						<li class="list_options detail dflex">
							<span>
								&#x1F539;
							</span>
							Se definen las imágenes de cada elemento.
						</li>
						<li class="list_options detail dflex">
							<span>
								&#x1F539;
							</span>
							Se definen las animaciones para cada elemento.
						</li>
						<li class="list_options detail dflex">
							<span>
								&#x1F539;
							</span>
							Se define el orden de los cambios.
						</li>
						<li class="list_options detail dflex">
							<span>
								&#x1F539;
							</span>
							Análisis del orden de cambios:
						</li>
						<ul>
							<li class="list_options detail subdetail dflex">
								<span>
									&#x1F539;
								</span>
								El primer cambio (0) generará un cambio de imagen y su correspondiente animación del elemento 1 y 3.
							</li>
							<li class="list_options detail subdetail dflex">
								<span>
									&#x1F539;
								</span>
								El segundo cambio (1) solo experimentará cambio de imagen y animación el elemento 2.
							</li>
							<li class="list_options detail subdetail dflex">
								<span>
									&#x1F539;
								</span>
								El siguiente cambio (2) generará un cambio de imagen y animación solo del elemento 3.
							</li>
							<li class="list_options detail subdetail dflex">
								<span>
									&#x1F539;
								</span>
								El último cambio (3) generará un cambio de imagen y animación a todos los elementos (1,2 y 3).
							</li>
							<li class="list_options detail subdetail dflex">
								<span>
									&#x1F539;
								</span>
								Al finalizar el último cambio volverá a repetirse el ciclo iniciando de nuevo el primer cambio.
							</li>
						</ul>
						
					</ul>		
					
					</article>
				</section>	
				<section>
					<h3>Configuración de imágenes</h3>
					<p>Las imágenes pueden provenir de la carpeta public, la carpeta assets o de un servidor externo</p>

					<pre class="pre">
						<code class="code">
<span class="script">&lt;script&gt;</span>
	export default {
		name:'miComponente',
		data() {
			return {
				<span class="orange">options:</span>{
					orientation:"horizontal",
					<span class="prop">images:</span>[
						//public
						[
							"img/image1.jpg",
							"img/image2.jpg",
							"img/image3.jpg"
						],
						//assets
						[
							require("@/assets/img/image1.jpg"),
							require("@/assets/img/image2.jpg"),
							require("@/assets/img/image3.png")
						],
						//servidor externo
						[
							"http://www.server/image1.jpg",
							"http://www.server/image2.jpg",
							"http://www.server/image3.jpg"
						]
					],
				}
			}
		}
	}
<span class="script">&lt;/script&gt;</span>
						</code>
					</pre>
				</section>
				<section>
					<article>
						<h3>Otras opciones de configuración</h3>
						<p><span class="bold">time:</span> Permite establecer los segundos entre cada cambio.</p>
						<pre class="pre">
							<code class="code">
...
options:{
	<span class="prop">orientation:</span>"horizontal",
	time: 3,
...
							</code>
						</pre>
					</article>
					<article>
						<p><span class="bold">responsive:</span> Proporciona un estilo adaptable en bajas resoluciones. La propiedad responsive se mantiene en "true" por defecto. Si su valor es false mantendrá unas dimensiones fijas.</p>
						<pre class="pre">
							<code class="code">
...
options:{
	<span class="prop">orientation:</span>"horizontal",
	responsive: true,
...
							</code>
						</pre>
					</article>
					<article>
						<p><span class="bold">screen:</span> Mediante su valor "full" se expande respecto a su contenedor padre. Su valor por defecto es "default"</p>
						<pre class="pre">
							<code class="code">
...
<span class="orange">options:</span>{
	<span class="prop">orientation:</span>"horizontal",
	screen: "full",
...
							</code>
						</pre>
					</article>
					<article>
						<p><span class="bold">size:</span> Representa el tamaño del banner.</p>
						<pre class="pre">
							<code class="code">
...
<span class="orange">options:</span>{
	<span class="prop">orientation:</span>"horizontal",
	size: "min",
...
							</code>
						</pre>
					</article>
					<article>
						<p><span class="bold">widthHTML:</span> Permite establecer un ancho fijo a las imágenes del elemento.</p>
						<pre class="pre">
							<code class="code">
...
<span class="prop">effects:</span>{
	<span class="subprop">1:</span>{
		opacity:true,
		width:true,
		widthHTML:120,
	},
	<span class="subprop">2:</span>{
		left:true,
		modeText:true,
	},
	<span class="subprop">3:</span>{
		opacity:true
	}
},
...
							</code>
						</pre>
					</article>
					<article>
						<p><span class="bold">fontSizeStyle:</span> Permite establecer un tamaño de texto fijo a cada uno de los elementos.</p>
						<pre class="pre">
							<code class="code">
...
<span class="prop">effects:</span>{
	<span class="subprop">1:</span>{
		opacity:true,
		width:true,
		fontSizeStyle:"20px",
	},
	<span class="subprop">2:</span>{
		left:true,
		modeText:true,
	},
	<span class="subprop">3:</span>{
		opacity:true
	}
},
...
							</code>
						</pre>
					</article>
					<article>
						<h3>Múltiples banners en un mismo componente</h3>
						<p>Para añadir más de un banner en un mismo componente tan solo es necesario un nombre distinto en cada uno de los objetos de configuración.</p>
						<pre class="pre">
							<code class="code">
<span style="color:lightgreen">&lt;template&gt;</span>
	&lt;div&gt;
		<span class="tag_banner">&lt;custom-banner-vue :options="options1"&gt;&lt;/custom-banner-vue&gt;</span>
		<span class="tag_banner">&lt;custom-banner-vue :options="options2"&gt;&lt;/custom-banner-vue&gt;</span>
		<span class="tag_banner">&lt;custom-banner-vue :options="options3"&gt;&lt;/custom-banner-vue&gt;</span>		
	&lt;/div&gt;
<span style="color:lightgreen">&lt;/template&gt;</span>
<span class="script">&lt;script&gt;</span>
export default {
	name:'miComponente',
	data() {
		return {
			<span class="orange">options1:</span>{
				//configuración options1
			},
			<span class="orange">options2:</span>{
				//configuración options2
			},
			<span class="orange">options3:</span>{
				//configuración options3
			}
		}
	}
}
<span class="script">&lt;/script&gt;</span>
							</code>
						</pre>
					</article>
					<article>
						<h3>Aplicar estilos CSS</h3>
						<p>Para personalizar los estilos originales es necesario sobreescribir las clases "bh_banner", "div_banner", "img_banner" combinando si fuera necesario la declaración "!important".</p>
					</article>
				</section>
			</div>
		</div>
		<!-- <Footer></Footer> -->
	</div>
</template>
<script>
	
	//import Footer from './CFooter';
	export default {
		name: 'DocsCBV',
		components:{
			//Footer
		},	
		mounted(){
			setTimeout(()=>{
				this.activeBox=true;
			},100)
		},
		data(){
			return {
				activeBox:false,
			}
		},
		
	}
</script>
<style>
	.boxdocs{
		font-family: Montserrat;
	}
	.boxdocs h3, .boxdocs p{
		padding:0 10px;
	}
	.boxdocs h3{
		font-size:20px;
	}
</style>