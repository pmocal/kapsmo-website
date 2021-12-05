<template>
	<base-layout>
		<template v-slot:main>
			<p class="headline">Admin</p>
			<div v-if="!showAdmin" class="center">
				<p class="bold">Login</p>
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
					<br>
					<p>
						<label for="username">Username</label>
						<input
							type="text"
							id="username"
							name="username"
							v-model="username"
						>
					</p>
					<p>
						<label for="password">Password</label>
						<input
							type="text"
							id="password"
							name="password"
							v-model="password"
						>
					</p>
					<br>
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
					Location: <input type="text" name="location" v-model="location" id="location">
					Photo: <input type="file" id="img" name="img">
					<input
						type="submit"
						value="Submit"
						@click="submitPhoto()"
					>
				</form>
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
					Title: <input
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
							menubar: 'insert',
							plugins: [
								'advlist autolink lists link image charmap print preview anchor',
								'searchreplace visualblocks code fullscreen',
								'insertdatetime media table paste code help wordcount'
							],
							toolbar:
								'link undo redo | formatselect | bold italic backcolor | \
								alignleft aligncenter alignright alignjustify | \
								bullist numlist outdent indent | removeformat | help'
						}"
					/>
					Timestamp: <input
						type="date"
						id="timestamp"
						name="timestamp"
						v-model="timestamp"
					>
					Link: <input
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
						<p class="postBody" v-html="post.text"></p>
						<div class="postFooter">
							<p>{{ new Date(post.timestamp).getMonth() + 1 }}/{{ new Date(post.timestamp).getDate() + 1 }}/{{ new Date(post.timestamp).getFullYear() }}</p>
							<a :href="post.link">Link</a>
						</div>
						<button @click="deletePost(post._id)">Delete post</button>
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
		name: 'Admin',
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

					let response = await fetch(this.$hostname + "/auth/login",
						{
							method: 'POST',
							mode: 'cors',
							cache: 'no-cache',
							credentials: 'include',
							headers: {
								'Content-Type': 'application/json'
							},
							redirect: 'follow',
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
					this.dataReady = false;
					await fetch(this.$hostname + "/posts/create",
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
									'link': this.link,
									'timestamp': this.timestamp || Date.now()
								}
							)
						}
					);
					this.loadPosts();
				}
			},
			submitPhoto: async function() {
				const formData = new FormData();
				const fileField = document.getElementById("img");
				formData.append('location', this.location);
				formData.append('img', fileField.files[0]);
				// save `fileField.files[0])` to server
				await fetch(this.$hostname + "/photos/create",
					{
						method: 'POST',
						mode: 'cors',
						credentials: 'include',
						body: formData
					}
				);
			},
			loadPosts: async function() {
				let response = await fetch(this.$hostname + "/posts");
				this.posts = await response.json();
				if (this.posts != null) {
					this.posts.sort(function(a,b){
						return a.timestamp.localeCompare(b.timestamp);
					}).reverse()
				}
				this.dataReady = true;
			},
			deletePost: async function(id) {
				this.dataReady = false;
				await fetch(this.$hostname + "/posts/" + id,
					{
						method: 'DELETE',
						mode: 'cors',
						cache: 'no-cache',
						credentials: 'include',
						redirect: 'follow',
						referrerPolicy: 'no-referrer'
					}
				);
				this.loadPosts();
			}
		},
		data () {
			return {
				posts: null,
				location: null,
				dataReady: false,
				errors: [],
				username: null,
				password: null,
				showAdmin: false,
				title: null,
				text: null,
				timestamp: null,
				link: null,
				site: "http://localhost:3000"
				// site: "https://salty-temple-72490.herokuapp.com"
			}
		},
		async created() {
			this.loadPosts();
		}
	}
</script>

<style scoped>
	form * {
		margin: 1%;
	}

	.bold {
		font-weight: bold;
	}

	.container {
		grid-template-rows: auto auto;
	}

	.center {
		text-align: center;
	}

	.block {
		display: block;
	}

	.headline {
		font-style: normal;
		font-weight: bold;
		text-decoration: underline;
		padding: 2%;
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