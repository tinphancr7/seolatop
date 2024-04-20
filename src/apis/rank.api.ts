import {BASE_URL} from "@/constants";

export const fetchAllRanks = async ({
	name,
	limit,
}: {
	name: string;
	limit: number;
}) => {
	const res = await fetch(
		`${BASE_URL}/users/get-rank?rank=${name}&limit=${limit}`,
		{
			cache: "no-store",
		}
	);
	const data = await res.json();

	return data;
};
