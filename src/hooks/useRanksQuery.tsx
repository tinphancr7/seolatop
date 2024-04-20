import {fetchAllRanks} from "@/apis/rank.api";

const useRanksQuery = ({name, limit}: {name: string; limit: number}) => {
	const queryKey = ["ranks", name, limit];
	const queryFn = () =>
		fetchAllRanks({
			name,
			limit,
		});
	return {queryKey, queryFn};
};

export default useRanksQuery;
