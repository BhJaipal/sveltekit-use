<script>
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	/**
	 * @type { {name: string, path: string}[] }
	 */
	let routes = [
		{ name: 'Home', path: '/' },
		{ name: 'About', path: '/about' },
		{ name: "Login", path: '/dashboard/login' },
		{ name: "email", path: "/email" }
	];
	let navHeight = 'h-auto hidden';
	function toggleHeight() {
		if (navHeight == 'h-auto block') {
			navHeight = 'h-0 hidden';
		} else {
			navHeight = 'h-auto block';
		}
	}
</script>

<nav class="h-auto bg-indigo-800 border-b-4 border-b-sky-700">
	<div class="h-12 py-0 pl-2 text-left">
		<div class="inline-block">
			<button
				on:click={toggleHeight}
				class="w-10 h-8 pt-1 mt-2 ml-2 font-bold text-white bg-blue-700 rounded-md hover:bg-sky-700"
			>
				<i class="material-icons">menu</i>
			</button>
		</div>

		<div class="inline-block h-4 mb-2 ml-3 text-xl bg-indigo-800">Navbar</div>
	</div>
	<div class={navHeight}>
		{#each routes as route}
			<button
				on:click={() => goto(route.path)}
				class={$page.url.pathname === route.path
					? 'bg-indigo-700 w-full text-center text-lg border-0 h-[30px]'
					: 'bg-indigo-900 text-center text-lg w-full border-0 h-[30px]'}
			>
				<button>
					{route.name}
				</button>
			</button>
		{/each}
	</div>
</nav>
