<script lang="ts">
	import { css } from "@emotion/css";

	// 스타일 정의
	const kakaoCss = css`
		background: #fde545;
	`;
</script>

<section class="fcc flex-col gap-10 w-200 h-full mx-auto pt-20 select-none <md:(w-full)">
	<img src="/img/logo.png" alt="logo" />
	<p class="text-3xl font-bold">회원 가입</p>
	<article class="text-gray-500">아래 '카카오로 회원 가입' 버튼을 이용해 주세요</article>
	<article class="p-10 px-20 rounded-lg bg-green-100 bg-opacity-30 w-2/3 <md:(w-4/5 px-10)">
		국제 시험에 필요한 모든 학습 콘텐츠를 AI와 함께 스마트하게 공부해요!
	</article>
	<button type="button" class="relative w-2/3 py-4 fcc rounded-lg <md:(w-4/5) {kakaoCss}">
		<i class="ri-kakao-talk-fill text-3xl text-black absolute left-5"> </i>
		<span class="text-xl font-bold">카카오로 회원 가입</span>
	</button>
</section>
