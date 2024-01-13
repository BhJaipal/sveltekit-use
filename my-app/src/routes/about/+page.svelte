<script>
	import { count } from '$lib/store/count';
	import Loading from '$lib/Loading.svelte';
	export let data= {};
</script>

<div class="text-xl font-bold text-center">
	<button on:click={() => (count.update((n) => n - 1))}>-</button>
	<button>{$count}</button>
	<button on:click={() => (count.update((n) => n + 1))}>+</button>

	{#await data}
		<Loading />
	{:then out}
		{#each data.data as post}
			<h3>{post.title}</h3>
		{/each}
	{/await}
</div>

<style>
	button {
        @apply px-4 py-2 m-2 text-2xl bg-cyan-600 rounded-md font-bold mx-1;
    }
</style>