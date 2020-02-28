<template>
	<base-layout>
		<template v-slot:title>
			<img src="/assets/travelbanner.png">
		</template>
		<template v-slot:main>
			<div class="travel">
				<p class="headline">Travel</p>
				<div class="locations">
					<div>
						<router-link to="/travel/paris">Paris</router-link>
					</div>
					<div>
						<router-link to="/travel/chennai">Chennai</router-link>
					</div>
					<div>
						<router-link to="/travel/saratoga">Saratoga</router-link>
					</div>
					<div>
						<router-link to="/travel/beijing">Beijing</router-link>
					</div>
					<div>
						<router-link to="/travel/rome">Rome</router-link>
					</div>
					<div>
						<router-link to="/travel/palakkad">Palakkad</router-link>
					</div>
					<div>
						<router-link to="/travel/colombo">Colombo</router-link>
					</div>
					<div>
						<router-link to="/travel/berlin">Berlin</router-link>
					</div>
				</div>
				<router-view></router-view>
			</div>
		</template>
	</base-layout>
</template>

<script>
	import BaseLayout from './../components/BaseLayout.vue'
	
	export default {
		name: 'Travel',
		components: {
			BaseLayout
		}
	}
</script>

<style scoped>
	.travel {
		text-align: center;
		padding-top: 2%;
	}
	.locations {
		display: flex;
		justify-content: space-around;
		align-items: center;
		padding-top: 4%;
	}

	.locations img {
		width: 40%;
	}

	.router-link-active{
		font-weight: bold;
	}
</style>