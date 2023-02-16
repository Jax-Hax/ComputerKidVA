<html lang="en">
	<header>
		<span class="material-icons">computer</span>
		<h1 id="nav-title">ComputerKidVA</h1>
		<nav>
			<ul>
				<li><a href="/">Home</a></li>
				<li><a href="/about">About</a></li>
				<li><a href="/services">Services</a></li>
				<li><a href="/contact">Contact</a></li>
			</ul>
		</nav>
		<button class="headerbutton">Book</button>
	</header>
	<style>
		* {
			margin: 0;
			padding: 0;
			font-family: 'Arsenal', sans-serif;
			color: black;
			}

		h1, h2, button{
			font-family: 'Open Sans', sans-serif;
			letter-spacing: 0.02em;
		}
		.headerbutton:hover {
			background-color: white; /* Green */
			color: #0077b6;
			transform: translateY(-0.25em);
			transition: transform 0.25s;
			border: -2px solid #0077b6; /* Green */
			border-width: 1px;
			border-style: solid;
			margin: -1px;
		}
		.headerbutton {
			background-color: #0077b6;
			border: none;
			color: white;
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
		}
		header {
			display: flex;
			justify-content: space-between;
			padding: 2.5rem;
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
