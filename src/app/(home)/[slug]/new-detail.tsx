"use client";
import {fetchNewBySlug} from "@/apis/new.api";
const Heading = dynamic(() => import("@/components/heading/Heading"));
import SwiperCardDetail from "@/components/swiper-card/SwiperCardDetail";
import {useQuery} from "@tanstack/react-query";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

const NewDetail = ({slug}: {slug: string}) => {
	const {data} = useQuery({
		queryKey: ["new-detail", slug],
		queryFn: () => fetchNewBySlug(slug),
	});
	const newDetail = data?.result;

	return (
		<div className="">
			<div className="relative show_bg_2">
				<Heading>Tin tức</Heading>
				<div className="hidden lg:block">
					<SwiperCardDetail images={[newDetail?.thumbnail]} />
				</div>
				<div className="flex justify-center flex-col items-center relative z-10 max-w-[1230px] w-full mx-auto px-10">
					<h3 className="text-lg text-justify lg:text-4xl text-green32 font-extrabold pb-5">
						{newDetail?.title}
					</h3>
				</div>
			</div>
			<div className="bg-blue00 ">
				<div className="relative">
					<div className="absolute top-0 left-0 right-0 mx-auto w-[1564px] h-[884px] hidden md:block ">
						<Image
							src="/images/Mask.png"
							fill
							className="object-cover"
							alt=""
						/>
					</div>
					<div className="absolute top-0 left-0 right-0 mx-auto w-full h-[263px] md:hidden">
						<Image
							src="/images/maskmobile.png"
							fill
							className="object-contain"
							alt=""
						/>
					</div>

					<div
						className="text-sm lg:text-2xl font-normal text-justify max-w-[1200px] w-full mx-auto lg:bg-[#00020f] py-10 lg:py-14 px-10 text-white"
						dangerouslySetInnerHTML={{__html: newDetail?.description}}
					></div>
					<div className="absolute bottom-0 rotate-[180deg] left-0 right-0 mx-auto w-[1564px] h-[884px]  hidden md:block ">
						<Image
							src="/images/Mask.png"
							fill
							className="object-cover"
							alt=""
						/>
					</div>
					<div className="absolute bottom-0 rotate-[180deg] left-0 right-0 mx-auto w-full h-[263px] md:hidden">
						<Image
							src="/images/maskmobile.png"
							fill
							className="object-contain"
							alt=""
						/>
					</div>
				</div>
				<div className="lg:flex items-center justify-center py-10 hidden">
					<Link href={"/"} className="relative w-[560px]  h-[87px]">
						<Image
							src={"/images/layer.png"}
							fill
							className="object-cover"
							alt=""
						/>
						<div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] flex items-center gap-2">
							<span className="text-2xl font-normal text-white">
								Trở về danh sách tin tức
							</span>
						</div>
					</Link>
				</div>
				{/* <div className="relative container mx-auto  lg:hidden">
					<Heading>CÁC BÀI VIẾT KHÁC</Heading>

					<div className="h-fit">
						<ListCard />
					</div>
				</div> */}
			</div>
		</div>
	);
};

export default NewDetail;
