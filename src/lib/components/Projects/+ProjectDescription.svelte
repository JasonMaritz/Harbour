<script lang="ts">
	import { Carta, MarkdownEditor, Markdown } from 'carta-md';
	// Component default theme
	import '$lib/styles/github.scss';

	const carta = new Carta();
	let value = '';

	//methods
	function createProject(){

	}
</script>

<div class="flex flex-col space-y-10 w-9/12">
	<div class="space-y-2">
		<h2>Short Description</h2>
		<input class="input" type="text" title="Short Description" placeholder="project name..." />
	</div>
	<div class="space-y-2 h-4/6">
		<h2>Long Description</h2>
		<MarkdownEditor bind:value {carta} mode="tabs" theme="github" />
	</div>
	<div class="flex justify-end space-x-3">
		<button type="button" class="btn variant-glass-secondary">cancel</button>
		<button type="button" class="btn variant-filled-primary" on:click={createProject}>Save Project</button>
	</div>
</div>

<style>
	/* Or in global stylesheet */
	/* Set your custom monospace font */
	:global(.carta-font-code) {
		font-family: '...', monospace;
		font-size: 1.1rem;
	}
</style>
