<template>
	<div class="app">
		<div class="row1 col12345 nav">
			<div class="row1 col1 titlebox">
				<router-link to="/"><h1>KALPANA MOHAN</h1></router-link>
				<p class="tagline">writer</p>
			</div>
			<router-link to="/books" class="row1 col2 work">BOOKS</router-link>
			<router-link to="/work" class="row1 col3">WORK</router-link>
			<router-link to="/travel" class="row1 col4">TRAVEL</router-link>
			<router-link to="/about" class="row1 col5">ABOUT</router-link>
			<hr>
			<hr>
			<hr>
			<hr>
			<hr>
		</div>
		<router-view class="row2 col12345"></router-view>
	</div>
</template>

<script>
	export default {
		name: 'app',
	}
</script>

<style scoped>
	.titlebox, .tagline {
		text-align: center;	
	}
	.app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
		
		display: grid;
		grid-template-columns: 24% 19% 19% 19% 19%;
		grid-template-rows: 17% minmax(83%, auto);
		align-items: center;
		text-align: center;
		height: 100%;
		
		margin-left: 3%;
		margin-right: 3%;
	}

	.nav {
		display: grid;
		grid-template-columns: 28% 18% 18% 18% 18%;
		margin: 5% 0;
		align-items: center;
	}

	@media only screen and (min-device-width: 768px){
		.nav {
			display: grid;
			grid-template-columns: 24% 19% 19% 19% 19%;
			margin: 0 9%;
			align-items: center;
		}
	}

	.nav .col1 {
		text-align: left;
	}

	h1 {
		font-weight: bold;
		font-size: 1.3em;
	}

	@media only screen and (min-device-width: 768px){
		h1 {
			font-weight: bold;
			font-size: 1.6em;
		}
	}

	a {
		text-decoration: none;
		color: black;
	}

	a:active {
		color: gray;
	}

	.router-link-active{
		font-weight: bold;
	}
</style>
