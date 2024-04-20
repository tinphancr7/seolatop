import {BASE_URL} from "@/constants";
import http from "@/utils/http";

export const fetchAllHotNews = async ({
	pageIndex,
	pageSize,
	search,
}: {
	pageIndex: number;
	pageSize: number;
	search?: string;
}) => {
	const res = await fetch(
		`${BASE_URL}/news/hot?pageIndex=${pageIndex}&pageSize=${pageSize}&search=${search}`,
		{
			cache: "no-store",
		}
	);
	const data = await res.json();

	return data;
};
export const fetchAllNews = async ({
	pageIndex,
	pageSize,
	search,
}: {
	pageIndex: number;
	pageSize: number;
	search?: string;
}) => {
	const res = await fetch(
		`${BASE_URL}/news?pageIndex=${pageIndex}&pageSize=${pageSize}&search=${search}`,
		{
			cache: "no-store",
		}
	);
	const data = await res.json();

	return data;
};

export const fetchNewBySlug = async (slug: string) => {
	const res = await fetch(`${BASE_URL}/news/${slug}`, {
		cache: "no-store",
	});
	const data = await res.json();

	return data;
};
