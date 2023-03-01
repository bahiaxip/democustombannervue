export default {
	data() {

	},
	methods: {
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
	}
}