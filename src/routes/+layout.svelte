<html lang="en">
	<header>
		<img src="/ComputerKidVALogo.webp" alt="the ComputerKidVA logo, a teenage boy sitting in front of a computer" style="width: min(9vw,6em)">
		<h1 id="nav-title"><a href="/" style="text-decoration: none">ComputerKidVA</a></h1>
		<nav>
			<ul>
				<li><a href="/">Home</a></li>
				<li><a href="/experience">Experience</a></li>
				<li><a href="/blog">Blog</a></li>
				<li><a href="/contact">Contact</a></li>
			</ul>
		</nav>
		<a href="/contact"><button class="headerbutton">Book</button></a>
	</header>
	<style>
		* {
			margin: 0;
			padding: 0;
			font-family: 'Arsenal', sans-serif;
			color: black;
		}
		
		h1,
		h2,
		button {
			font-family: 'Open Sans', sans-serif;
		}
		button {
		background-color: #0077b6;
		border: none;
		color: white;
		padding: 1em 2em;
		border-radius: 19px;
		text-align: center;
		text-decoration: none;
		  cursor: pointer;

		display: inline-block;
		font-size: 1rem;
	}
	button:hover {
		background-color: white; /* Green */
		box-shadow: 0 2px;
		color: #0077b6;
		transform: translateY(-0.25em);
		transition: transform 0.25s;
		border: -2px solid #0077b6; /* Green */
		border-width: 1px;
		border-style: solid;
		margin: -1px;
	}
		h1{
			font-size: 3.5rem;
		letter-spacing: -3px;
		}
		@media screen and (max-width: 768px) {
			#nav-title{
				display: none
			}
		}
		.headerbutton:hover {
			background-color: white; /* Green */
			color: #0077b6;
			transform: translateY(-0.25em);
			transition: transform 0.25s;
			border: -2px solid #0077b6; /* Green */
			border-width: 1px;
			border-style: solid;
		}
		.headerbutton {
			background-color: #0077b6;
			border: none;
			color: white;
			border: -2px solid #0077b6;
			padding: 0.75em 2em;
			border-radius: 19px;
			text-align: center;
			text-decoration: none;
			display: inline-block;
			font-size: 1rem;
		}
		header li {
			list-style: none;
			display: inline-block;
			padding: 0 20px;
			font-size: 1.75rem;
		}
		header {
			display: flex;
			justify-content: space-between;
			padding: 1.5em;
			align-items: center;
		}
		header a {
			text-decoration: none;
			color: #555;
			transition: all 0.3s ease 0s;
		}

		header a:hover {
			color: #0098fe;
			text-decoration: underline;
		}
	</style>
</html>
<slot />
