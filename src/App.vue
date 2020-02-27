<template>
	<div class="app">
		<h1><router-link to="/home">Kalpana Mohan's Website</router-link></h1>
		<router-link to="/work">Work</router-link>
		<router-link to="/travel">Travel</router-link>
		<router-link to="/about">About</router-link>
		<router-view></router-view>
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
		grid-template-rows: 20% 20% 20% 20% 20%;
		width: 100vw;
		height: 100vh;
	}

	.app * {
		padding: 1%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	h1 {
		grid-column-start: 1;
		grid-column-end: 3;
		grid-row-start: 1;
		grid-row-end: 2;
		font-weight: bold;
	}

	a {
		grid-row-start: 1;
		grid-row-end: 1;
	}
</style>
