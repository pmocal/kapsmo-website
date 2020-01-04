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
	display: grid;
	grid-template-rows: 20% 80%;
}

.component h2 {
	grid-row: 1;
}

.component img {
	grid-row: 2;
}

img {
	height: 80%;
}
</style>