<template>
	<div ref="outer" class="outer">
		<div class="inner1">
			<img class="cover" :src="'assets/' + view + '.jpg'">
		</div>
		<div class="inner2">
			<h1>{{title}}</h1>
			<p>{{para1}}</p>
			<p>{{para2}}</p>
			<div class="flex-container">
				<a href="https://www.amazon.com/Daddykins-Memoir-My-Father-I/dp/9386349531">
					<img class="amazon" src="assets/media/available_at_amazon_1200x600.png">
				</a>
				<a :href="href">
					<img class="publisher" :src="'assets/media/' + view + 'publisher.png'">
				</a>
				<a href="https://www.goodreads.com/en/book/show/41139964-daddykins">
					<img class="goodreads" src="assets/media/goodreads_icon_100x100.png">
				</a>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'WorkDetail',
		props: {
			'view': String,
		},
		data() {
			return {
				title: "",
				para1: "",
				para2: "",
				href: "",
			}
		},
		methods: {
			setData() {
				if (this.view === "daddykins") {
					this.title = "Daddykins: A Memoir of My Father and I";
					this.para1 = "When journalist Kalpana Mohan's elderly father falls ill in Chennai, she is on the next flight over from California and the home she has shared with her husband for three decades. Caring for her sometimes cranky, sometimes playful, and always adored father at his home in Chennai, Mohan sets out to piece together an account of her father's life, from his poverty-stricken childhood in a village in south India, to his arranged marriage, to his first job in the city, all the while coming to terms with his inevitable passing.";
					this.para2 = "Mohan's tender, moving, and sometimes hilarious memoir is an account of a changing India captured in her father's life, from the sheer feat of surviving poverty in I920s India of his birth, to witnessing key moments in the nation's history and changing alongside them. Above all, Daddykins is an intimate and deeply relatable account of our relationships with our parents whatever our age, and the shared experiences of love and grief that unite us all.";
					this.href = "https://www.bloomsbury.com/in/daddykins-9789385936517/";
				} else if (this.view === "anenglishmadeinindia") {
					this.title = "An English Made in India: How a Foreign Language Became Local";
					this.para1 = "In An English Made in India, the author delves into the various aspects of Indian English—as lingua franca, colonial bequest, the language of the elite and those who aspire to elite status. She explores the English language’s earliest influences on Indian languages (and vice versa), the evolution of Indian English after independence and the way the language is spoken today. She talks to people from different parts of the country to create a colourful portrait of the ways in which the English language has influenced different segments of Indian society.";
					this.para2 = "The book is an entertaining narrative about the myriad Indianisms to be found in the English used by a large percentage of Indians; the growing importance of Indian English in a world of many Englishes; the ongoing tussle between the elite who speak the King’s English and those who speak in their mother tongue or mother-tongue-accented English; the effect of the IT boom on global English; and the changing attitudes of young Indians towards a language introduced by the Raj hundreds of years ago.";
					this.href = "http://www.alephbookcompany.com/book/an-english-made-in-india-how-a-foreign-language-became-local/";
				}
				window.scrollTo(0, this.$refs.outer.scrollHeight);
			}
		},
		mounted() {
			this.setData();
		},
		watch: {
			view: function() {
				this.setData();
			}
		}
	}
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
	padding-bottom: 0;
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

.cover {
	width: 100%;
}

.flex-container {
	display: flex;
	justify-content: space-between;
	width: 100%;
	padding-top: 2%;
	align-items: center;
}

.amazon {
	height: 80px;
}

.goodreads {
	height: 50px;
}

.publisher {
	height: 40px;
	padding-right: 7%;
}
</style>