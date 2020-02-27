<template>
	<div class="app">
		<router-link to="/" class="row1 col1"><h1>KALPANA MOHAN</h1></router-link>
		<p class="row1 col2 headline">writer.</p>
		<router-link to="/work" class="row1 col3">WORK</router-link>
		<router-link to="/travel" class="row1 col4">TRAVEL</router-link>
		<router-link to="/about" class="row1 col5">ABOUT</router-link>
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
		grid-template-rows: 20% auto;
		align-items: center;
		text-align: center;
		
		height: auto;
		margin-left: 3%;
		margin-right: 3%;
	}

	.headline {
		color: brown;
		font-style: italic;
	}

	h1 {
		font-weight: bold;
		font-size: 1.6em;
	}

	h1:hover {
		color: gray;
	}

	a {
		text-decoration: none;
		color: black;
	}
</style>
