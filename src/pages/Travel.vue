<template>
	<base-layout>
		<template v-slot:title>
			<h2>TRAVEL</h2>
		</template>
		<template v-slot:main>
			<router-link to="/location/paris"><img src="assets/paris.jpg"></router-link>
			<router-link to="/location/chennai"><img src="assets/chennai.jpeg"></router-link>
			<router-view></router-view>
		</template>
	</base-layout>
</template>

<script>
	import BaseLayout from './../components/BaseLayout.vue'
	
	export default {
		name: 'Travel',
		components: {
			BaseLayout
		}
	}
</script>

<style scoped>
	img {
		height: 40%;
		width: 20%;
	}

	main {
		display: flex;
		justify-content: space-around;
	}
</style>