<script lang="ts">
	import { expandedLinks } from "$lib/datas/links";
</script>

<footer class="relative w-full p-5 bg-gray-100">
	<div class="flex flex-wrap text-lg py-5 tracking-tight md:(gap-8)">
		{#each expandedLinks as { cls, url, text }, i}
			<a class={cls} href={url}>{text}</a>
		{/each}
	</div>

	<div class="flex flex-col gap-2 md:(absolute right-0 mr-10)">
		<div class="text-gray-500 text-xl">CONTACT</div>
		<a href="#" class="text-3xl">
			<i class="ri-kakao-talk-fill text-black"> </i>
			<span class="font-bold"> kevinparksat </span>
		</a>
		<a href="#" class="text-3xl">
			<i class="ri-phone-line"></i>
			<span class="font-bold">02)3452-2000</span>
		</a>
		<div class="text-gray-500">평일 09:00 ~ 18:00</div>
		<div class="flex gap-2 py-2 text-gray-500 text-4xl">
			<a href="#"><i class="ri-instagram-line"></i></a>
			<a href="#"><i class="ri-youtube-line"></i></a>
		</div>
	</div>

	<img class="py-5 md:pt-0" src="/img/logo.png" alt="logo" />

	<div class="flex flex-col text-gray-500">
		<div>상호명: kevinparkedu</div>
		<div>대표: Kevin 박</div>
		<div>TEL: 02)3452-2000</div>
		<div>KakaoTalk ID: kevinparksat</div>
		<div>주소: 서울특별시 서초구 강남대로 369</div>
		<div>사업자등록번호: 000-00-00000</div>
	</div>
	<div class="text-gray-500 py-5">Copyrightⓒkevinparkedu. All Rights Reserved.</div>
</footer>
