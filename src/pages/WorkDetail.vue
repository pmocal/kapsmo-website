<template>
	<div class="outer">
		<div class="inner1">
			<img class="daddykins" src="assets/daddykins.jpg">
		</div>
		<div class="inner2">
			<h1>Daddykins: A Memoir of My Father and I</h1>
			<p>When journalist Kalpana Mohan's elderly father falls ill in Chennai, she is on the next flight over from California and the home she has shared with her husband for three decades. Caring for her sometimes cranky, sometimes playful, and always adored father at his home in Chennai, Mohan sets out to piece together an account of her father's life, from his poverty-stricken childhood in a village in south India, to his arranged marriage, to his first job in the city, all the while coming to terms with his inevitable passing.</p>
			<p>Mohan's tender, moving, and sometimes hilarious memoir is an account of a changing India captured in her father's life, from the sheer feat of surviving poverty in I920s India of his birth, to witnessing key moments in the nation's history and changing alongside them. Above all, Daddykins is an intimate and deeply relatable account of our relationships with our parents whatever our age, and the shared experiences of love and grief that unite us all.</p>
			<div>
				<a href="https://www.amazon.com/Daddykins-Memoir-My-Father-I/dp/9386349531">
					<img class="amazon" src="assets/media/available_at_amazon_1200x600.png">
				</a>
				<a href="https://www.goodreads.com/en/book/show/41139964-daddykins">
					<img class="goodreads" src="assets/media/goodreads_icon_100x100.png">
				</a>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
h1 {
	font-size: 1.4em;
	padding: 2%;
}

p {
	padding: 3%;
	width: 80%;
}

.outer {
	display: grid;
	grid-template-columns: 30% 70%;
	grid-template-rows: 100%;
	padding: 5%;
}

.inner1 {
	grid-row-start: 1;
	grid-row-end: 2;
	grid-column-start: 1;
	grid-column-end: 2;
}

.inner2 {
	grid-row-start: 1;
	grid-row-end: 2;
	grid-column-start: 2;
	grid-column-end: 3;
	padding: 2%;
	display: flex;
	text-align: center;
	align-items: center;
	flex-direction: column;
}

.inner2 div {
	height: 100%;
}

.daddykins {
	width: 100%;
}

.amazon {
	height: 90px;
}

.goodreads {
	height: 70px;
}
</style>