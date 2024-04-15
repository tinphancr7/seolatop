import http from "@/utils/http";

const ProjectApi = {
	getAllHotProjects: () => {
		return http.get("/projects/hot");
	},
	getAllProjects: ({
		pageIndex,
		pageSize,
		search,
	}: {
		pageIndex: number | string;
		pageSize: number | string;
		search: string;
	}) => {
		return http.get("/projects", {
			params: {
				pageIndex,
				pageSize,
				search,
			},
		});
	},
	getProjectBySlug: (slug: string) => {
		return http.get(`/projects/${slug}`);
	},
};
export const fetchAllHotProjects = async () => {
	await new Promise((resolve) => setTimeout(resolve, 1000));

	const res = await fetch("http://localhost:7022/api/v1/projects/hot", {
		cache: "no-store",
	});
	const data = await res.json();

	return data;
};
export const fetchAllProjects = async ({
	pageIndex,
	pageSize,
	search,
}: {
	pageIndex: number;
	pageSize: number;
	search: string;
}) => {
	await new Promise((resolve) => setTimeout(resolve, 1000));

	const res = await fetch(
		`http://localhost:7022/api/v1/seo-projects?pageIndex=${pageIndex}&pageSize=${pageSize}&search=${search}`,
		{
			cache: "no-store",
		}
	);
	const data = await res.json();

	return data;
};
export const fetchHotProjects = async ({
	pageIndex,
	pageSize,
	search,
}: {
	pageIndex: number;
	pageSize: number;
	search: string;
}) => {
	await new Promise((resolve) => setTimeout(resolve, 1000));

	const res = await fetch(
		`http://localhost:7022/api/v1/seo-projects/hot?pageIndex=${pageIndex}&pageSize=${pageSize}&search=${search}`,
		{
			cache: "no-store",
		}
	);
	const data = await res.json();

	return data;
};

export const fetchProjectBySlug = async (slug) => {
	await new Promise((resolve) => setTimeout(resolve, 1000));

	const res = await fetch(`http://localhost:7022/api/v1/seo-projects/${slug}`, {
		cache: "no-store",
	});
	const data = await res.json();

	return data;
};

export default ProjectApi;
