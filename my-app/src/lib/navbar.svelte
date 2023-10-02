<script>
import { page } from "$app/stores";

/**
 * @type { {name: string, path: string}[] }
 */
let routes= [
	{ name: "Home", path: "/" },
	{ name: "About", path: "/about" },
	{ name: "Users", path: "/posts" }
];
let navHeight= "h-auto hidden";
function toggleHeight() {
	if (navHeight == "h-auto block") {
		navHeight = "h-0 hidden";
	} else {
		navHeight = "h-auto block";
	}
}
</script>
<nav class="bg-gray-900 h-auto border-b-sky-700 border-b-4">
	<div class="text-left pl-2 py-0 h-12">
		<div class="inline-block">
			<button on:click={toggleHeight} class="text-white font-bold bg-gray-800 hover:bg-sky-700 ml-2 rounded-md w-10 mt-2 h-8 pt-1">
			<i class="material-icons">menu</i>
			</button>
		</div>

		<div class="inline-block text-xl bg-gray-900 ml-3 mb-2 h-4">Navbar
		</div>
	</div>
	<div class={navHeight}>
		{#each routes as route}
		<button class={
			($page.url.pathname === route.path) ? "bg-gray-800 w-full text-center text-lg border-0 h-[30px]" : "bg-gray-900 text-center text-lg w-full border-0 h-[30px]"}>
			<a href={route.path}>{ route.name }</a>
		</button>
		{/each}
	</div>
</nav>
