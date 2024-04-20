import {BASE_URL} from "@/constants";

export const fetchAllProjects = async ({
	pageIndex,
	pageSize,
	search,
}: {
	pageIndex: number;
	pageSize: number;
	search?: string;
}) => {
	const res = await fetch(
		`${BASE_URL}/seo-projects?pageIndex=${pageIndex}&pageSize=${pageSize}&search=${search}`,
		{
			cache: "no-store",
		}
	);
	const data = await res.json();

	return data;
};
export const fetchAllHotProjects = async ({
	pageIndex,
	pageSize,
	search,
}: {
	pageIndex: number;
	pageSize: number;
	search?: string;
}) => {
	const res = await fetch(
		`${BASE_URL}/seo-projects/hot?pageIndex=${pageIndex}&pageSize=${pageSize}&search=${search}`,
		{
			cache: "no-store",
		}
	);
	const data = await res.json();

	return data;
};

export const fetchProjectBySlug = async (slug: string) => {
	const res = await fetch(`${BASE_URL}/seo-projects/${slug}`, {
		cache: "no-store",
	});
	const data = await res.json();

	return data;
};
