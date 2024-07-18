// 윈도우 크기에 따른 브레이크포인트 반환 함수
export function breakpoint(): "xl" | "lg" | "md" | "sm" | "xs" {
	const width: number = window.innerWidth;
	if (width >= 1280) return "xl";
	if (width >= 1024) return "lg";
	if (width >= 768) return "md";
	if (width >= 640) return "sm";
	return "xs";
}

// 데스크탑 여부 확인 함수
export function isDesktop(): boolean {
	return !["xs", "sm"].includes(breakpoint());
}

// 모바일 여부 확인 함수
export function isMobile(): boolean {
	return ["xs", "sm"].includes(breakpoint());
}

// 디바운스 함수
export function debounce<T extends (...args: any[]) => void>(func: T, wait: number): (...args: Parameters<T>) => void {
	let timeout: number | undefined;
	return function (...args: Parameters<T>): void {
		if (timeout !== null) {
			clearTimeout(timeout);
		}
		timeout = setTimeout(() => func(...args), wait);
	};
}

// 숫자에 comma 추가하는 함수
export function comma(num: number | string): string {
	return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// 문자열을 yyyy.mm.dd로 포맷 변환하는 함수
export function yyyymmdd(date: string, seperator: string = "."): string {
	const year: string = date.slice(0, 4);
	const month: string = date.slice(4, 6);
	const day: string = date.slice(6, 8);
	return `${year}${seperator}${month}${seperator}${day}`;
}