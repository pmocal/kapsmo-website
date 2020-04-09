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
				<component ref="detail" v-if="selection" v-bind:is="view"></component>
			</transition>
		</template>
	</base-layout>
</template>

<script>
	import BaseLayout from './../components/BaseLayout.vue'
	import WorkDaddykins from './../pages/WorkDaddykins.vue'
	import WorkAnEnglishMadeInIndia from './../pages/WorkAnEnglishMadeInIndia.vue'

	export default {
		name: 'Work',
		components: {
			BaseLayout,
			WorkDaddykins,
			WorkAnEnglishMadeInIndia
		},
		data: function() {
			return {
				selection: false,
				view: WorkDaddykins
			}
		},
		methods: {
			detail(event) {
				this.selection = true;
				if (event.target.childNodes[0].textContent[0] === 'D') {
					this.view = "WorkDaddykins";
				} else {
					this.view = "WorkAnEnglishMadeInIndia";
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
		height: 100%;
		width: 45%;
		align-items: center;
		display: flex;
		justify-content: space-between;
	}

	.component-fade-enter-active, .component-fade-leave-active {
		transition: opacity .3s ease;
	}
	.component-fade-enter, .component-fade-leave-to
	/* .component-fade-leave-active below version 2.1.8 */ {
		opacity: 0;
	}
</style>