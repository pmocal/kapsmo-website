<template>
	<base-layout>
		<template v-slot:title>
			<p class="headline">Work</p>
		</template>
		<template v-slot:main>
			<ol v-if="dataReady">
				<li
					v-for="post in posts"
					:key="post._id"
				>
					<h1>{{ post.title }}</h1>
					<p class="postBody">{{ post.text }}</p>
					<div class="postFooter">
						<p>{{ new Date(post.timestamp).getMonth() }}/{{ new Date(post.timestamp).getDate() }}/{{ new Date(post.timestamp).getFullYear() }}</p>
						<a :href="post.link">Link</a>
					</div>
					<hr>
				</li>
			</ol>
		</template>
	</base-layout>
</template>

<script>
	import BaseLayout from './../components/BaseLayout.vue'

	export default {
		name: 'Work',
		components: {
			BaseLayout
		},
		data () {
			return {
				posts: null,
				dataReady: false
			}
		},
		async created() {
			let response = await fetch("https://salty-temple-72490.herokuapp.com/posts");
			this.posts = await response.json();
			if (this.posts != null) {
				this.posts.sort(function(a,b){
					return a.timestamp.localeCompare(b.timestamp);
				}).reverse()
			}
			this.dataReady = true;
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