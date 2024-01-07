<script lang="ts">
    import { writable } from "svelte/store";
    import type { Writable } from "svelte/store";
	let count: Writable<number> = writable(0);
	export { count };
</script>
<h3>This is Home page</h3>
<div class="text-center flex justify-center items-center">
    <button on:click={() => count.set($count - 1)}>-</button>
    <button>{$count}</button>
    <button on:click={() => count.set($count + 1)}>+</button>
</div>
<style>
    button {
        @apply px-4 py-2 m-2 text-2xl bg-cyan-600 rounded-md font-bold mx-1;
    }
</style>
