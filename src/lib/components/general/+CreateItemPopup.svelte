<script lang="ts">
	import { goto } from '$app/navigation';
</script>

<div class="card p-4 w-72 shadow-xl space-y-2" data-popup="createNewItem">
	<h2>Create new...</h2>
	<hr />
	<div class="flex justify-center flex-col space-y-2">
		<button type="button" class="btn variant-soft" on:click={()=>{ goto('/issue/new') }}>Issue...</button>
		<button type="button" class="btn variant-soft" on:click={()=>{ goto('/project/new') }}>Project</button>
	</div>
</div>
