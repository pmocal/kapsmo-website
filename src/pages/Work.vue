<template>
	<base-layout>
		<template v-slot:title>
			<img src="/assets/workbanner.jpeg">
		</template>
		<template v-slot:main>
			<p class="headline">Publications</p>
			<ul>
				<li v-for="work in works" :key="work" @click="detail">
					<p>{{ work[1] }}</p>
					<img class="thumbnail" :src="'assets/' + work[0] + '.jpg'">
				</li>
			</ul>
			<transition name="component-fade" mode="out-in">
				<work-detail ref="detail" v-if="selection" :view="view"></work-detail>
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
				works: [["daddykins", "Daddykins: A Memoir of My Father and I"], ["anenglishmadeinindia", "An English Made in India: How a Foreign Language Became Local"]],
				view: "anenglishmadeinindia"
			}
		},
		methods: {
			detail(event) {
				if (event.target.childNodes[0].textContent[0] === 'D') {
					this.view = this.works[0][0];
				} else {
					this.view = this.works[1][0];
				}
				this.selection = true;
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