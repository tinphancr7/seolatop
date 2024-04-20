import {fetchAllHotProjects} from "@/apis/project.api";

const useHotProjectsQuery = ({
	pageIndex,
	pageSize,
	search,
}: {
	pageIndex: number;
	pageSize: number;
	search?: string;
}) => {
	const queryKey = ["hot-projects", pageIndex, pageSize, search];
	const queryFn = () =>
		fetchAllHotProjects({
			pageIndex,
			pageSize,
			search,
		});
	return {queryKey, queryFn};
};

export default useHotProjectsQuery;
