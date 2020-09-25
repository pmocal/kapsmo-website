<template>
	<base-layout>
		<template v-slot:title>
			<p class="headline">About</p>
		</template>
		<template v-slot:main>
			<div class="about">
				<div>
					<p>Education</p>
					<ul>
						<li>M.S., Computer Science, San Jose State University, June '89</li>
						<li>B.A., English, Madras University (India), June '81</li>
						<li>Post Graduate Diploma in Journalism, Madras (India)</li>
						<li>Diplome Superieur, Alliance Francaise de Madras (India)</li>
					</ul>
					<p>Writing</p>
					<ul>
						<li>Finished my first book. Representing agent Mita Kapur of Siyahi Inc.</li>
						<li>Second book in progress</li>
						<li>Senior contributor and columnist at India Currents Magazine</li>
						<li>Feature stories, essays and commentaries published in regional and national publications</li>
						<li>Travel story "Flora and Fauna in Madrid" anthologized in Traveler’s Tales</li>
					</ul>
					<p>Awards</p>
					<ul>
						<li>Third prize, 2014, San Francisco Peninsula Press Club, for India Currents column “From the Man Village into the Jungle”</li>
						<li>First prize, 2009, New America Media, for best feature in Entertainment category for India Currents story “Karnatik Revival”</li>
						<li>One-minute story pitch prize at the Pitchapalooza at Kepler’s Books, 2010</li>
						<li>Gold medalist, University of Madras, for performance in B. A., 1981</li>
						<li>Jawaharlal Nehru Memorial Award for excellence in B.A., 1981</li>
					</ul>
					<p>Corporate</p>
					<ul>
						<li>Software Development and Systems Administration (IBM, 1989—1999)</li>
					</ul>
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
		font-weight: bold;
		font-style: italic;
	}

	ul {
		padding-bottom: 5%;
		padding-left: 4%;
	}

</style>