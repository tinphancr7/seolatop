import Heading from "@/components/heading/Heading";
import InputSearch from "@/components/input/InputSearch";

import BgImg from "@/components/bg/BgImg";
import {dehydrate, HydrationBoundary, QueryClient} from "@tanstack/react-query";
import useActivitiesQuery from "@/hooks/useActivitiesQuery";
import ListCard from "@/app/hoat-dong/components/ListCard";

const ActivityPage = async ({
	searchParams,
}: {
	searchParams: {[key: string]: string | undefined};
}) => {
	const pageIndex = Number(searchParams?.pageIndex) || 1;
	const pageSize = Number(searchParams?.pageSize) || 10;
	const search = searchParams?.search || "";
	const queryClient = new QueryClient();
	await queryClient.prefetchQuery(
		useActivitiesQuery({pageIndex, pageSize, search})
	);
	return (
		<div className="relative">
			<div className="absolute top-0 left-0 w-full h-[861px]">
				<BgImg />
			</div>
			<div className="bg-blue00 pb-10">
				<div className="container mx-auto  relative">
					<Heading>HOẠT ĐỘNG</Heading>
					<div className="flex items-center justify-center w-full mb-10">
						<InputSearch
							kind="hoat-dong"
							pageIndex={pageIndex}
							pageSize={pageSize}
							search={search}
						/>
					</div>
					<HydrationBoundary state={dehydrate(queryClient)}>
						<ListCard
							pageIndex={pageIndex}
							pageSize={pageSize}
							search={search}
						/>
					</HydrationBoundary>
				</div>
			</div>
		</div>
	);
};

export default ActivityPage;
