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
      projects = gameDev;
    }
	}
	/**
	 * @type {any[]}
	 */
	
  let compRepair = [
		{
			name: 'This website!',
			image: '/checkmark(1).jpg',
			time: '3 months',
			dateFinished: 2023,
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
  let gameDev = [
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

<h1>Background</h1>
<p>
	I have been coding for 6 years, and am currently a freshmen in high school. I have experience in
	many fields, since I have been trying to learn every major field of computer science before I
	choose my major in college. Those fields include: Game Development, Web Development, Server
	Management, Cybersecurity, IT, and Hardware Building/Repair. I am currently working on expanding
	my knowledge on Cybersecurity, and hoping to learn Machine Learning, as well as Electrical Engineering. My background allows me to be
	the perfect fit for most all of your projects, and at a low cost as well!
</p>
<h1>Inspiration</h1>
<p>
	I started out wanting to be a coder just because I love to code, and eventually the salary also became
	another motivation. A couple of years ago, however, I started doing a lot of research into climate
	change (some of which is in a project below), and now I want to help contribute to stopping it.
	My main plan right now is to became a Machine Learning engineer, so that I can help make some sort
	of AI to help!
</p>
<h1>Projects</h1>
<button on:click={() => setProject(0)}>Tech Support</button>
<button on:click={() => setProject(1)}>Web Design</button>
<button on:click={() => setProject(2)}>Computer Repair</button>
<button on:click={() => setProject(3)}>Game Design</button>
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
