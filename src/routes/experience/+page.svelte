<script>
	let hardwareOpen = true;
	let softwareOpen = true;
	let isHardware = true;
</script>
<svelte:head>
	<title>7 Years of Experience for $30 an Hour</title>
	<meta name="description"
		content="Get professional help from someone with years of experience building, repairing, and improving computers.">
</svelte:head>
<body>
	<h1>Experience</h1>
	<div style="display: flex; flex-direction: row">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			class:notSelected={!isHardware}
			class:selected={isHardware}
			style="padding: 2em 0; border: 1px solid black; border-radius: 1.5em 1.5em 0 0; width: 50vw; cursor: pointer; text-align: center"
			on:click={() => (isHardware = true)}
		>
			Hardware
		</div>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			class:notSelected={isHardware}
			class:selected={!isHardware}
			style="padding: 2em 0; border: 1px solid black; border-radius: 1.5em 1.5em 0 0; width: 50vw; cursor: pointer; text-align: center"
			on:click={() => (isHardware = false)}
		>
			Software
		</div>
	</div>
	{#if isHardware}
		<div class="container">
			<section>
				<h2>Built two desktop computers</h2>
				<p>
					I've built two computers, once when I was 11 and once when I was 13. This included
					successfully sourcing all the necessary components, assembling them, connecting
					everything, and installing the operating system. I still use them to this day, and also
					repair and upgrade them occasionally.
				</p>
				<img style="max-width: min(80vw,40em); max-height: 100%" src="desktop.webp" alt="a desktop computer's parts, like the motherboard and cpu, fully assembled" />
			</section>
			<section>
				<h2>Bought and Repaired eBay Laptops</h2>
				<p>
					I purchased and repaired two Lenovo Thinkpad laptops off of eBay for $50 for myself and my
					sister. We continue to use them when we travel to play games like Minecraft and Rocket
					League, plus I use them for coding.
				</p>
				<h3>Lenovo Thinkpad</h3>
				<img style="max-width: min(80vw,40em); max-height: 50%" src="laptop.webp" alt="two eBay Lenovo Thinkpad laptops with a keyboard next to them" />
			</section>
			<section>
				<h2>Server Setup and Repair</h2>
				<p>
					I setup VMWare ESXI on this Dell Poweredge R710 server for large calculations. I also run
					a separate smaller Proxmox server for my whole family that includes things like ad
					blocking, website hosting, storing data, and password management.
				</p>
				<h3>Dell Poweredge R710</h3>
				<img style="max-width: min(80vw,40em); max-height: 50%" src="server.webp" alt="a Dell Poweredge R710 server" />
			</section>
			<section>
				<h2>3D Printer</h2>
				<p>
					I assembled an Ender 3 3D printer from scratch using just the
					components provided. This hands-on process has granted me valuable expertise in
					configuring and operating 3D printers, as well as honing my skills in designing and
					sourcing models, and troubleshooting and repairing any issues that arise.
				</p>
				<h3>Ender 3</h3>
				<img style="max-width: min(80vw,40em); max-height: 50%" src="3dprinter.webp" alt="an Ender 3 3D printer" />
				<h3>Example of a 3d print</h3>
				<img style="max-width: min(80vw,40em); max-height: 50%" src="3dprint.webp" alt="an example of a 3d print, which is a city on the moon" />
			</section>
			<section>
				<h2>Arduino</h2>
				<p>
					I have an Arduino Uno that I have used to build multiple projects, and am looking into
					building my own custom computer in the future!
				</p>
				<h3>Arduino</h3>
				<img style="max-width: min(80vw,40em); max-height: 50%" src="arduino.webp" alt="an arduino uno connected to a breadboard with other parts like a LED display" />
			</section>
		</div>
	{:else}
		<div class="container">
			<section>
				<h2>Educational Game</h2>
				<p>
					I developed a custom educational game specifically designed to assist my sister in learning math facts during her elementary school years. The game incorporates a fast-paced question-and-answer format, where correctly answering questions earns currency for a tower defense game. Additionally, I personally hand-drew and modeled all the artwork featured in the game.
				</p>
				<h3>Game Screen</h3>
				<img style="max-width: min(80vw,40em); max-height: 100%" src="blankmap.webp" alt="an educational tower defense game made in the Unity game engine" />
				<h3>Select Map Screen</h3>
				<img style="max-width: min(80vw,40em); max-height: 100%" src="selectscreen.webp" alt="a map selection screen for the tower defense game" />
			</section>
			<section>
				<h2>Machine Learning</h2>
				<p>
					I have one machine learning project that classifies different types of Arduinos currently available to the
					public and more on the way. 
					<a href="https://jaxhax-arduinoclassifier.hf.space">Here</a> is the app if you want to try
					it out, or you can use the interactive screen below!
				</p>
				<iframe
					src="https://jaxhax-arduinoclassifier.hf.space"
					frameborder="0"
					width="100%"
					height="500"
					title="Arduino Classifier"
				/>
			</section>
			<section>
				<h2>3D Website Design</h2>
				<p>
					I made a website mimicing Natural Selection for the SvelteHack competition. Visitors can manipulate 47 different inputs (such as camouflage, speed, gene mutations, hunger, etc) to see how it impacts mice (small squares), snakes (long rectangles), and cats (large squares).
					<a href="https://naturalselection.computerkidva.com">Here</a> is the app if you want to try
					it out! The picture below is just an image and is not interactable.
				</p>
				<img
					style="max-width: min(80vw,40em); max-height: 100%"
					src="naturalselection.webp"
					alt="screen in 3D with animals such as cats and snakes running along the ground in a simulation"
				/>
			</section>
			<section>
				<h2>System Administration</h2>
				<p>
					I have run a home server for about a year now, trying all kinds of different operating
					systems to familiarize myself with everything that is IT. I have experience with Proxmox,
					Cockpit, Linux, and ESXi, as well as software like PiHole, VaultWarden, and OpnSense.
				</p>
				<h3>Proxmox</h3>
				<img style="max-width: min(80vw,40em); max-height: 100%" src="proxmox.webp" alt="Proxmox" />
				<h3>Cockpit</h3>
				<img style="max-width: min(80vw,40em); max-height: 100%" src="cockpit.webp" alt="Cockpit" />
			</section>
			<section>
				<h2>Experience with Design</h2>
				<p>
					I created art in Blender (3D modeling) and Gimp (2D art) for the educational
					game mentioned above, as well as designed multiple websites including this one.
					Here is an example of a 3D model of a donut made in Blender.
				</p>
				<img style="max-width: 100%; max-height: 100%" src="donut.webp" alt="donut" />
			</section>
			<section>
				<h2>Game Jams</h2>
				<p>
					I created various projects while participating in several 2-day competitions. Both of these were made over
					three years ago, so you can see how far I have come. <a
						href="https://jax-hax.itch.io/escape">Here</a
					>
					is one where the game mechanic is rewinding time, and
					<a href="https://jax-hax.itch.io/cant-stop">here</a> is the other, a platformer where you cannot
					stop moving!
				</p>
			</section>
		</div>
	{/if}
</body>

<style>
	.notSelected {
		background-color: #e1e1e1;
	}
	.notSelected:hover{
		background-color: #ececec;
	}
	.selected {
		background-color: #ffffff;
	}
	h1 {
		text-align: center;
		padding: 1em;
		background: linear-gradient(90deg, #1037a3, #0098fe);
		color: white;
	}
	body {
		max-width: 100%;
		overflow-x: hidden;
		height: auto !important;
	}
	.container {
		background-color: #f4f4f4;
		border: 1px solid black;
	}
	section {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 3em 4vw;
		justify-content: space-between;
		gap: 1rem;
	}
</style>
