<template>
	<div class="app">
		<router-link to="/" class="row1 col1"><h1>KALPANA MOHAN</h1></router-link>
		<p class="row1 col2 headline">writer.</p>
		<router-link v-on:mouseover="active = !active" to="/work" class="row1 col3 work">WORK</router-link>
		<div v-if="active"><router-link to="/blog"></router-link></div>
		<router-link to="/travel" class="row1 col4">TRAVEL</router-link>
		<router-link to="/about" class="row1 col5">ABOUT</router-link>
		<router-link to="/blog" class="row1 col6">BLOG</router-link>
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
