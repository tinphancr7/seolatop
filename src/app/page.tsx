import Heading from "@/components/heading/Heading";
// const Heading = dynamic(() => import("@/components/heading/Heading"));
import Heading2 from "@/components/heading/Heading2";
// const Heading2 = dynamic(() => import("@/components/heading/Heading2"));
import Hero from "@/components/hero/Hero";
// const Hero = dynamic(() => import("@/components/hero/Hero"));
import HotNew from "@/components/new/HotNew";
// const HotNew = dynamic(() => import("@/components/new/HotNew"));
import ListNew from "@/components/new/ListNew";
// const ListNew = dynamic(() => import("@/components/new/ListNew"));
import ListPartner from "@/components/partner/ListPartner";
// const ListPartner = dynamic(() => import("@/components/partner/ListPartner"));
import ListRank from "@/components/rank/ListRank";
// const ListRank = dynamic(() => import("@/components/rank/ListRank"));
import useHotNewsQuery from "@/hooks/useHotNewsQuery";
import useNewsQuery from "@/hooks/useNewsQuery";
import {dehydrate, HydrationBoundary, QueryClient} from "@tanstack/react-query";
// import dynamic from "next/dynamic";
import Image from "next/image";

const HomePage = async ({
	searchParams,
}: {
	searchParams: {
		pageIndex: number;
		pageSize: number;
		search: string;
	};
}) => {
	const pageIndex = Number(searchParams?.pageIndex) || 1;
	const pageSize = Number(searchParams?.pageSize) || 3;
	const search = searchParams?.search || "";

	const queryClient = new QueryClient();
	await queryClient.prefetchQuery(useNewsQuery({pageIndex, pageSize, search}));
	await queryClient.prefetchQuery(
		useHotNewsQuery({pageIndex: 1, pageSize: 5, search: ""})
	);
	return (
		<main className=" w-full overflow-hidden relative ">
			<div className="show_bg_2 relative">
				<div className="lg:py-20 container mx-auto ">
					<Heading>cao thủ tháng 03/20024</Heading>
					<ListRank name="master" order={1} />
				</div>
				<div className="absolute left-0 top-0 bottom-0 hidden lg:block">
					<div className="w-8 h-full relative">
						<Image src="/images/Group153.png" fill alt="" />
					</div>
				</div>
				<div className="absolute right-0 top-0 bottom-0 rotate-180 hidden lg:block">
					<div className="w-8 h-full relative">
						<Image src="/images/Group153.png" fill alt="" />
					</div>
				</div>
			</div>

			<div className="bg-blue00">
				<div className="container mx-auto">
					<div className=" py-10 lg:py-20">
						<Heading>ĐẠI GIA ĐÌNH SEO</Heading>
						<Hero />
					</div>
					<div className="pb-10 lg:pb-20">
						<Heading2
							bg="linear-gradient(90deg, rgba(102, 121, 255, 0.00) 18.29%, #70B8E6 99.09%)"
							textColor={"#ABDBFF"}
						>
							KIM CƯƠNG
						</Heading2>
						<ListRank name="diamond" order={10} />
					</div>
					<div className="pb-10 lg:pb-20">
						<Heading2
							bg="linear-gradient(90deg, rgba(102, 121, 255, 0.00) 18.29%, #FFF 99.09%)"
							textColor={"#FFF"}
						>
							BẠCH KIM
						</Heading2>
						<ListRank name="platinum" order={10} />
					</div>
					<div className="pb-10 lg:pb-20">
						<Heading2
							bg="linear-gradient(90deg, rgba(102, 121, 255, 0.00) 18.29%, #FFCB44 99.09%)"
							textColor={"#FFCB44"}
						>
							VÀNG - ĐỒNG
						</Heading2>
						<ListRank name="gold" order={100} />
					</div>
					<div className="pb-10 lg:pb-20">
						<Heading2
							bg="linear-gradient(90deg, rgba(102, 121, 255, 0.00) 18.29%, #FFF 99.09%)"
							textColor={"#FFF"}
							className="lg:mb-[60px]"
						>
							TIN TỨC NỔI BẬT
						</Heading2>
						<HydrationBoundary state={dehydrate(queryClient)}>
							<HotNew pageIndex={1} pageSize={5} search="" />
						</HydrationBoundary>
					</div>
					<div className="pb-10 lg:pb-20">
						<Heading2
							bg="linear-gradient(90deg, rgba(102, 121, 255, 0.00) 18.29%, #FFF 99.09%)"
							textColor={"#FFF"}
							className="lg:mb-[60px]"
						>
							Các tin tức khác
						</Heading2>
						<HydrationBoundary state={dehydrate(queryClient)}>
							<ListNew
								pageIndex={pageIndex}
								pageSize={pageSize}
								search={search}
							/>
						</HydrationBoundary>
					</div>
					<div className="">
						<Heading>CÁC ĐƠN VỊ ĐỐI TÁC</Heading>
						<ListPartner />
					</div>
				</div>
			</div>
		</main>
	);
};
export default HomePage;
