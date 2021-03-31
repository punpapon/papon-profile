<template>
	<div class="contact">
		<h1>{{title}}</h1>
		
	</div>
</template>
<script>
	export default{
		name:'blog',
		data (){
			return{
				title:'contact'
			}
		}
	}
</script>

<style scoped>
.contact form{
	max-width: 40em;
	margin: 2em auto;
}
.contact form .form-control{
	margin-bottom: 1em;
}
.contact form textarea{
	min-height: 20em;
}	
</style>