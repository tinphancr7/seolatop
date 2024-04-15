import http from "@/utils/http";

const newApi = {
	getAllHotNews: () => {
		return http.get("/news/hot");
	},
	getAllNews: ({
		pageIndex,
		pageSize,
		search,
	}: {
		pageIndex: number;
		pageSize: number;
		search: string;
	}) => {
		return http.get("/news", {
			params: {
				pageIndex,
				pageSize,
				search,
			},
		});
	},
};
export const fetchAllHotNews = async () => {
	await new Promise((resolve) => setTimeout(resolve, 1000));

	const res = await fetch("http://localhost:7022/api/v1/news/hot", {
		cache: "no-store",
	});
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
	await new Promise((resolve) => setTimeout(resolve, 1000));

	const res = await fetch(
		`http://localhost:7022/api/v1/news?pageIndex=${pageIndex}&pageSize=${pageSize}&search=${search}`,
		{
			cache: "no-store",
		}
	);
	const data = await res.json();

	return data;
};

export const fetchNewBySlug = async (slug) => {
	await new Promise((resolve) => setTimeout(resolve, 1000));

	const res = await fetch(`http://localhost:7022/api/v1/news/${slug}`, {
		cache: "no-store",
	});
	const data = await res.json();

	return data;
};
export default newApi;
