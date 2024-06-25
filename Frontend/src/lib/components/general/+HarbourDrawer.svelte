<script lang="ts">
	import { menuLinks } from '$lib/links';
	import { getDrawerStore } from '@skeletonlabs/skeleton';

	$: mainLinks = menuLinks['mainDrawerLinks'];
	$: utilityLinks = menuLinks['trailDrawerLinks'];

	const drawerStore = getDrawerStore();

	function closeDrawer(): void {
		drawerStore.close();
	}
</script>

<div class="flex flex-col space-y-2 m-8 h-fit">
		<nav class="list-nav">
			<ul>
				{#each mainLinks as link}
					<li>
						<a href={link.href} class="hover" on:click={closeDrawer}>{@html link.label}</a>
					</li>
				{/each}
			</ul>
		</nav>
		<hr/>
		<nav class="list-nav">
			<ul>
				{#each utilityLinks as link}
					<li>
						<a href={link.href} class="hover" on:click={closeDrawer}>{@html link.label}</a>
					</li>
				{/each}
			</ul>
		</nav>
</div>
