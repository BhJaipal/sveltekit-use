<script>
	import { onMount } from 'svelte';
	import { count } from '../+page.svelte';
	import Loading from '$lib/Loading.svelte';
    /**
     * @type {import('./$types').PageData}
     */
    let posts;
	onMount(async () => {
		let res = await fetch('https://jsonplaceholder.typicode.com/posts');
		posts = await res.json();
	});
</script>

<div class="text-center text-xl font-bold">
	Count is {$count}
</div>
{#await posts}
	<Loading />
{:then posts}
	<ul>
        {#each posts as post}
            <li>{post.title}</li>
        {/each}
	</ul>
{/await}
