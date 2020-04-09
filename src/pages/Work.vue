<template>
	<base-layout>
		<template v-slot:title>
			<img src="/assets/workbanner.jpeg">
		</template>
		<template v-slot:main>
			<p class="headline">Publications</p>
			<ul>
				<li @click="detail">
					<p>An English Made in India</p>
					<img class="thumbnail" src="assets/anenglishmadeinindia.jpg">
				</li>
				<li @click="detail">
					<p>Daddykins: A Memoir of My Father and I</p>
					<img class="thumbnail" src="assets/daddykins.jpg">
				</li>
			</ul>
			<transition name="component-fade" mode="out-in">
				<work-detail ref="detail" v-if="selection"></work-detail>
			</transition>
		</template>
	</base-layout>
</template>

<script>
	import BaseLayout from './../components/BaseLayout.vue'
	import WorkDetail from './../pages/WorkDetail.vue'

	export default {
		name: 'Work',
		components: {
			BaseLayout,
			WorkDetail
		},
		data: function() {
			return {
				selection: false,
				view: "AnEnglishMadeInIndia"
			}
		},
		methods: {
			detail(event) {
				this.selection = true;
				if (event.target.childNodes[0].textContent[0] === 'D') {
					this.view = "Daddykins";
				} else {
					this.view = "AnEnglishMadeInIndia";
				}
				this.$refs.detail.scrollTop = this.$refs.detail.scrollHeight;
			}
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
		opacity: 0.5;
		padding: 1%;
		height: 100%;
		width: 45%;
		align-items: center;
		display: flex;
		justify-content: space-between;
	}

	li:hover {
		opacity: 1.0;
	}

	.component-fade-enter-active, .component-fade-leave-active {
		transition: opacity .3s ease;
	}
	.component-fade-enter, .component-fade-leave-to
	/* .component-fade-leave-active below version 2.1.8 */ {
		opacity: 0;
	}
</style>