<template>
	<base-layout>
		<template v-slot:title>
			<img src="/assets/rome.png">
		</template>
		<template v-slot:main>
			<div v-if="dataReady">
				<h1>{{ post[0].title }}</h1>
				<p class="postBody" v-html="post[0].text"></p>
				<div class="postFooter">
					<p>{{ new Date(post[0].timestamp).getMonth() + 1 }}/{{ new Date(post[0].timestamp).getDate() + 1 }}/{{ new Date(post[0].timestamp).getFullYear() }}</p>
					<a :href="post[0].link">Link</a>
				</div>
			</div>
		</template>
	</base-layout>
</template>

<script>
	import BaseLayout from './../components/BaseLayout.vue'

	export default {
		name: 'WorkArticle',
		components: {
			BaseLayout
		},
		data () {
			return {
				post: null,
				dataReady: false
			}
		},
		async created() {
			let response = await fetch("https://salty-temple-72490.herokuapp.com/posts/" + this.$route.params.id);
			this.post = await response.json();
			this.dataReady = true;
		}
	}
</script>

<style scoped>
	.headline {
		font-style: normal;
		font-weight: bold;
		text-decoration: underline;
	}

	.postBody {
		margin-left: 5%;
		margin-top: 2%;
		white-space: pre-line;
	}

	.postFooter {
		display: flex;
		justify-content: space-between;
		margin: 3%;
	}
</style>