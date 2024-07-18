<script>
	import "virtual:windi.css";
	import "/src/global.css";
	import Header from "$lib/components/Header.svelte";

	const title = "";
	const description = "";
	const keywords = "";
</script>

<Header />

<div class="body-content h-full">
	<slot />
</div>
