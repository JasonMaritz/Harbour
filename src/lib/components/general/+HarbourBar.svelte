<script lang="ts">
	import {
		AppBar,
		getDrawerStore,
		getToastStore,
		popup,
		type PopupSettings,
		type ToastSettings
	} from '@skeletonlabs/skeleton';

	import Fa from 'svelte-fa';
	import { faBars, faCaretDown, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
	import CreateItemPopup from './+CreateItemPopup.svelte';

	//Store setups
	const drawerStore = getDrawerStore();
	const toastStore = getToastStore();

	//Popup setup
	const createNewItem: PopupSettings = {
		event: 'click',
		target: 'createNewItem',
		placement: 'bottom'
	};
	//Members
	let searchVal = '';
	//Methods
	function drawerOpen(): void {
		drawerStore.open();
	}

	function drawerSearch(): void {
		const toast: ToastSettings = {
			message: `this is a test toast and this was your search: ${searchVal}`
		};
		toastStore.trigger(toast);
	}
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
				<input type="text" class="input" placeholder="Search..." bind:value={searchVal} on:change={drawerSearch}/>
				<button type="button" on:click={drawerSearch}>
					<Fa icon={faSearch} />
				</button>
		</div>
	</svelte:fragment>
</AppBar>
