<template>
	<div class="container">
		<header class="row1 col12345 photocontainer">
			<slot name="title"></slot>
		</header>
		<main class="row234 col12345">
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
		display: grid;
		grid-template-rows: 25% auto;
		grid-template-columns: 20% 20% 20% 20% 20%;
		height: auto;
	}

	.photocontainer img {
		object-fit: cover;
		width: 100%;
		max-height: 100%;
	}

	main {
		padding: 2%;
		text-align: left;
		color: black;
		line-height: normal;
		font-size: 0.9em;
	}

	h2 {
		font-size: 1.4em;
		font-style: italic;
	}
</style>