<template>
	<base-layout>
		<template v-if="dataReady" v-slot:title>
			<img :src="'data:image/png;base64,' + workBanner">
		</template>
		<template v-slot:main>
			<ol v-if="dataReady">
				<li
					v-for="post in posts"
					:key="post._id"
				>
					<h1><a :href="'/work/' + post._id">{{ post.title }}</a></h1>
					<p class="postBody" v-html="post.text"></p>
					<div class="postFooter">
						<p>{{ new Date(post.timestamp).getMonth() + 1 }}/{{ new Date(post.timestamp).getDate() + 1 }}/{{ new Date(post.timestamp).getFullYear() }}</p>
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
				dataReady: false,
				workBanner: "",
			}
		},
		async created() {
			let response = await fetch(this.$hostname + "/posts");
			this.posts = await response.json();
			if (this.posts != null) {
				this.posts.sort(function(a,b){
					return a.timestamp.localeCompare(b.timestamp);
				}).reverse()
			}
			response = await fetch(this.$hostname + "/photos/location/work");
			this.workBanner = await response.json();
			this.workBanner = Buffer.from(this.workBanner[0].img.data).toString('base64');
			this.dataReady = true;
		}
	}
</script>

<style scoped>
	a {
		color: maroon;
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