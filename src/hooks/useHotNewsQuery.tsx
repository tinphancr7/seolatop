import {fetchAllHotNews, fetchAllNews} from "@/apis/new.api";

const useHotNewsQuery = ({
	pageIndex,
	pageSize,
	search,
}: {
	pageIndex: number;
	pageSize: number;
	search?: string;
}) => {
	const queryKey = ["hot-news", pageIndex, pageSize, search];
	const queryFn = () =>
		fetchAllHotNews({
			pageIndex,
			pageSize,
			search,
		});
	return {queryKey, queryFn};
};

export default useHotNewsQuery;
