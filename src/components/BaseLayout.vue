<template>
	<div class="container">
		<header>
			<slot name="header"></slot>
		</header>
		<main>
			<slot name="title"></slot>
		</main>
		<footer>
			<slot name="picture"></slot>
		</footer>
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
		display: grid;
		grid-template-rows: 30% 70%;
	}

	main {
		grid-row: 1;
	}

	footer {
		grid-row: 2;
	}
</style>