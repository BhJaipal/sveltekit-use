<script>
async function load() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return users;
}
let promise= load();
</script>

{#await promise then users}
{#each users as user}
<div class="user-data">
  <h3>{ user.name }</h3>
	<h6>email: { user.email }</h6>
	<h6>phone: { user.phone }</h6>
</div>
{/each}
{:catch}
<h3> Cannot fetch data</h3>
{/await}

<style>
.user-data{
	margin-left: 42px;
	padding-left: 20px;
	width: 300px;
	box-shadow: 5px 5px 5px #000;
	@apply bg-purple-950 mt-5 mb-5;
}
.user-data>h6{
  @apply font-normal;
}
</style>
