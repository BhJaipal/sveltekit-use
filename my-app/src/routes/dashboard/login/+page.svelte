<script>
	import { goto } from "$app/navigation";

	let formData = {
		name: '',
		email: '',
		phone: 1234567890
	};
	let sent= false;
	let clicked= false;
	let res_ok= false;

	async function handleSubmit() {
    try {
        const response = await fetch("/database", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

		res_ok= true;
        if (!response.ok) {
            throw new Error(`Failed to submit form: ${response.statusText}`);
			res_ok= false;
        }
		sent = true;

        const result = await response.json();
        console.log("Form submitted successfully. Server response:", result);

        // Optionally, you can update the UI or navigate to another page.
        // For example, if you have a success page, you can navigate to it:
        // navigate('/success');
    } catch (error) {
		sent = false;
        console.error("Error submitting form:", error);
        // Handle the error appropriately, e.g., display an error message to the user.
    }
}

</script>

<form on:submit|preventDefault={handleSubmit} class="max-w-md mx-auto text-black">
	<div class="mb-4">
		<label for="name" class="block mb-1">Name</label>
		<input
			type="text"
			id="name"
			required
			bind:value={formData.name}
			class="w-full px-4 py-2 border rounded-md"
		/>
	</div>
	<div class="mb-4">
		<label for="email" class="block mb-1">Email</label>
		<input
			type="email"
			id="email"
			required
			bind:value={formData.email}
			class="w-full px-4 py-2 border rounded-md"
		/>
	</div>
	<div class="mb-4">
		<label for="phone" class="block mb-1">phone</label>
		<input
			id="phone"
			type="phone"
			placeholder="123-456-7890"
			required
			bind:value={formData.phone}
			class="w-full px-4 py-2 border rounded-md"
		/>
	</div>
	<div>
		<button type="submit" class="px-4 py-2 text-white bg-blue-500 rounded-md">Submit</button>

		{#if clicked}
		{#if (sent) && (res_ok)}
			<p class="text-green-500">Form submitted successfully</p>
			{setTimeout(() => {
				goto("/dashboard/profile");
			}, 1000)}
		{:else}
			<p class="text-red-500">Form submission failed</p>
		{/if}
		{/if}
	</div>
</form>

<style scoped>
	*{
		@apply text-black;
	}
	label{
		@apply text-white;
	}
</style>
