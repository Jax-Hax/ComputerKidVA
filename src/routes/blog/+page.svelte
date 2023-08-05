<script>
	export let data;
</script>
<svelte:head>
	<title>Computer Guides</title>
	<meta name="description"
		content="Learn about computers from someone with 7 years of experience completely for free!">
</svelte:head>
<html lang="en">
	<div id="blog">
		<h1>BLOG</h1>
		<h2>Popular Posts</h2>
		{#each data.popular as { slug, title }}
			<p style="font-size: 1.4rem;"><a href="/blog/{slug}">{title}</a></p>
		{/each}
		<hr style="margin: 3em 0" />
		<h2>Recent Posts</h2>
		{#each data.recent as { slug, title, category, imageAlt, createdDate, introText }}
			<section class="post">
				<img src="/blog/{slug}.webp" alt={imageAlt} />
				<div>
					<h2 style="font-size: 2rem; padding-bottom:0.5em"><a href="/blog/{slug}">{title}</a></h2>
					<p style="padding-bottom:0.5em">{createdDate.substring(0, 10)} | Jax Bulbrook</p>
					<p>{introText}</p>
				</div>
			</section>
		{/each}
	</div>
	<style>
		#blog {
			padding: 0 25vw;
			display: flex;
			flex-direction: column;
		}

		@media screen and (max-width: 980px) {
			#blog {
				padding: 0 1em;
			}

			#blog img {
				width: 15vw;
				height: 15vw;
			}
		}
		.post {
			display: flex;
			flex-direction: row;
			align-items: center;
			gap: 1em;
			padding: 1em 0;
		}
		.post a {
			text-decoration: none;
			cursor: pointer;
		}
		.post p {
			font-size: 1.2rem;
			color: grey;
		}
		#blog h1 {
			font-size: 4rem;
			padding-bottom: 0.5em;
		}
		#blog h2 {
			font-size: 2.5rem;
			padding-bottom: 1em;
		}
		.post img {
			width: 288px;
			height: 288px;
			object-fit: cover;
		}
	</style>
</html>
