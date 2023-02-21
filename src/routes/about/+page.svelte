<script>
  /**
	 * @param {number} projectNum
	 */
  function setProject(projectNum) {
		if(projectNum == 0){
      projects = techSupport;
    }
    else if(projectNum == 1){
      projects = webDes;
    }
    else if(projectNum == 2){
      projects = compRepair;
    }
    else{
      projects = server;
    }
	}
	/**
	 * @type {any[]}
	 */
	
  let compRepair = [
		{
			name: 'Successfully built and upgraded multiple desktops.',
			image: '/checkmark(1).jpg',
			time: '2 days each',
			dateFinished: 2020-22,
			link: 'https://computerkidva.com',
			description: 'A website for my small business.'
		}
	];
  let techSupport = [
		{
			name: 'a!',
			image: '/checkmark(1).jpg',
			time: '3 months',
			dateFinished: 2023,
			link: 'https://computerkidva.com',
			description: 'A website for my small business.'
		}
	];
  let webDes = [
		{
			name: 'b!',
			image: '/checkmark(1).jpg',
			time: '3 months',
			dateFinished: 2023,
			link: 'https://computerkidva.com',
			description: 'A website for my small business.'
		}
	];
  let server = [
		{
			name: 'c!',
			image: '/checkmark(1).jpg',
			time: '3 months',
			dateFinished: 2023,
			link: 'https://computerkidva.com',
			description: 'A website for my small business.'
		}
	];
  let projects = techSupport;
</script>
<section id="aboutMeHeader">
<h1>Jax Bulbrook</h1>
<p>I am a Systems Engineer, doing both hardware (tech support, product consulting, server management, and computer building) and software (website and game development)</p>
</section>
<h1>Projects</h1>
<button on:click={() => setProject(0)}>Tech Support</button>
<button on:click={() => setProject(1)}>Web/Game Design</button>
<button on:click={() => setProject(2)}>Computer Repair</button>
<button on:click={() => setProject(3)}>Server Management</button>
<section id="Grid">
	{#each projects as project}
		<a href={project.link} target="”_blank”"
			><div class="GridItem">
				<img src={project.image} alt={'Picture of ' + project.name} />
				<h1>{project.name}</h1>
				<p>Completed in {project.dateFinished} after {project.time}.</p>
			</div></a
		>
	{/each}
</section>

<style>
  #aboutMeHeader{
    padding: 8em 3em;
  }
  p{
    font-size: 2rem;
  }
  h1{
    font-size: 3rem;
  }
	#Grid {
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	}
	.GridItem {
		background: #ececec;
		border-radius: 30px;
		aspect-ratio: 19/10;
		border: 1px solid #bbb;
    padding: 1em;
		max-width: 70%;
		display: flex;
		flex-direction: column;
		align-items: center;

		justify-content: center;
	}
	.GridItem img {
		width: 80%;
		max-height: 100%;
		object-fit: contain;
	}
</style>
