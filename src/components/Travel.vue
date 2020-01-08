<template>
	<base-layout>
		<template v-slot:header>

		</template>
		<template v-slot:title>
			<h2>Travel</h2>
		</template>
		<template v-slot:picture>
			<img src="/paris.jpg">
			<img src="/chennai.jpeg">
		</template>
	</base-layout>
</template>

<script>
	import BaseLayout from './BaseLayout.vue'
	
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
</style>