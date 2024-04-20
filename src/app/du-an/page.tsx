const Heading = dynamic(() => import("@/components/heading/Heading"));
const ListPartner = dynamic(() => import("./components/ListPartner"));
import {HydrationBoundary, QueryClient, dehydrate} from "@tanstack/react-query";
import useProjectsQuery from "@/hooks/useProjectsQuery";
import useHotProjectsQuery from "@/hooks/useHotProjectsQuery";
const HotProject = dynamic(() => import("./components/HotProject"));
const ListProject = dynamic(() => import("./components/ListProject"));
import dynamic from "next/dynamic";
import {Metadata} from "next";
import {getMetaData} from "@/utils";
import {pathData} from "@/constants";
import {fetchSeoByLink} from "@/apis/seo.api";
export async function generateMetadata() {
	try {
		const data = await fetchSeoByLink({
			link: pathData.contact,
		});

		const result = getMetaData(data);
		return {
			title: result?.title || "Dự án",
			description: result?.description,
		};
	} catch (error) {}
}

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
						<ListProject
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
