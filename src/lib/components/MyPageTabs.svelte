<script lang="ts">
	import { page } from "$app/stores";
	import { myPageLinks } from "$lib/datas/links";

	const pathname = $page.url.pathname;
</script>

<p class="text-3xl font-bold mt-5 p-5">마이페이지</p>
<article class="w-full fcc justify-between p-5">
	{#each myPageLinks as { url, cls, text }}
		<a class="fcc flex-1 py-2 {pathname === url ? 'border-b-4 border-b-green-500 text-green-500 font-bold' : 'text-gray-500'}" href={url}>{text}</a>
	{/each}
</article>
