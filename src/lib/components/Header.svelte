<script lang="ts">
  import { basicLinks, memberLinks } from "$lib/datas/links";
  import { css } from "@emotion/css";
  import { isMobile, debounce } from "$lib/utils/client/common.client";
  import { onMount } from "svelte";

  // 스타일 정의
  const blackCss = css`
    color: black !important;
  `;

  // 메뉴 상태 변수
  let showUserMenu: boolean = false;
  let showMainMenu: boolean = false;
  let wasMobile: boolean;

  // 유저 메뉴 토글 함수
  function toggleUserMenu(): void {
    showUserMenu = !showUserMenu;
    showMainMenu = false;
  }

  // 메인 메뉴 토글 함수
  function toggleMainMenu(): void {
    showMainMenu = !showMainMenu;
    showUserMenu = false;
  }

  // 화면 크기 변경 처리 함수
  function onResize(): void {
    const currentMobile: boolean = isMobile();

    if (wasMobile && currentMobile) {
      return;
    }

    if (!currentMobile) {
      showUserMenu = false;
      showMainMenu = false;
    }

    wasMobile = currentMobile;
  }

  // a 태그 클릭 시 메뉴 상태를 초기화하는 함수
  function onLinkClick(): void {
    showUserMenu = false;
    showMainMenu = false;
  }

  // 컴포넌트가 마운트될 때 실행되는 함수
  onMount((): (() => void) => {
    wasMobile = isMobile();
    onResize();

    const debouncedResize = debounce(onResize, 100); // 디바운스 딜레이 설정
    window.addEventListener("resize", debouncedResize);

    // 컴포넌트가 언마운트될 때 실행되는 클린업 함수
    return (): void => {
      window.removeEventListener("resize", debouncedResize);
    };
  });
</script>

<header
  class="fixed w-full flex justify-between py-5 bg-gray-100 select-none z-1000"
>
  <nav class="w-full relative fcc justify-between flex-1">
    <div></div>
    <div class="relative pr-5 hidden <md:(block)">
      <button
        type="button"
        class="absolute text-4xl right-18 -top-5"
        on:click={toggleUserMenu}
      >
        <i class="ri-user-line"></i>
      </button>
      <button
        type="button"
        class="absolute text-4xl right-5 -top-5"
        on:click={toggleMainMenu}
      >
        <i class="ri-menu-line"></i>
      </button>
    </div>

    <div
      class="w-full fcc justify-between flex-1 bg-gray-100 pr-5 <md:(hidden)"
    >
      <div class="flex text-lg tracking-tight pl-5 gap-6 <md:(flex-col gap-1)">
        {#each basicLinks as { cls, url, text }, i}
          <a
            class="{blackCss} font-bold {cls}"
            href={url}
            on:click={onLinkClick}>{text}</a
          >
        {/each}
      </div>
      <div
        class="fcc tracking-tight gap-3 text-gray-500 <md:(flex-col gap-1 pl-5)"
      >
        {#each memberLinks as { cls, url, text }, i}
          <a class="font-bold {cls}" href={url} on:click={onLinkClick}>{text}</a
          >
        {/each}
      </div>
    </div>

    {#if showUserMenu || showMainMenu}
      <div
        class="w-full flex justify-between items-start flex-col gap-5 bg-gray-100 fixed top-19 py-5 px-5"
      >
        {#if showMainMenu}
          <div class="flex flex-col gap-1 text-lg tracking-tight">
            {#each basicLinks as { cls, url, text }, i}
              <a
                class="{blackCss} font-bold {cls}"
                href={url}
                on:click={onLinkClick}>{text}</a
              >
            {/each}
          </div>
        {/if}
        {#if showUserMenu}
          <div class="fcc flex-col gap-1 tracking-tight text-gray-500">
            {#each memberLinks as { cls, url, text }, i}
              <a class="font-bold {cls}" href={url} on:click={onLinkClick}
                >{text}</a
              >
            {/each}
          </div>
        {/if}
      </div>
    {/if}
  </nav>
</header>
