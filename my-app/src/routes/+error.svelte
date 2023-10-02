<script>
import { page } from "$app/stores";
</script>
<div class="text-center mt-10">
	<h1 class="text-orange-600">{ $page.status }</h1>
	{#if $page.status == 404}
	<h2 class="text-orange-600">{"Page "+  $page.url.pathname.slice(1) + " " + $page.error.message }</h2>
	{:else}
	<h2 class="text-orange-600"> { $page.error.message }</h2>
	{/if}
</div>
