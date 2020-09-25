<template>
	<div class="app">
		<div class="row1 col123456 nav">
			<router-link to="/" class="row1 col1"><h1>KALPANA MOHAN</h1></router-link>
			<p class="row1 col2 tagline">writer.</p>
			<router-link v-on:mouseover="active = !active" to="/books" class="row1 col3 work">BOOKS</router-link>
			<router-link to="/work" class="row1 col4">WORK</router-link>
			<router-link to="/travel" class="row1 col4">TRAVEL</router-link>
			<router-link to="/about" class="row1 col6">ABOUT</router-link>
		</div>
		<hr>
		<router-view class="row2 col123456"></router-view>
	</div>
</template>

<script>
	export default {
		name: 'app',
		data() {
			// active: false
		}
	}
</script>

<style scoped>
	.app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
		
		display: grid;
		grid-template-columns: 25% 15% 15% 15% 15% 15%;
		grid-template-rows: 20% minmax(80%, auto);
		align-items: center;
		text-align: center;
		height: 100%;
		
		margin-left: 3%;
		margin-right: 3%;
	}

	.nav {
		display: grid;
		grid-template-columns: 25% 15% 15% 15% 15% 15%;
		margin: 0 9%;
	}

	.nav .col1 {
		text-align: left;
	}

	h1 {
		font-weight: bold;
		font-size: 1.6em;
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
