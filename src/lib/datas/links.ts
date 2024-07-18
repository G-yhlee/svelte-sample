// Link 타입 정의
type Link = {
	url: string;
	cls: string;
	text: string;
};

// 기본 링크 배열
export const basicLinks: Link[] = [
	{ url: "", cls: "min-w-25 md:(min-w-min)", text: "학습도구" },
	{ url: "", cls: "min-w-25 md:(min-w-min)", text: "챗봇KAI" },
	{ url: "", cls: "min-w-25 md:(min-w-min)", text: "학습 콘텐츠" },
	{ url: "", cls: "min-w-25 md:(min-w-min)", text: "튜터링" },
];

// 확장 링크 배열 (기본 링크 포함)
export const expandedLinks: Link[] = [
	...basicLinks,
	{ url: "/policy/terms-of-use", cls: "min-w-25 md:(min-w-min)", text: "이용약관" },
	{ url: "/policy/privacy", cls: "min-w-25 md:(min-w-min)", text: "개인정보취급방침" },
];

// 회원 관련 링크 배열
export const memberLinks: Link[] = [
	{ url: "/my-page/subscription", cls: "min-w-25 md:(min-w-min)", text: "구독권" },
	{ url: "/member/login", cls: "min-w-25 md:(min-w-min)", text: "로그인" },
	{ url: "/member/join", cls: "min-w-25 md:(min-w-min)", text: "회원가입" },
];

export const myPageLinks: Link[] = [
	{ url: "/my-page/profile", cls: "", text: "회원정보 수정" },
	{ url: "/my-page/subscription", cls: "", text: "구독권 관리" },
	{ url: "/my-page/bookmark", cls: "", text: "콘텐츠 북마크" },
];