<script>
    /**
     * @type { { name: string; email: string; phone: string; } }
     */
	export let data;
</script>

<div class="max-w-md mx-auto">
	<h1 class="mb-4 text-2xl font-bold">Profile</h1>

	<div class="mb-4">
		<label for="name" class="block mb-1">Name</label>
		<input
			type="text"
			id="name"
			value={data.name}
			class="w-full px-4 py-2 border rounded-md"
			readonly
		/>
	</div>

	<div class="mb-4">
		<label for="email" class="block mb-1">Email</label>
		<input
			type="email"
			id="email"
			value={data.email}
			class="w-full px-4 py-2 border rounded-md"
			readonly
		/>
	</div>

	<div class="mb-4">
		<label for="phone" class="block mb-1">Phone</label>
		<input
			type="text"
			id="phone"
			value={data.phone}
			class="w-full px-4 py-2 border rounded-md"
			readonly
		/>
	</div>
</div>

<style>
	/* Add your Tailwind CSS classes or custom styles here */
</style>
