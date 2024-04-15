import http from "@/utils/http";

const activityApi = {
	getAllHotActivities: () => {
		return http.get("/activities/hot");
	},
	getAllActivities: ({
		pageIndex,
		pageSize,
		search,
	}: {
		pageIndex: number | string;
		pageSize: number | string;
		search: string;
	}) => {
		return http.get("/activities", {
			params: {
				pageIndex,
				pageSize,
				search,
			},
		});
	},
	getBlogBySlug: (slug: string) => {
		return http.get(`/activities/${slug}`);
	},
};
export const fetchAllHotActivities = async () => {
	await new Promise((resolve) => setTimeout(resolve, 1000));

	const res = await fetch("http://localhost:7022/api/v1/activities/hot", {
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
	await new Promise((resolve) => setTimeout(resolve, 1000));

	const res = await fetch(
		`http://localhost:7022/api/v1/activities?pageIndex=${pageIndex}&pageSize=${pageSize}&search=${search}`,
		{
			cache: "no-store",
		}
	);
	const data = await res.json();

	return data;
};

export const fetchActivityBySlug = async (slug) => {
	await new Promise((resolve) => setTimeout(resolve, 1000));

	const res = await fetch(`http://localhost:7022/api/v1/activities/${slug}`, {
		cache: "no-store",
	});
	const data = await res.json();

	return data;
};
export default activityApi;
