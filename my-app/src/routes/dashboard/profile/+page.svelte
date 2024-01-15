<script>
    /**
     * @type { { name: string; email: string; phone: string; } }
     */
	export let data;
</script>

<div class="max-w-md mx-auto">
	<h1 class="mb-4 text-2xl font-bold">Profile</h1>

	<div class="mb-4 text-lg font-bold text-orange-600">
		Name: {data.name}
	</div>
	<div class="mb-4 text-lg font-bold text-orange-600">Email: {data.email}</div>
	<div class="mb-4 text-lg font-bold text-orange-600">Phone: {data.phone}</div>
</div>

<style>
	/* Add your Tailwind CSS classes or custom styles here */
</style>
