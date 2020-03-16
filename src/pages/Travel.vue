<template>
	<base-layout>
		<template v-slot:title>
			<img src="/assets/travelbanner.png">
		</template>
		<template v-slot:main>
			<p class="headline">Travel</p>
			<div class="frame">
				<div class="locations" v-for="location in locations" :key="location"  v-on:click="isHidden = true">
					<div>
						<router-link v-bind:to="'/travel/' + location">
							{{location.charAt(0).toUpperCase() + location.slice(1)}}
						</router-link>
					</div>
				</div>
			</div>
			<div v-bind:class="{ hidden: isHidden }" class="frame">
				<p>See some of my photos by clicking one of the locations above.</p>
			</div>
			<router-view></router-view>
		</template>
	</base-layout>
</template>

<script>
	import BaseLayout from './../components/BaseLayout.vue'
	
	export default {
		name: 'Travel',
		components: {
			BaseLayout
		},
		data: function() {
			return {
				locations: ["chennai", "saratoga", "beijing", "rome", "palakkad", "colombo"],
				isHidden: false
			}
		}
	}

</script>

<style scoped>
	.headline {
		padding-top: 1.5%;
		padding-bottom: 3.5%;
	}

	.locations img {
		width: 40%;
	}

	.router-link-active{
		font-weight: bold;
	}

	.hidden {
		display: none;
	}

	.frame {
		padding: 3% 5%;
	}
</style>