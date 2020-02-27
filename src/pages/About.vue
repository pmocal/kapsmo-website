<template>
	<base-layout>
		<template v-slot:title>
			<h2>ABOUT</h2>
		</template>
		<template v-slot:main>
			<p>Kalpana Mohan is a writer.</p>
		</template>
	</base-layout>
</template>

<script>
	import BaseLayout from './../components/BaseLayout.vue'

	export default {
		name: 'About',
		components: {
			BaseLayout
		}
	}
</script>

<style scoped>

</style>