<template>
	<div class="frame">
		<div v-for="url in images.urls" :key="url">
			<img :src="url">
		</div>
	</div>
</template>

<script>	
	export default {
		name: 'TravelLocation',
		data: function() {
			return {
				images: []
			}
		},
		created() {
			this.images = require('./../../public/assets/locations/' + this.$route.params.id);
		},
		watch: {
			'$route.params.id': function() {
				this.images = require('./../../public/assets/locations/' + this.$route.params.id);
			}
		}
	}
</script>

<style scoped>
	.frame img {
		padding: 30% 15%;
		height: 90%;
		width: 90%;
	}
</style>