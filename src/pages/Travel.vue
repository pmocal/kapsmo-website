<template>
	<base-layout>
		<template v-slot:title>
			<img v-if="dataReady" :src="'data:image/png;base64,' + travelBanner">
		</template>
		<template v-slot:main>
			<div v-bind:class="{ hidden: isHidden }" class="frame">
				<b>Click one of the locations below to see some of my photos.</b>
			</div>
			<div class="frame">
				<div class="locations" v-for="location in locations" :key="location"  v-on:click="isHidden = true">
					<div>
						<router-link v-bind:to="{ name: 'travelLocation', params: { id: location, closedTheater: true }}">
							{{location.charAt(0).toUpperCase() + location.slice(1)}}
						</router-link>
					</div>
				</div>
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
				locations: ["chennai", "saratoga", "beijing", "rome", "palakkad", "colombo", "paris"],
				isHidden: false,
				travelBanner: "",
				dataReady: null,
			}
		},
		async created() {
			let response = await fetch("https://cors-anywhen.herokuapp.com/" + this.$hostname + "/photos/location/travel");
			this.travelBanner = await response.json();
			this.travelBanner = Buffer.from(this.travelBanner[0].img.data).toString('base64');
			this.dataReady = true;
		}
	}

</script>

<style scoped>
	.headline {
		padding-top: 1.5%;
		padding-bottom: 3.5%;
	}

	.locations a {
		color: black;
		font-size: 0.7em;
	}

	@media only screen and (min-device-width: 768px){
		.locations a {
			color: black;
			font-size: 1em;
		}
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