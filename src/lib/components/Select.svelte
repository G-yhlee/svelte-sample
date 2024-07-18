<script lang="ts">
	import { createEventDispatcher, onMount } from "svelte";

	// 옵션은 { text: string, value: string } 형식의 객체 배열로 받음
	export let options: { text: string; value: string }[] = [];
	export let selectedOption = { text: "", value: "" };
	export let textColor = "text-gray-400"; // 텍스트 색상을 설정하는 변수

	// 이벤트를 디스패치하기 위한 createEventDispatcher 초기화
	const dispatch = createEventDispatcher();
	let isOpen = false; // 드롭다운의 열림/닫힘 상태를 관리하는 변수

	// 드롭다운을 토글하는 함수
	function toggleDropdown() {
		isOpen = !isOpen;
	}

	// 옵션을 선택하는 함수
	function selectOption(option: { text: string; value: string }) {
		selectedOption = option; // 선택된 옵션을 업데이트
		isOpen = false; // 드롭다운을 닫음
		dispatch("select", { selectedOption }); // 선택된 옵션을 이벤트로 디스패치
	}

	// 드롭다운 외부 클릭 시 드롭다운을 닫는 함수
	function onClickOutside(event: Event) {
		const target = event.target as Element;
		if (target && !target.closest(".custom-select-wrapper")) {
			isOpen = false;
		}
	}

	// 컴포넌트가 마운트될 때 실행되는 함수
	onMount(() => {
		if (!selectedOption.value && options.length > 0) {
			selectedOption = options[0]; // 기본적으로 첫 번째 옵션을 placeholder로 설정
		}
		// 클릭 이벤트 리스너 추가
		document.addEventListener("click", onClickOutside);
		// 컴포넌트가 언마운트될 때 이벤트 리스너 제거
		return () => {
			document.removeEventListener("click", onClickOutside);
		};
	});
</script>

<!-- custom-select-wrapper 클래스로 드롭다운 컴포넌트의 래퍼 -->
<div class="custom-select-wrapper relative inline-block w-full">
	<!-- 드롭다운 버튼 -->
	<button class="w-full fcc justify-between p-2 px-3 bg-white border-1 border-gray-300 rounded-lg {textColor}" on:click={toggleDropdown}>
		{selectedOption.text}
		<span class="ml-2">▼</span>
	</button>
	<!-- 옵션 리스트 -->
	<div
		class="w-full absolute border-1 bg-white border-gray-300 rounded-lg overflow-hidden mt-1 z-99 {textColor} {isOpen
			? 'flex flex-col'
			: 'hidden'}"
	>
		{#each options as option, index}
			<button
				type="button"
				class="fcc justify-start p-3 hover:(bg-green-100 bg-opacity-30)"
				on:click={() => selectOption(option)}
				on:keydown={(event) => {
					// Enter 또는 Space 키를 눌렀을 때 옵션 선택
					if (event.key === "Enter" || event.key === " ") {
						selectOption(option);
					}
				}}>{option.text}</button
			>
		{/each}
	</div>
</div>
