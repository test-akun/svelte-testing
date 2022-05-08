<script>
	let items = [
		{id: 1, name: "Masker Covid Premium", qty: 2, price: 150000},
		{id: 2, name: "Masker Covid Platinum", qty: 2, price: 250000},
	]
	$: total = items.reduce((acc, {qty, price}) => {
		return acc + (price * qty)
	}, 0)
</script>

<main>
	<h1>Shopping Cart</h1>
	<ul>
		{#each items as item}
			<li>
				<span>{item.name}</span>
				<span>Rp. {item.price}</span>
				<span><input type="number" name="qty" bind:value={item.qty}/></span>
			</li>
		{/each}
		<li>
			<span>TOTAL: <strong>Rp. {total}</strong></span>
		</li>
	</ul>
</main>
