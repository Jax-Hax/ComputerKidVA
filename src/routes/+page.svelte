<body>
	<section id="attentioncatcher">
		<div>
			<h1>Tech troubles? Want an easy solution?</h1>
			<p>
				This is the site for all your tech needs, from tech support, to website design, to help
				picking out a new computer, and more!
			</p>
			<button> Website </button>
			<button> Tech Support </button>
		</div>
		<div>
			<img src="favicon.png" alt="" />
		</div>
	</section>
	<section id="eyecatcher2">
		<h1 style="padding-bottom: 1em">The solution to all of your tech troubles</h1>
		<div class="row">
			<div class="lineAbove">
				<h2>Website design</h2>
				<p>Get a custom-coded website tailored perfectly to your needs.</p>
			</div>
			<div class="lineAbove">
				<h2>Tech support</h2>
				<p>Help with issues, slow computers, and even product repair!</p>
			</div>
			<div class="lineAbove">
				<h2>Product consulting</h2>
				<p>Recommendations for anything from a new laptop to voice controlled smart light bulbs.</p>
			</div>
		</div>
		<a href="/about">
			<button> More about me </button>
		</a>
	</section>
	<section id="webdesign">
		<div>
			<img src="favicon.png" alt="" />
		</div>
		<div>
			<h1>Website design made easy</h1>
			<p>
				A website can help immeasurably in promoting your business or resume, with anything from a
				simple menu for a restaurant to a 3d animated portfolio.
			</p>
			<ul id="checkMarkFlex">
				<div>
					<li class="checkMarkList">Affordable prices</li>
					<li class="checkMarkList">Customizable choices</li>
					<li class="checkMarkList">Amazing looking websites</li>
				</div>
				<div>
					<li class="checkMarkList">Efficient load times</li>
					<li class="checkMarkList">Website hosting</li>
					<li class="checkMarkList">Open source code</li>
				</div>
			</ul>

			<a href="/services/webdev">
				<button> Book a website </button>
			</a>
		</div>
	</section>
	<section id="techsupport">
		<h1>Tech support for an affordable price</h1>
		<p>
			Do you need help picking out a new computer, or fixing your current one, but don't want to pay
			top dollar to do so? I can help for only $30 to start, plus $15 per hour.
		</p>

		<a href="/services/techsupport">
			<button> Book a tech support session </button>
		</a>
		<a href="/services/computers">
			<button> Pick out the perfect laptop for you </button>
		</a>
		<p>*If tech support exceeds an hour, there will be an additional $20 per hour, rounded up.</p>
	</section>
	<section id="aboutme">
		<h1>About me</h1>
		<p>
			I am a programmer at the Math and Science program at Clover Hill. I have been programming for
			6 years, in a variety of languages including C# with Unity, Python with Pygame, and
			HTMl/CSS/Javascript with Sveltekit.
		</p>
		<a href="/about">
			<button> More about me </button>
			
		</a>
	</section>
	<section id="contact">
		<h1>Any questions?</h1>
		<p>
			Feel free to contact me at the button below and I will respond to you within 1-3 business
			days.
		</p>
		<a href="/contact">
			<button> Contact me </button>
		</a>
	</section>
</body>

<!--
    Color scheme:
blue dark to light
03045e
0077b6
00b4d8
90e0ef
caf0f8
orange
fb8500
fonts:
font-family: 'Arsenal', sans-serif;
font-family: 'Open Sans', sans-serif;
  -->
<style>
	body {
		max-width: 100%;
		overflow-x: hidden;
		height: auto !important;
	}

	section {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 200px 4vw;
		justify-content: space-between;
		color: white;
		gap: 1rem;
	}
	#attentioncatcher {
		background: linear-gradient(90deg, #1037a3, #0098fe);
	}
	#attentioncatcher h1 {
		font-size: 4.5rem;
		color: white;
	}
	#attentioncatcher p {
		color: white;
		font-size: 1.5rem;
		padding-bottom: 2em;
	}
	#aboutme{
		background: linear-gradient(90deg, #1037a3, #0098fe);
	}
	#aboutme p, #aboutme h1{
		color: white
	}
	.lineAbove {
		border-top: 1px solid black;
		padding: 2em 1em;
	}
	.lineAbove h2,
	.lineAbove p {
		color: black;
	}
	#eyecatcher2 h1 {
		color: black;
		font-size: 2.5rem;
	}
	@media screen and (min-width: 768px) {
		h1 {
			width: 66%;
		}
		#attentioncatcher {
			flex-flow: row nowrap;
		}
		#webdesign {
			flex-flow: row nowrap;
			background-color: #eee;
		}
		p {
			width: 66%;
		}
		img {
			object-fit: contain;
		}
		.row {
			display: flex;
			flex-flow: row nowrap;
			justify-content: space-between;
			gap: 1rem;
		}
	}
	
	#attentioncatcher button {
		background-color: #fb8500;
		border: -2px solid #fb8500;
	}
	#attentioncatcher button:hover {
		background-color: white; /* Green */
		color: #fb8500;
		border: -2px solid #fb8500; /* Green */
		margin-bottom: -2px;
	}
	
	.checkMarkList {
		margin: 0;
		padding: 5px 0 6px 25px;
		list-style: none;
		background-image: url('checkmark(1).jpg');
		background-repeat: no-repeat;
		background-position: left center;
		background-size: 20px;
	}
	#checkMarkFlex {
		display: flex;
		flex-direction: row;
		gap: 2rem;
	}
</style>
