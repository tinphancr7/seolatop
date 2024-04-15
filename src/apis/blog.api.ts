import http from "@/utils/http";

const blogApi = {
	getAllHotBlogs: () => {
		return http.get("/blogs/hot");
	},
	getAllBlogs: ({
		pageIndex,
		pageSize,
		search,
	}: {
		pageIndex: number | string;
		pageSize: number | string;
		search: string;
	}) => {
		return http.get("/blogs", {
			params: {
				pageIndex,
				pageSize,
				search,
			},
		});
	},
	getBlogBySlug: (slug: string) => {
		return http.get(`/blogs/${slug}`);
	},
};
export const fetchAllHotBlogs = async () => {
	await new Promise((resolve) => setTimeout(resolve, 1000));

	const res = await fetch("http://localhost:7022/api/v1/blogs/hot", {
		cache: "no-store",
	});
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
	await new Promise((resolve) => setTimeout(resolve, 1000));

	const res = await fetch(
		`http://localhost:7022/api/v1/blogs?pageIndex=${pageIndex}&pageSize=${pageSize}&search=${search}&type=${type}`,
		{
			cache: "no-store",
		}
	);
	const data = await res.json();

	return data;
};

export const fetchBlogBySlug = async (slug) => {
	await new Promise((resolve) => setTimeout(resolve, 1000));

	const res = await fetch(`http://localhost:7022/api/v1/blogs/${slug}`, {
		cache: "no-store",
	});
	const data = await res.json();

	return data;
};
export default blogApi;
