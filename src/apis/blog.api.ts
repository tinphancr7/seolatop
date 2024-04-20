import {BASE_URL} from "@/constants";
import http from "@/utils/http";

export const fetchAllHotBlogs = async ({
	pageIndex,
	pageSize,
	search,
}: {
	pageIndex: number;
	pageSize: number;
	search?: string;
}) => {
	const res = await fetch(
		`${BASE_URL}/blogs/hot?pageIndex=${pageIndex}&pageSize=${pageSize}&search=${search}`,
		{
			cache: "no-store",
		}
	);
	const data = await res.json();

	return data;
};
export const fetchAllBlogs = async ({
	pageIndex,
	pageSize,
	search,
	type,
}: {
	pageIndex: number;
	pageSize: number;
	search: string;
	type?: string;
}) => {
	const res = await fetch(
		`${BASE_URL}/blogs?pageIndex=${pageIndex}&pageSize=${pageSize}&search=${search}&type=${type}`,
		{
			cache: "no-store",
		}
	);
	const data = await res.json();

	return data;
};

export const fetchBlogBySlug = async (slug: string) => {
	const res = await fetch(`${BASE_URL}/blogs/${slug}`, {
		cache: "no-store",
	});
	const data = await res.json();

	return data;
};
