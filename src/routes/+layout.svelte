<script lang="ts">
	import '../app.postcss';
	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
	import { initializeStores, Drawer, Toast, Modal } from '@skeletonlabs/skeleton';
	initializeStores();

	// Highlight JS
	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	import xml from 'highlight.js/lib/languages/xml'; // for HTML
	import css from 'highlight.js/lib/languages/css';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';

	hljs.registerLanguage('xml', xml); // for HTML
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	storeHighlightJs.set(hljs);

	import HarbourBar from '$lib/components/general/+HarbourBar.svelte';
	import HarbourDrawer from '$lib/components/general/+HarbourDrawer.svelte';
</script>

<Drawer> <!-- Basic drawer with contents in component-->
	<HarbourDrawer/>
</Drawer>
<Modal /> <!--Modal popup-->
<div class="flex flex-col h-screen">
	<HarbourBar/> <!-- Application toolbar -->
	<slot /> <!--Embed pages in this layout-->
</div>


<Toast/> <!--Toast for simple alert messages-->
