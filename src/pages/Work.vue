<template>
	<base-layout>
		<template v-slot:title>
			<h2>Work</h2>
		</template>
		<template v-slot:main>
			<ul>
				<li>
					<p>Daddykins</p>
				</li>
				<li>
					<p>An English Made in India</p>
				</li>
			</ul>
		</template>
	</base-layout>
</template>

<script>
	import BaseLayout from './../components/BaseLayout.vue'

	export default {
		name: 'Work',
		components: {
			BaseLayout
		}
	}
</script>

<style scoped>

</style>