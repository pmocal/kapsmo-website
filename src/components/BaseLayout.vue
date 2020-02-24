<template>
	<div class="container">
		<header>
			<slot name="title"></slot>
		</header>
		<main>
			<slot name="main"></slot>
		</main>
	</div>
</template>

<script>
	export default {
		name: 'BaseLayout'
	}
</script>

<style scoped>
	.container {
		grid-row-start: 2;
		grid-row-end: 5;
		grid-column-start: 1;
		grid-column-end: 6;
		align-items: normal;
		justify-content: start;
		width: 100%;
	}

	header {
		grid-row: 1;
	}

	main {
		grid-row: 2;
	}
</style>