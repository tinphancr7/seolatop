import {fetchAllNews} from "@/apis/new.api";

const useNewsQuery = ({
	pageIndex,
	pageSize,
	search,
}: {
	pageIndex: number;
	pageSize: number;
	search?: string;
}) => {
	const queryKey = ["news", pageIndex, pageSize, search];
	const queryFn = () =>
		fetchAllNews({
			pageIndex,
			pageSize,
			search,
		});
	return {queryKey, queryFn};
};

export default useNewsQuery;
