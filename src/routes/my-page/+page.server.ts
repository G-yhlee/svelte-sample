import type { PageServerLoad } from "./$types";
import { redirect } from "@sveltejs/kit";

export const load: PageServerLoad = ({ url }) => {
	if (url.pathname === "/my-page") {
		throw redirect(302, "/my-page/profile");
	}
};
