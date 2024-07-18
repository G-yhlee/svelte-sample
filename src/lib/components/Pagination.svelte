<script lang="ts">
	export let total = 0;
	export let currentPage = 1;
	export let listSize = 20;
	export let pageSize = 10; // 한 번에 보여줄 페이지 수
	export let showPagingInput = false;
	export let showPagingText = false;
	export let showPagingSelect = false;
	export let options = [10, 20, 50, 100]; // 사용 가능한 목록 수 옵션

	let pages = Math.ceil(total / listSize);

	// listSize 또는 total이 변경될 때 페이지 수를 재계산
	$: pages = Math.ceil(total / listSize);
	$: currentPage = currentPage > pages ? pages : currentPage; // 현재 페이지가 전체 페이지 수를 초과하는 경우 조정
	$: startPage = Math.floor((currentPage - 1) / pageSize) * pageSize + 1;
	$: endPage = Math.min(startPage + pageSize - 1, pages);

	function gotoPage(page: number) {
		if (page < 1 || page > pages) return;
		currentPage = page;
		dispatch("change", { page });
	}

	function nextPage() {
		if (currentPage < pages) {
			gotoPage(currentPage + 1);
		}
	}

	function prevPage() {
		if (currentPage > 1) {
			gotoPage(currentPage - 1);
		}
	}

	function nextPageGroup() {
		let newStartPage = startPage + pageSize;
		if (newStartPage <= pages) {
			gotoPage(newStartPage);
		}
	}

	function prevPageGroup() {
		let newStartPage = startPage - pageSize;
		if (newStartPage >= 1) {
			gotoPage(newStartPage);
		}
	}

	import { createEventDispatcher } from "svelte";
	const dispatch = createEventDispatcher();
</script>

<div class="fcc gap-1">
	<button
		class="fcc btn border-1 border-gray-500 w-10 h-10 hover:(bg-green-100) {currentPage < 2 ? 'invisible' : ''}"
		on:click={() => gotoPage(1)}
	>
		<i class="ri-arrow-left-double-line"></i>
	</button>
	<button
		class="fcc btn border-1 border-gray-500 w-10 h-10 hover:(bg-green-100) {currentPage < 2 ? 'invisible' : ''}"
		on:click={showPagingInput ? prevPage : prevPageGroup}
	>
		<i class="ri-arrow-left-s-line"></i>
	</button>
	{#if showPagingInput}
		<input type="number" class="input w-16 h-12" bind:value={currentPage} min="1" max={pages} on:change={() => gotoPage(currentPage)} />
	{:else if showPagingText}
		<div class="fcc text-2xl px-3 gap-2">
			<span class="text-green-500 font-bold">{currentPage}</span>/<span>{pages}</span>
		</div>
	{:else}
		{#each Array(endPage - startPage + 1) as _, i (startPage + i)}
			<button
				class="fcc btn bg-gray-500 border-gray-500 text-white min-w-10 h-10 {currentPage === startPage + i
					? '!bg-white !text-gray-500 border-1 border-gray-500 font-extrabold'
					: ''}"
				on:click={() => gotoPage(startPage + i)}
			>
				{startPage + i}
			</button>
		{/each}
	{/if}
	<button
		class="fcc btn border-1 border-gray-500 w-10 h-10 hover:(bg-green-100) {currentPage === pages ? 'invisible' : ''}"
		on:click={showPagingInput ? nextPage : nextPageGroup}
	>
		<i class="ri-arrow-right-s-line"></i>
	</button>
	<button
		class="fcc btn border-1 border-gray-500 w-10 h-10 hover:(bg-green-100) {currentPage === pages ? 'invisible' : ''}"
		on:click={() => gotoPage(pages)}
	>
		<i class="ri-arrow-right-double-line"></i>
	</button>
	{#if showPagingSelect}
		<select class="input w-16 h-12" bind:value={listSize} on:change={() => gotoPage(1)}>
			{#each options as option}
				<option value={option}>{option}</option>
			{/each}
		</select>
	{/if}
</div>
