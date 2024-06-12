<script lang="ts">
	import { AppBar, getDrawerStore, popup, type PopupSettings } from '@skeletonlabs/skeleton';

	//Drawer setup
	const drawerStore = getDrawerStore();
	function drawerOpen():void{
		drawerStore.open();
	}
	//Popup setup
	const createNewItem: PopupSettings = {
		event: 'click',
		target: 'createNewItem',
		placement: 'bottom'
	};
	//icons
	import Fa from 'svelte-fa';
	import { faBars, faCaretDown, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
	import CreateItemPopup from './+CreateItemPopup.svelte';
</script>

<CreateItemPopup />

<AppBar>
	<svelte:fragment slot="lead">
		<button type="button" class="btn-icon btn-variant-ghost" on:click={drawerOpen}>
			<Fa icon={faBars} />
		</button>
		<h3 class="h3 px-3">Harbour</h3>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<button type="button" class="btn variant-ghost h-9" title="Add new" use:popup={createNewItem}>
			<Fa icon={faPlus} />
			<Fa icon={faCaretDown} />
		</button>
		<div class="flex input-group input-group-divider grid-cols-[auto-1fr] h-9">
			<input type="text" class="input" placeholder="Search..." />
			<button type="button">
				<Fa icon={faSearch} />
			</button>
		</div>
	</svelte:fragment>
</AppBar>
