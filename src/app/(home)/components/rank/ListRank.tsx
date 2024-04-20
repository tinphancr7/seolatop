"use client";

import React, {Fragment} from "react";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import {Pagination} from "swiper/modules";
import dynamic from "next/dynamic";
import {useQuery} from "@tanstack/react-query";

import useRanksQuery from "@/hooks/useRanksQuery";
// import RankItem from "./RankItem";
const RankItem = dynamic(() => import("./RankItem"));
interface ListRankProps {
	name: string;
}
const ListRank = ({name}: ListRankProps) => {
	const {data, isLoading} = useQuery(
		useRanksQuery({
			name,
			limit: 4,
		})
	);

	return (
		<>
			<div className="lg:grid grid-cols-5 gap-5 hidden">
				{data?.data?.length > 0 &&
					data?.data?.map((item, index) => (
						<Fragment key={index}>
							<RankItem name={name} item={item} />
						</Fragment>
					))}
			</div>
			<div className="lg:hidden ">
				<Swiper
					slidesPerView={3}
					spaceBetween={15}
					autoplay={{
						delay: 2000,
						disableOnInteraction: false,
					}}
					pagination={{
						clickable: true,
					}}
					modules={[Pagination]}
					className="mySwiper"
				>
					{data?.data?.length > 0 &&
						data?.data?.map((item, index) => (
							<SwiperSlide key={index}>
								<RankItem name={name} />
							</SwiperSlide>
						))}
				</Swiper>
			</div>
		</>
	);
};

export default ListRank;
