<template>
	<div>
		<img :src="'assets/' + route.params.id + '.jpg'">
	</div>
</template>

<script>
	export default {
		name: 'TravelLocation',
		data() {
			return {
				route: ""
			}
		}
	}
</script>

<style scoped>
	img {
		height: 40%;
		width: 20%;
	}
</style>