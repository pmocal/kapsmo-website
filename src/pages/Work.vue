<template>
	<base-layout>
		<template v-if="dataReady" v-slot:title>
			<img :src="'data:image/png;base64,' + workBanner">
		</template>
		<template v-slot:main>
			<ul>
				<li>
					<p>To follow my weekly writings on books in translation read <a href="https://kalpanamohan.substack.com/">LETTERS FROM EVERYWHERE</a>.</p>
				</li>
				<li>
					<p>To read weekly posts about a life in progress read <a href="https://kalsomuchtosay.substack.com/">SO MUCH TO SAY</a>.</p>
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
	@media only screen and (max-width: 1799px) {
		ul {
			display: flex;
			flex-direction: column;
		}

		li {
			padding: 1%;
			height: 45%;
			width: 100%;
			display: flex;
			justify-content: space-around;
		}
	}
	
	@media only screen and (min-width: 1800px) {
		ul {
			display: flex;
			justify-content: space-around;
		}

		li {
			padding: 1%;
			height: 100%;
			width: 45%;
			align-items: center;
			display: flex;
			justify-content: space-between;
		}
	}
</style>