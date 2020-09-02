<template>
	<base-layout>
		<template v-slot:title>
			<p class="headline">BLOG</p>
		</template>
		<template v-slot:main>
			<p>{{ info }}</p>
		</template>
	</base-layout>
</template>

<script>
	import BaseLayout from './../components/BaseLayout.vue'

	export default {
		name: 'Blog',
		components: {
			BaseLayout
		},
		data () {
			return {
				info: null
			}
		},
		mounted() {
			var that = this;
			fetch("https://salty-temple-72490.herokuapp.com/posts", {
				method: 'get'
			}).then(function(response) {
				return response.json();
			}).then(function(data) {
				that.info = data;	
			});

		}
	}
</script>

<style scoped>
	.container {
		grid-template-rows: auto auto;
	}

	.headline {
		font-style: normal;
		font-weight: bold;
		text-decoration: underline;
	}

</style>