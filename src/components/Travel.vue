<template>
	<div class="component">
		<h2>Travel</h2>
		<img src="/paris.jpg">
	</div>
</template>

<script>
export default {
  name: 'Travel'
}
</script>

<style scoped>
.component {
	grid-row-start: 2;
	grid-row-end: 5;
	grid-column-start: 1;
	grid-column-end: 6;
	height: 80%;
	width: 100%;
}

img {
	height: 100%;
}
</style>