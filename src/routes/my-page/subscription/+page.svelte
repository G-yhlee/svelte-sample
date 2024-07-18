<script lang="ts">
	import Footer from "$lib/components/Footer.svelte";
	import MyPageTabs from "$lib/components/MyPageTabs.svelte";
	import { comma, yyyymmdd } from "$lib/utils/client/common.client";
	import Pagination from "$lib/components/Pagination.svelte";

	let datas = [
		{
			status: "",
			title: "6개월 정기구독",
			subTitle: "",
			nextPayDate: "20240831",
			payTerm: ["20240301", "20240831"],
			payDate: "",
			cancelDate: "",
			price: "",
		},
		{
			status: "결제완료",
			title: "6개월 정기구독",
			subTitle: "6개월 구독",
			nextPayDate: "",
			payTerm: "",
			payDate: "20240301",
			cancelDate: "",
			price: "250000",
		},
		{
			status: "환불완료",
			title: "월 정기구독",
			subTitle: "1개월 구독",
			nextPayDate: "",
			payTerm: "",
			payDate: "",
			cancelDate: "20240229",
			price: "60345",
		},
		{
			status: "결제완료",
			title: "6개월 정기구독",
			subTitle: "6개월 구독",
			nextPayDate: "",
			payTerm: "",
			payDate: "20240301",
			cancelDate: "",
			price: "250000",
		},
		{
			status: "환불완료",
			title: "월 정기구독",
			subTitle: "1개월 구독",
			nextPayDate: "",
			payTerm: "",
			payDate: "",
			cancelDate: "20240229",
			price: "60345",
		},
		{
			status: "결제완료",
			title: "6개월 정기구독",
			subTitle: "6개월 구독",
			nextPayDate: "",
			payTerm: "",
			payDate: "20240301",
			cancelDate: "",
			price: "250000",
		},
		{
			status: "환불완료",
			title: "월 정기구독",
			subTitle: "1개월 구독",
			nextPayDate: "",
			payTerm: "",
			payDate: "",
			cancelDate: "20240229",
			price: "60345",
		},
		{
			status: "결제완료",
			title: "6개월 정기구독",
			subTitle: "6개월 구독",
			nextPayDate: "",
			payTerm: "",
			payDate: "20240301",
			cancelDate: "",
			price: "250000",
		},
		{
			status: "환불완료",
			title: "월 정기구독",
			subTitle: "1개월 구독",
			nextPayDate: "",
			payTerm: "",
			payDate: "",
			cancelDate: "20240229",
			price: "60345",
		},
		{
			status: "결제완료",
			title: "6개월 정기구독",
			subTitle: "6개월 구독",
			nextPayDate: "",
			payTerm: "",
			payDate: "20240301",
			cancelDate: "",
			price: "250000",
		},
	];

	function getStyle(status: string) {
		if (status === "") {
			return "bg-green-100 bg-opacity-30 border-0";
		} else {
			return "border-gray-500 text-gray-500";
		}
	}
</script>

<section class="w-200 fcc justify-start flex-col mx-auto pt-22 select-none <md:(w-full)">
	<MyPageTabs />

	<article class="fcc flex-col gap-10 w-200 mx-auto py-10 bg-white bg-opacity-30 <md:(justify-start w-9/10 h-full overflow-scroll)">
		<p class="text-3xl font-bold">구독권 관리</p>
		{#each datas as data}
			<div class="w-full flex flex-col gap-3 border border-gray-400 p-5 rounded-xl {getStyle(data.status)}">
				{#if data.status === "결제완료"}
					<div class="w-30 fcc py-2 rounded-full text-lg font-bold border border-green-500 text-green-500">{data.status}</div>
				{:else if data.status === "환불완료"}
					<div class="w-30 fcc py-2 rounded-full text-lg font-bold border border-gray-500 text-gray-500">{data.status}</div>
				{/if}
				<p class="text-2xl font-bold">{data.title}</p>
				{#if data.subTitle}
					<p class="text-xl">{data.subTitle}</p>
				{/if}
				{#if data.payTerm.length > 0}
					<p>구독기간: {yyyymmdd(data.payTerm[0])} ~ {yyyymmdd(data.payTerm[1])}</p>
				{/if}
				{#if data.nextPayDate}
					<p>다음 결제일: {yyyymmdd(data.nextPayDate)}</p>
				{/if}
				{#if data.payDate}
					<p>결제일: {yyyymmdd(data.payDate)}</p>
				{/if}
				{#if data.cancelDate}
					<p>취소일: {yyyymmdd(data.cancelDate)}</p>
				{/if}
				{#if data.price}
					<p>가격: {comma(data.price)}원</p>
				{/if}
			</div>
		{/each}

		<Pagination currentPage={3} total={123} showPagingText={true} listSize={10} pageSize={1} />
	</article>
</section>

<Footer />
