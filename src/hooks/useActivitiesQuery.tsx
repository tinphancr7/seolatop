import {fetchAllActivities} from "@/apis/activity.api";

const useActivitiesQuery = ({
	pageIndex,
	pageSize,
	search,
}: {
	pageIndex: number;
	pageSize: number;
	search?: string;
}) => {
	const queryKey = ["activities", pageIndex, pageSize, search];
	const queryFn = () =>
		fetchAllActivities({
			pageIndex,
			pageSize,
			search,
		});
	return {queryKey, queryFn};
};

export default useActivitiesQuery;
