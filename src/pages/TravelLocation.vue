<template>
	<base-layout>
		<template v-slot:title>
			<h2>{{ $route.params.id }}</h2>
		</template>
		<template v-slot:main>
		</template>
	</base-layout>
</template>

<script>
	import BaseLayout from './../components/BaseLayout.vue'
	
	export default {
		name: 'TravelLocation',
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