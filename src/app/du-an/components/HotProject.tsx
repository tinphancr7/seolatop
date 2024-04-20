"use client";
const BgImg = dynamic(() => import("@/components/bg/BgImg"));
const Heading = dynamic(() => import("@/components/heading/Heading"));

import SwiperCard from "@/components/swiper-card/SwiperCard";
import useHotProjectsQuery from "@/hooks/useHotProjectsQuery";
import {useQuery} from "@tanstack/react-query";
import dynamic from "next/dynamic";
import Image from "next/image";
import React, {useState} from "react";

const HotProject = () => {
	const {data} = useQuery(
		useHotProjectsQuery({
			pageIndex: 1,
			pageSize: 10,
			search: "",
		})
	);

	const hotProjectsData = data?.result?.result;

	const [chosenItem, setChosenItem] = useState(null);

	const handleChosenItem = (item: any) => {
		setChosenItem(item);
	};
	return (
		<>
			<div className="relative ">
				<BgImg />
				<Heading>CÁC DỰ ÁN NỔI BẬT</Heading>
				<SwiperCard items={hotProjectsData} onChosenItem={handleChosenItem} />
				<div className="flex justify-center flex-col items-center relative z-10 max-w-[1230px] w-full mx-auto ">
					<h3 className="text-base lg:text-4xl text-green32 font-extrabold lg:my-5">
						{chosenItem?.title}
					</h3>
				</div>
			</div>
			<div className="relative bg-blue00">
				<div
					className="text-base lg:text-2xl font-normal text-justify max-w-[1200px] w-full mx-auto lg:pb-14 line-clamp-4 lg:line-clamp-none px-10 lg:px-0 text-white"
					dangerouslySetInnerHTML={{__html: chosenItem?.description}}
				></div>
				<div className="absolute bottom-0 rotate-[180deg] left-0 right-0 mx-auto w-[1564px] h-[884px] hidden md:block ">
					<Image src="/images/Mask.png" fill className="object-cover" alt="" />
				</div>

				<div className="absolute rotate-[180deg] -bottom-6 lg:bottom-0 left-0 right-0 mx-auto w-full h-[263px]  md:hidden">
					<Image
						src="/images/maskmobile.png"
						fill
						className="object-contain"
						alt=""
					/>
				</div>
			</div>
		</>
	);
};

export default HotProject;
