import {fetchAllProjects} from "@/apis/project.api";

const useProjectsQuery = ({
	pageIndex,
	pageSize,
	search,
}: {
	pageIndex: number;
	pageSize: number;
	search?: string;
}) => {
	const queryKey = ["seo-projects", pageIndex, pageSize, search];
	const queryFn = () =>
		fetchAllProjects({
			pageIndex,
			pageSize,
			search,
		});
	return {queryKey, queryFn};
};

export default useProjectsQuery;
