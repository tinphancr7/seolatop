const Heading = dynamic(() => import("@/components/heading/Heading"));
const TabBlog = dynamic(() => import("./components/TabBlog"));
const InputSearch = dynamic(() => import("@/components/input/InputSearch"));
const BgImg = dynamic(() => import("@/components/bg/BgImg"));
import {HydrationBoundary, QueryClient, dehydrate} from "@tanstack/react-query";
import useBlogsQuery from "@/hooks/useBlogsQuery";
import dynamic from "next/dynamic";
const ListBlog = dynamic(() => import("./components/ListBlog"));
import {Metadata} from "next";
import {fetchSeoByLink} from "@/apis/seo.api";
import {pathData} from "@/constants";
import {getMetaData} from "@/utils";
export async function generateMetadata(): Promise<Metadata> {
	const data = await fetchSeoByLink({
		link: pathData.contact,
	});

	const result = getMetaData(data);
	return {
		title: result?.title || "Blog",
		description: result?.description,
	};
}

const BlogPage = async ({
	searchParams,
}: {
	searchParams: {
		pageIndex: number;
		pageSize: number;
		search: string;
		type: string;
	};
}) => {
	const pageIndex = Number(searchParams?.pageIndex) || 1;
	const pageSize = Number(searchParams?.pageSize) || 2;
	const search = searchParams?.search || "";

	const type = searchParams?.type || "experience";
	const queryClient = new QueryClient();

	await queryClient.prefetchQuery(
		useBlogsQuery({pageIndex, pageSize, search, type})
	);
	return (
		<div className="relative">
			<div className="absolute top-0 left-0 w-full h-[861px]">
				<BgImg />
			</div>
			{/* <div className="absolute bottom-0 left-0 w-full h-[861px] rotate-180 hidden lg:block">
				<BgImg />
			</div> */}
			<div className="bg-blue00 min-h-[861px]">
				<div className="relative container mx-auto  ">
					<Heading>BLOG</Heading>
					<div className="mb-6 lg:mb-10">
						<TabBlog kind="blog" type={type} search={search} />
					</div>

					<div className="flex items-center justify-center w-full mb-10">
						<InputSearch kind="blog" type={type} search={search} />
					</div>
					<HydrationBoundary state={dehydrate(queryClient)}>
						<ListBlog
							pageIndex={pageIndex}
							pageSize={pageSize}
							search={search}
							type={type}
						/>
					</HydrationBoundary>
				</div>
			</div>
		</div>
	);
};

export default BlogPage;
