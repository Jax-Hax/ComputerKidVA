<script>
    let minPrice = 10;
    let maxPrice = 500;
    let value = 0;
    let computers = [
		{
			price: 100,
			name: 'SPECIAL: Lenovo Thinkpad off Ebay',
            img: ''
		}
	];
</script>
<input type="range" bind:value={minPrice} min=0 max=100>
{value}
{#each computers as computer}
{#if computer.price >= minPrice && computer.price <= maxPrice }
<div>
    {computer.name}
</div>
{/if}
{/each}