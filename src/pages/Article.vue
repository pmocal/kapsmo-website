<template>
	<base-layout>
		<template v-slot:title>
			<h2>ARTICLE {{ $route.params.id }}</h2>
		</template>
		<template v-slot:main>
			<p>Article body goes here.</p>
		</template>
	</base-layout>
</template>

<script>
	import BaseLayout from './../components/BaseLayout.vue'

	export default {
		name: 'Article',
		components: {
			BaseLayout
		}
	}
</script>

<style scoped>

</style>