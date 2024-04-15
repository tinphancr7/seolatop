import Heading from "@/components/heading/Heading";
import ListPartner from "./components/ListPartner";
import ListCard from "../../components/card/ListCard";
import {HydrationBoundary, QueryClient, dehydrate} from "@tanstack/react-query";
import useProjectsQuery from "@/hooks/useProjectsQuery";
import useHotProjectsQuery from "@/hooks/useHotProjectsQuery";
import HotProject from "./components/HotProject";
const Project = async ({
	searchParams,
}: {
	searchParams: {
		pageIndex: number;
		pageSize: number;
		search: string;
	};
}) => {
	const pageIndex = Number(searchParams?.pageIndex) || 1;
	const pageSize = Number(searchParams?.pageSize) || 10;
	const search = searchParams?.search || "";
	const queryClient = new QueryClient();
	await queryClient.prefetchQuery(
		useHotProjectsQuery({
			pageIndex: 1,
			pageSize: 10,
			search: "",
		})
	);
	await queryClient.prefetchQuery(
		useProjectsQuery({
			pageIndex,
			pageSize,
			search,
		})
	);
	return (
		<div className="">
			<HydrationBoundary state={dehydrate(queryClient)}>
				<HotProject />
			</HydrationBoundary>
			<div className="bg-blue00  ">
				<div className="container mx-auto pt-10 lg:pt-[150px]">
					<Heading>CÁC DỰ ÁN KHÁC</Heading>
					<div className="lg:my-[60px] my-4 lg:px-[100px]  w-full ">
						<ListPartner />
					</div>

					<HydrationBoundary state={dehydrate(queryClient)}>
						<ListCard
							kind="project"
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

export default Project;
