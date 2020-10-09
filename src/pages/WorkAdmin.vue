<template>
	<base-layout>
		<template v-slot:main>
			<p class="headline">Admin</p>
			<div v-if="!showAdmin">
				<p>Login</p>
				<form
					@submit.prevent
				>
					<p v-if="errors.length">
						<b>Please correct the following error(s):</b>
						<ul>
							<li
								v-for="error in errors"
								:key="error"
							>
								{{ error }}
							</li>
						</ul>
					</p>
					
					<p>
						<label for="username">Username</label><br>
						<input
							type="text"
							id="username"
							name="username"
							v-model="username"
						>
					</p>

					<p>
						<label for="password">Password</label><br>
						<input
							type="text"
							id="password"
							name="password"
							v-model="password"
						>
					</p>
					<input
						type="submit"
						value="Submit"
						@click="checkForm()"
					>
				</form>
			</div>
			<div v-if="showAdmin">
				<form
					@submit.prevent
				>
					<p v-if="errors.length">
						<b>Please correct the following error(s):</b>
						<ul>
							<li
								v-for="error in errors"
								:key="error"
							>
								{{ error }}
							</li>
						</ul>
					</p>
					<input
						type="text"
						id="title"
						name="title"
						v-model="title"
					>
					<editor
						api-key="no-api-key"
						v-model="text"
						:init="{
							height: 500,
							menubar: false,
							plugins: [
								'advlist autolink lists link image charmap print preview anchor',
								'searchreplace visualblocks code fullscreen',
								'insertdatetime media table paste code help wordcount'
							],
							toolbar:
								'undo redo | formatselect | bold italic backcolor | \
								alignleft aligncenter alignright alignjustify | \
								bullist numlist outdent indent | removeformat | help'
						}"
					/>
					<input
						type="text"
						id="link"
						name="link"
						v-model="link"
					>
					<input
						type="submit"
						value="Submit"
						@click="submitPost()"
					>
				</form>
				<ol v-if="dataReady">
					<li
						v-for="post in posts"
						:key="post._id"
					>
						<h1>{{ post.title }}</h1>
						<p class="postBody">{{ post.text }}</p>
						<div class="postFooter">
							<p>{{ new Date(post.timestamp).getMonth() }}/{{ new Date(post.timestamp).getDate() }}/{{ new Date(post.timestamp).getFullYear() }}</p>
							<a :href="post.link">Link</a>
						</div>
						<hr>
					</li>
				</ol>
			</div>
		</template>
	</base-layout>
</template>

<script>
	import BaseLayout from './../components/BaseLayout.vue'
	import Editor from '@tinymce/tinymce-vue'

	export default {
		name: 'Work',
		components: {
			BaseLayout,
			'editor': Editor
		},
		methods: {
			checkForm: async function() {
				this.errors = [];

				if (!this.username) {
					this.errors.push("Username required");
				}
				if (!this.password) {
					this.errors.push("Password required");
				}

				if (!this.errors.length) {

					let response = await fetch(this.site + "/auth/login",
						{
							method: 'POST',
							mode: 'cors',
							cache: 'no-cache',
							credentials: 'include',
							headers: {
								'Content-Type': 'application/json'
							},
							redirect: 'follow',
							referrerPolicy: 'no-referrer',
							body: JSON.stringify(
								{
									'username': this.username,
									'password': this.password
								}
							)
						}
					);
					var responseJson = await response.json();
					if (Array.isArray(responseJson)) {
						this.showAdmin = true;
					}
				}
			},
			submitPost: async function() {
				this.errors = [];
				if (!this.title) {
					this.errors.push("Title required");
				}
				if (!this.text) {
					this.errors.push("Text required")
				}
				if (!this.errors.length) {
					let response = await fetch(this.site + "/posts/create",
						{
							method: 'POST',
							mode: 'cors',
							cache: 'no-cache',
							credentials: 'include',
							headers: {
								'Content-Type': 'application/json'
							},
							redirect: 'follow',
							referrerPolicy: 'no-referrer',
							body: JSON.stringify(
								{
									'title': this.title,
									'text': this.text,
									'link': this.link
								}
							)
						}
					);
					var responseJson = await response.json();
					console.log(responseJson);
				}
			}
		},
		data () {
			return {
				posts: null,
				dataReady: false,
				errors: [],
				username: null,
				password: null,
				showAdmin: false,
				title: null,
				content: null,
				link: null,
				site: "http://localhost:3000"
				// site: "https://salty-temple-72490.herokuapp.com"
			}
		},
		async created() {
			let response = await fetch(this.site + "/posts");
			this.posts = await response.json();
			if (this.posts != null) {
				this.posts.sort(function(a,b){
					return a.timestamp.localeCompare(b.timestamp);
				}).reverse()
			}
			this.dataReady = true;
		}
	}
</script>

<style scoped>
	.container {
		grid-template-rows: auto auto;
	}

	.headline {
		font-style: normal;
		font-weight: bold;
		text-decoration: underline;
	}

	.postBody {
		margin-left: 5%;
		margin-top: 2%;
		white-space: pre-line;
	}

	.postFooter {
		display: flex;
		justify-content: space-between;
		margin: 3%;
	}
</style>