<script lang="ts">
	import Footer from "$lib/components/Footer.svelte";
	import MyPageTabs from "$lib/components/MyPageTabs.svelte";
</script>

<section class="w-200 fcc justify-start flex-col mx-auto pt-22 select-none <md:(w-full)">
	<MyPageTabs />

	<article
		class="fcc flex-col gap-10 w-200 mx-auto py-10 rounded-lg bg-white bg-opacity-30 <md:(justify-start w-full h-full overflow-scroll)"
	>
		<p class="text-3xl font-bold">회원정보 수정</p>
		<div class="w-full flex flex-col gap-2 px-10">
			<label for="name" class="font-bold">이름</label>
			<div>홍길동</div>
		</div>
		<div class="w-full flex flex-col gap-2 px-10">
			<label for="memberType" class="font-bold">회원 유형</label>
			<div>학생</div>
		</div>
		<div class="w-full flex flex-col gap-2 px-10">
			<label for="area" class="font-bold">지역</label>
			<div>서울</div>
		</div>
		<div class="w-full flex flex-col gap-2 px-10">
			<label for="schoolType" class="font-bold">학교 유형</label>
			<div>국제고</div>
		</div>
		<div class="w-full flex flex-col gap-2 px-10">
			<label for="schoolName" class="font-bold">학교명/소속명</label>
			<div>서울국제고등학교</div>
		</div>
		<button type="button" class="relative w-50 py-4 fcc rounded-lg border-green-400 border-1 text-green-400 <md:(w-4/5)"
			on:click={() => location.href = "/my-page/profile-edit"}
		>
			<span class="text-xl font-bold">수정</span>
		</button>
	</article>
</section>

<Footer />
