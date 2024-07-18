<script lang="ts">
	import Footer from "$lib/components/Footer.svelte";
	import MyPageTabs from "$lib/components/MyPageTabs.svelte";
	import { yyyymmdd } from "$lib/utils/client/common.client";
	import Pagination from "$lib/components/Pagination.svelte";

	let datas = [
		{
			title: "화학1",
			subTitle: "우리 생활 속의 과학",
			payDate: "20240301",
		},
		{
			title: "화학1",
			subTitle: "우리 생활 속의 과학",
			payDate: "20240301",
		},
		{
			title: "화학1",
			subTitle: "우리 생활 속의 과학",
			payDate: "20240301",
		},
		{
			title: "화학1",
			subTitle: "우리 생활 속의 과학",
			payDate: "20240301",
		},
		{
			title: "화학1",
			subTitle: "우리 생활 속의 과학",
			payDate: "20240301",
		},
		{
			title: "화학1",
			subTitle: "우리 생활 속의 과학",
			payDate: "20240301",
		},
		{
			title: "화학1",
			subTitle: "우리 생활 속의 과학",
			payDate: "20240301",
		},
		{
			title: "화학1",
			subTitle: "우리 생활 속의 과학",
			payDate: "20240301",
		},
		{
			title: "화학1",
			subTitle: "우리 생활 속의 과학",
			payDate: "20240301",
		},
		{
			title: "화학1",
			subTitle: "우리 생활 속의 과학",
			payDate: "20240301",
		},
	];

	function getStyle(status: boolean) {
		return status ? "bg-green-500 text-white hover:(bg-green-400)" : "bg-gray-200 hover:(bg-gray-300)";
	}
</script>

<section class="w-200 fcc justify-start flex-col mx-auto pt-22 select-none <md:(w-full)">
	<MyPageTabs />

	<article class="fcc flex-col gap-5 w-200 mx-auto py-10 bg-white bg-opacity-30 <md:(justify-start w-9/10 h-full overflow-scroll)">
		<p class="text-3xl font-bold">콘텐츠 북마크</p>
		<div class="fcc w-full">
			<button type="button" class="fcc flex-1 py-3 {getStyle(true)} rounded-l-lg">요약</button>
			<button type="button" class="fcc flex-1 py-3 {getStyle(false)}">용어 의미 설명</button>
			<button type="button" class="fcc flex-1 py-3 {getStyle(false)} rounded-r-lg">이미지/영상</button>
		</div>
		{#each datas as data}
			<div class="relative w-full flex flex-col gap-3 border border-gray-400 p-5 rounded-xl">
				<button class="absolute right-3 top-2 text-green-500">
					<i class="ri-close-line text-3xl"></i>
				</button>
				<p class="text-2xl font-bold">{data.title}</p>
				{#if data.subTitle}
					<p class="text-xl">{data.subTitle}</p>
				{/if}
				{#if data.payDate}
					<p>결제일: {yyyymmdd(data.payDate)}</p>
				{/if}
			</div>
		{/each}

		<Pagination currentPage={3} total={123} showPagingText={true} listSize={10} pageSize={1} />
	</article>
</section>

<Footer />
