<script lang="ts">
	import Footer from "$lib/components/Footer.svelte";
	import MyPageTabs from "$lib/components/MyPageTabs.svelte";

	import { css } from "@emotion/css";
	import Select from "$lib/components/Select.svelte";

	let memberTypes = [
		{ text: "회원 유형을 선택해 주세요.", value: "" },
		{ text: "학생", value: "student" },
		{ text: "선생님", value: "teacher" },
		{ text: "학부모", value: "parent" },
	];
	let selectedMemberType = memberTypes[0]; // 첫 번째 옵션을 기본값으로 설정

	function onSelectMemberType(event: CustomEvent) {
		selectedMemberType = event.detail.selectedOption;
		console.log(`[+page] selectedMemberType:`, selectedMemberType);
	}

	let areas = [
		{ text: "지역을 선택해 주세요.", value: "" },
		{ text: "지역1", value: "1" },
		{ text: "지역2", value: "2" },
		{ text: "지역3", value: "3" },
	];
	let selectedArea = areas[0]; // 첫 번째 옵션을 기본값으로 설정

	function onSelectArea(event: CustomEvent) {
		selectedArea = event.detail.selectedOption;
		console.log(`[+page] selectedArea:`, selectedArea);
	}

	let schoolType = [
		{ text: "학교 유형을 선택해 주세요.", value: "" },
		{ text: "학교 유형1", value: "1" },
		{ text: "학교 유형2", value: "2" },
		{ text: "학교 유형3", value: "3" },
	];
	let selectedSchoolType = schoolType[0]; // 첫 번째 옵션을 기본값으로 설정

	function onSelectSchoolType(event: CustomEvent) {
		selectedSchoolType = event.detail.selectedOption;
		console.log(`[+page] selectedSchoolType:`, selectedSchoolType);
	}

	function onCancel() {
		location.href = "/my-page/profile";
	}

	function onSubmit() {
		location.href = "/my-page/profile";
	}
</script>

<section class="w-200 fcc justify-start flex-col mx-auto pt-22 select-none <md:(w-full)">
	<MyPageTabs />

	<article
		class="fcc flex-col gap-10 w-200 mx-auto py-10 rounded-lg bg-white bg-opacity-30 <md:(justify-start w-full h-full overflow-scroll)"
	>
		<p class="text-3xl font-bold">회원정보 수정</p>
		<div class="w-full flex flex-col gap-2 px-10">
			<label for="name" class="font-bold">이름</label>
			<input type="text" name="name" class="border-1 border-gray-300 rounded-lg p-2" placeholder="이름을 입력해 주세요." />
		</div>
		<div class="w-full flex flex-col gap-2 px-10">
			<label for="memberType" class="font-bold">회원 유형</label>
			<Select options={memberTypes} selectedOption={selectedMemberType} on:select={onSelectMemberType} />
		</div>
		<div class="w-full flex flex-col gap-2 px-10">
			<label for="area" class="font-bold">지역</label>
			<Select options={areas} selectedOption={selectedArea} on:select={onSelectArea} />
		</div>
		<div class="w-full flex flex-col gap-2 px-10">
			<label for="schoolType" class="font-bold">학교 유형</label>
			<Select options={schoolType} selectedOption={selectedSchoolType} on:select={onSelectSchoolType} />
		</div>
		<div class="w-full flex flex-col gap-2 px-10">
			<label for="schoolName" class="font-bold">학교명/소속명</label>
			<input type="text" name="schoolName" class="border-1 border-gray-300 rounded-lg p-2" placeholder="학교명/소속명을 입력해 주세요." />
		</div>
		<div class="fcc gap-5">
			<button type="button" class="relative w-50 py-4 fcc rounded-lg bg-green-500 text-white <md:(w-4/5)" on:click={onSubmit}>
				<span class="text-xl font-bold">수정</span>
			</button>
			<button
				type="button"
				class="relative w-50 py-4 fcc rounded-lg border-gray-500 border-1 text-gray-500 <md:(w-4/5)"
				on:click={onCancel}
			>
				<span class="text-xl font-bold">취소</span>
			</button>
		</div>
	</article>
</section>

<Footer />
