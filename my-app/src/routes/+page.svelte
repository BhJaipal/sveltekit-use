<script lang="ts">
	import { count } from "$lib/store/count";
</script>
<h3>This is Home page</h3>
<div class="flex items-center justify-center text-center">
    <button on:click={() => count.set($count - 1)}>-</button>
    <button>{$count}</button>
    <button on:click={() => count.set($count + 1)}>+</button>
</div>
<style>
    button {
        @apply px-4 py-2 m-2 text-2xl bg-cyan-600 rounded-md font-bold mx-1;
    }
</style>
