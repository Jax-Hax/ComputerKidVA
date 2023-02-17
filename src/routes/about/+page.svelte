<script>
  let projects = [
		{ name: 'J---aiyznGQ', image: 'Keyboard Cat', time: '', dateFinished: 1, link: 'https://google.com', description: ''},
    { name: 'J---aiyznGQ', image: 'Keyboard Cat', time: '', dateFinished: 1, link: '', description: ''}
	];
</script>
<h1>Background</h1>
<p>
I have been coding for 6 years, and am currently a freshmen in high school. I have experience in many fields, since I have been trying to learn every major field of computer science before I choose my major in college. Those fields include: Game Development, Web Development, Server Management, Cybersecurity, IT, and Hardware Building/Repair. I am currently working on expanding my knowledge on Cybersecurity, and hoping to learn Machine Learning. My background allows me to be the perfect fit for most all of your projects, and if there is anything I don't know, contact me to ask for it, and I will try to learn it as quick as I can to help you.
</p>
<h1>Inspiration</h1>
<p>
I started out wanting to be a coder just because I love it, and eventually the salary also became another motivation. A couple of years ago, however, I started doing a lot of research into climate change (some of which is in the project below), and now I want to help contribute to stopping it. My main plan right now is to became a Machine Learning engineer, so that I can help make some sort of AI to contribute!
</p>
<h1>Projects</h1>
<section id="Grid">
{#each projects as project}
  <a href={project.link} target=”_blank”><div class="GridItem">
<img src="/checkmark(1).jpg" alt="Project">
<h1>Cybersecurity</h1>
<p>Time taken to make: </p>
</div></a>
{/each}
</section>
<style>
    #Grid{
        display: grid;
        grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
    }
    .GridItem{
        background: #ececec;
        border-radius: 30px;
    }
</style>