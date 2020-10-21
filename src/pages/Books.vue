<template>
	<base-layout>
		<template v-slot:title>
			<img src="/assets/workbanner.jpeg">
		</template>
		<template v-slot:main>
			<ul>
				<li
					v-for="work in works"
					:key="work[0]"
					:work="work[0]"
					@click="detail"
				>
					<p>{{ work[1] }}</p>
					<img class="thumbnail" :src="'assets/' + work[0] + '.jpg'">
				</li>
			</ul>
			<transition name="component-fade" mode="out-in">
				<book-detail
					v-if="view"
					:view="view"
				/>
			</transition>
		</template>
	</base-layout>
</template>

<script>
	import BaseLayout from './../components/BaseLayout.vue'
	import BookDetail from './../pages/BookDetail.vue'

	export default {
		name: 'Books',
		components: {
			BaseLayout,
			BookDetail
		},
		data: function() {	
			return {
				works: [["daddykins", "Daddykins: A Memoir of My Father and I"], ["anenglishmadeinindia", "An English Made in India: How a Foreign Language Became Local"]],
				view: ""
			}
		},
		methods: {
			detail(event) {
				this.view = event.currentTarget.getAttribute('work');
				event.currentTarget.setAttribute('class', '');
				event.currentTarget.setAttribute('id', 'opaque')
				for (let i = 0; i < event.currentTarget.parentElement.childNodes.length; i++) {
					if (event.currentTarget.parentElement.childNodes[i].getAttribute('work') != this.view) {
						event.currentTarget.parentElement.childNodes[i].setAttribute('class', 'translucent');
						event.currentTarget.parentElement.childNodes[i].setAttribute('id', '');
					}
				}
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
		padding: 1%;
		height: 100%;
		width: 45%;
		align-items: center;
		display: flex;
		justify-content: space-between;
	}

	li * {
		padding: 1%;
	}

	li:hover {
		opacity: 1.0;
		cursor: pointer;
	}

	.translucent {
		opacity: 0.5;
	}

	#opaque {
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