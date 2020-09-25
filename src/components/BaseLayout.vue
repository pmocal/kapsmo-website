<template>
	<div class="container">
		<header class="row1 col123456 photocontainer">
			<slot name="title"></slot>
		</header>
		<main class="row23 col123456">
			<slot name="main"></slot>
		</main>
		<footer class="row4 col2345">
			<p>website<br>by<br><a href="https://pmocal.github.io">pmocal</a></p>
			<a class="logo" href="https://twitter.com/kalpanamo" target="_blank"><img src="assets/socialmedia/twitter.svg"></a>
			<a class="logo" href="https://www.instagram.com/kapsmo/" target="_blank"><img src="assets/socialmedia/instagram.svg"></a>
			<a class="logo" href="https://www.facebook.com/kalpana.mohan" target="_blank"><img src="assets/socialmedia/facebook.svg"></a>
		</footer>
	</div>
</template>

<script>
	export default {
		name: 'BaseLayout'
	}
</script>

<style scoped>
	main {
		margin: .5% 9%;
		text-align: left;
		color: black;
		line-height: normal;
		font-size: 1em;
	}

	h2 {
		font-size: 1.4em;
		font-style: bold;
		padding-bottom: 2.5%;
	}

	.container {
		display: grid;
		grid-template-rows: 35% minmax(40%, auto);
		grid-template-columns: 18% 16% 16% 16% 16% 18%;
		height: 100%;
	}

	.photocontainer img {
		object-fit: cover;
		width: 100%;
		max-height: 80%;
	}

	footer {
		width: auto;
		text-align: left;
		margin-top: 9%;
		margin-bottom: 9%;
		display: flex;
		justify-content: space-around;
	}

	.logo {
		width: 3%;
		height: 3%;
	}
</style>