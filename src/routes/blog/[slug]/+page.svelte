<script>
	export let data;
</script>
<svelte:head>
    <title>{data.post.title}</title> 
	<meta name="description" content={data.post.metaDescription}>
</svelte:head>

<html lang="en">
	<div id="blogContainer">
		<h1>{data.post.title}</h1>
		<p style="padding: 1em 0; font-size: 1.5rem; color: grey">
			By Jax Bulbrook - {data.post.createdDate.substring(0, 10)} - {data.post.category}
		</p>
		<div style="text-align: center">
			<img src="/blog/{data.post.slug}.webp" alt={data.post.imageAlt} />
		</div>
		<body>
			{@html data.post.blog}
		</body>
	</div>

	<style>
		h3 {
			font-family: 'Open Sans', sans-serif;
		}
		#blogContainer {
			padding: 0 25vw;
			display: flex;
			flex-direction: column;
		}
		#blogContainer img {
			width: 50vw;
		}
		@media screen and (max-width: 980px) {
			#blogContainer {
				padding: 0 1em;
			}

			#blogContainer img {
				width: 50vw;
			}
		}
		body p {
			padding: 2% 0;
			font-size: 1.5rem;
		}
		ol,
		ul {
			padding-left: 2em;
		}
		li {
			font-size: 1.5rem;
			padding: 0.25em;
		}
	</style>
</html>
