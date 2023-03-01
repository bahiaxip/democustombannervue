<template>
	<div>
	<div class="footer" :class="{ active:activeFooter}">
		<h3>Custom Banner Vue</h3>
		<div class="from_develop">			
			<p>Desarrollado por <a href="https://bahiaxip.com">bahiaxip</a> &copy; {{year}}</p>
		</div>
	</div>
	
	</div>
</template>
<script>
	export default {
		name:'CFooter',
		//props:['activeFooter'],
		mounted(){

			if(this.$route.name == 'docs'){
				setTimeout(()=>{
					this.activeFooter = true;
				},100)
			}else{
				this.activeFooter = true;
			}
			this.year = new Date().getFullYear();
			
			
			//this.activeFooter = true;
			//this.$emit("setFooter",true);


		},
		data() {
			return {
				activeFooter:false,
				year:null
			}
		},
		
	}
</script>
<style>
	.footer{
		
		background: linear-gradient(180deg, rgba(54,91,199,1) 0%, rgba(54,91,199,0.8211659663865546) 50%, rgba(54,91,199,1) 100%);
		background:#353535;
		color:white;
		padding:30px 0 15px 0;
		opacity:0;  		
		transform:translateY(100%);		
		transition: all 1s ease-out 1s;
		visibility: hidden;
		width:100%;
	}
	.footer.active{
		transform:translateY(0);    
		opacity:1;
		visibility:visible;
	}
	.footer h3{
		font-family: Comfortaa;
		font-size:40px;
		margin:auto;
	}
	.text_banner{
		font-family:YoutubeM !important;

	}
	.from_develop {
		margin:20px auto 0 auto;
		font-size:14px;
	}
	.from_develop a {
		color: #18D26E;
		text-decoration:none;
	}
</style>