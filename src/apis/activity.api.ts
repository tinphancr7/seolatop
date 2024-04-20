import {BASE_URL} from "@/constants";

export const fetchAllHotActivities = async () => {
	const res = await fetch(`${BASE_URL}/activities/hot`, {
		cache: "no-store",
	});
	const data = await res.json();

	return data;
};
export const fetchAllActivities = async ({
	pageIndex,
	pageSize,
	search,
}: {
	pageIndex: number;
	pageSize: number;
	search?: string;
}) => {
	const res = await fetch(
		`${BASE_URL}/activities?pageIndex=${pageIndex}&pageSize=${pageSize}&search=${search}`,
		{
			cache: "no-store",
		}
	);
	const data = await res.json();

	return data;
};

export const fetchActivityBySlug = async (slug: string) => {
	const res = await fetch(`${BASE_URL}/activities/${slug}`, {
		cache: "no-store",
	});
	const data = await res.json();

	return data;
};
