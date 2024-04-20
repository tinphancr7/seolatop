import {fetchAllSeoHistories} from "@/apis/seo-history.api";

const useSeoHistoriesQuery = ({
	month,
	year,
	limit,
}: {
	month: number;
	year: number;
	limit: number;
}) => {
	const queryKey = ["seo-histories", month, year, limit];
	const queryFn = () =>
		fetchAllSeoHistories({
			month,
			year,
			limit,
		});
	return {queryKey, queryFn};
};

export default useSeoHistoriesQuery;
