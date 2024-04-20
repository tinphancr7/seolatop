import {BASE_URL} from "@/constants";

export const fetchAllSeoHistories = async ({
	month,
	year,
	limit,
}: {
	month: number;
	year: number;
	limit: number;
}) => {
	const res = await fetch(
		`${BASE_URL}/history-seo/get-top-month?month=${month}&year=${year}&limit=${limit}`,
		{
			cache: "no-store",
		}
	);
	const data = await res.json();

	return data;
};
