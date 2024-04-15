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
export default newApi;
