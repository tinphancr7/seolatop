import {BASE_URL} from "@/constants";

export const fetchSeoByLink = async ({link}: {link: string}) => {
	const res = await fetch(`${BASE_URL}/seos/get-by-link?link=${link}`, {
		cache: "no-store",
	});
	const data = await res.json();

	return data;
};
