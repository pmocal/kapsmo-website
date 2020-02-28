<template>
	<base-layout>
		<template v-slot:title>
			<img src="/assets/workbanner.jpeg">
		</template>
		<template v-slot:main>
			<p class="headline">Publications</p>
			<ul>
				<li>
					<p>Daddykins: A Memoir of My Father and I</p>
					<img class="thumbnail" src="assets/daddykins.jpg">
				</li>
				<li>
					<p>An English Made in India</p>
					<img class="thumbnail" src="assets/anenglishmadeinindia.jpg">
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
	.thumbnail {
		max-width: 12em;
		object-fit: scale-down;
	}

	ul {
		display: flex;
		justify-content: space-around;
	}

	li {
		height: 100%;
		width: 45%;
		align-items: center;
		display: flex;
		justify-content: space-between;
	}
</style>