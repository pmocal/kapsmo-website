<template>
	<base-layout>
		<template v-slot:main>
			<div class="about">
				<div>
					<p>In 2011, Kalpana Mohan won a first prize-and the attention of an agent-at a competition at Kepler's Books in Menlo Park, California, for the best one-minute book pitch; it catalyzed some of her book-length writing projects based on India.</p>
					<p>Her first book, <b>DADDYKINS: A MEMOIR OF MY FATHER AND I</b>, was published by Bloomsbury India in September 2018. It's a meditation on life, death, love, and loss, and the special bond between fathers and daughters. An <a href="http://bit.ly/2wGByeDd">essay</a> published in The Hindu talks about the genesis of that book. <a href="http://bit.ly/DkRvAm">Read</a> <a href="http://bit.ly/DkRvST">the</a> <a href="http://bit.ly/DkRvVK">reviews</a>.</p>
					<p>Her second book, <b>AN ENGLISH MADE IN INDIA: HOW A FOREIGN LANGUAGE BECAME LOCAL</b>, is a story of the evolution of the English language in India. Published by Aleph Book Company in Septermber 2019, it traces the history of the English language in India. While exploring how India's regional languages have influenced English, the book also examines the social, psychological, and cultural ramifications of the language on India and its people. The book takes a peripatetic approach; it follows the lives of eight people in different parts of India. Read reviews of this book by the <a href="http://bit.ly/2kARBrvu">Asian Review of Books</a>, by <a href="http://bit.ly/2LMEmRv">Livemint</a>, and the <a href="http://bit.ly/3MRVdcn">Deccan Chronicle</a>.
					<p>In fall 2019, DADDYKINS was part of the curriculum in a creative writing course, <a href="bit.ly/2kesfsu">Uses of Personal Experience</a>, at San Francisco State University. In January 2020, her books were featured at the <a href="bit.ly/1KalMohyd">Hyderabad Literary Festival</a> in India.</p>
					<p>Kalpana is an award-winning columnist for India Currents Magazine. <b>Karnatik Revival</b> won a New America Media prize. <b>Creating Beta Clones</b> and <b>From a Man Village into the Jungle</b> won The San Francisco Peninsula Press Club Greater Bay Area Journalism prizes. Kalpana's writings and commentatries have appeared in NPR, Business Week Online, San Jose Mercury News, San Francisco Chronicle and Better Homes and Gardens.</p>
					<p>She lives in Saratoga, California.</p>
				</div>
				<div>
					<img src="assets/aboutpicture.jpg">
				</div>
			</div>
		</template>
	</base-layout>
</template>

<script>
	import BaseLayout from './../components/BaseLayout.vue'

	export default {
		name: 'About',
		components: {
			BaseLayout
		}
	}
</script>

<style scoped>
	.container {
		grid-template-rows: auto auto;
	}

	.about {
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	.about div {
		width: 45%;
	}

	.headline {
		font-style: normal;
		font-weight: bold;
		text-decoration: underline;
	}

	img {
		width: 100%;
	}

	p {
		padding-bottom: 3%;
	}

	ul {
		padding-bottom: 5%;
		padding-left: 4%;
	}

</style>