import Heading from "@/components/heading/Heading";
import ListPartner from "./components/ListPartner";
import ListCard from "../../components/card/ListCard";
import HotProject from "./components/HotProject";

import {fetchAllProjects, fetchHotProjects} from "@/apis/project.api";
import {HydrationBoundary, QueryClient, dehydrate} from "@tanstack/react-query";
const Project = async ({
	searchParams,
}: {
	searchParams: {
		pageIndex: number;
		pageSize: number;
		search: string;
	};
}) => {
	const pageIndex = searchParams?.pageIndex || 1;
	const pageSize = searchParams?.pageSize || 10;
	const search = searchParams?.search || "";
	const queryClient = new QueryClient();
	await queryClient.prefetchQuery({
		queryKey: ["hot-projects"],
		queryFn: () =>
			fetchHotProjects({
				pageIndex: 1,
				pageSize: 10,
				search: "",
			}),
	});
	await queryClient.prefetchQuery({
		queryKey: ["seo-projects", pageIndex, pageSize, search],
		queryFn: () =>
			fetchAllProjects({
				pageIndex: pageIndex,
				pageSize: pageSize,
				search: search,
			}),
	});
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
