<template>
	<div class="app">
		<router-link to="/home" class="row1 col1"><h1>KALPANA MOHAN</h1></router-link>
		<router-link to="/work" class="row1 col3">Work</router-link>
		<router-link to="/travel" class="row1 col4">Travel</router-link>
		<router-link to="/about" class="row1 col5">About</router-link>
		<router-view class="row2 col12345"></router-view>
	</div>
</template>

<script>
	export default {
		name: 'app'
	}
</script>

<style scoped>
	.app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
		
		display: grid;
		grid-template-columns: 20% 20% 20% 20% 20%;
		grid-template-rows: 20% 80%;
		align-items: center;
		text-align: center;
		
		width: 100vw;
		height: 100vh;
	}

	h1 {
		font-weight: bold;
		font-size: 1.5em;
	}

	a {
		text-decoration: none;
		color: black;
	}

	h1:hover {
		color: gray;
	}
</style>
