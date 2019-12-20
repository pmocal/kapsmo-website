<template>
	<div id="app">
		<h1>Kalpana Mohan's Website</h1>
		<router-link to="/work">Work</router-link>
		<router-link to="/travel">Travel</router-link>
		<router-link to="/about">About</router-link>
		<!-- route outlet -->
		<!-- component matched by the route will render here -->
		<router-view></router-view>
	</div>
</template>

<script>

export default {
	name: 'app'
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	display: grid;
	grid-template-columns: 20% 20% 20% 20% 20%;
	grid-template-rows: 20% 20% 20% 20% 20%;
}

h1 {
	grid-column-start: 1;
	grid-column-end: 2;
	grid-row-start: 1;
	grid-row-end: 2;
}

a {
	grid-row-start: 1;
	grid-row-end: 1;
}

.component {
	grid-row-start: 3;
	grid-row-end: 5;
	grid-column-start: 1;
	grid-column-end: 5;
}

</style>
