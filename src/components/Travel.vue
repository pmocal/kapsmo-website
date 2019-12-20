<template>
	<div class="component">
		<h2>Travel.vue</h2>
		<div class="content">
			<img src="/paris.jpg">
		</div>
	</div>
</template>

<script>
export default {
  name: 'Travel'
}
</script>

<style scoped>
	.content {
		display: flex;
		justify-content: center;
	}
	img {
		width: 30%;
		height: 30%;
	}
</style>