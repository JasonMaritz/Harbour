<script lang="ts">
	import { goto } from "$app/navigation";
</script>

<div class="flex flex-col space-y-2 m-8 h-fit">
	<button type="button" class="btn variant-soft" on:click={ () => {goto('/issue');} }>
		<span>Issues</span>
	</button>
	<button type="button" class="btn variant-soft" on:click={ () => {goto('/project');} }>
		<span>Projects</span>
	</button>
	<button type="button" class="btn variant-soft" on:click={ () => {goto('/ideas');} }>
		<span>Ideas</span>
	</button>
	<hr />
	<button type="button" class=" btn variant-soft" on:click={ () => {goto('/settings');} } >
		<span>Settings</span>
	</button>
</div>
