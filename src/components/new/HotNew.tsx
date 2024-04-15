"use client";
import newApi from "@/apis/new.api";
import {URL_IMAGE} from "@/constants";

import {useQuery} from "@tanstack/react-query";
import moment from "moment";
import Image from "next/image";
import React from "react";

const HotNew = () => {
	const {data, refetch} = useQuery({
		queryKey: ["hot-news"],
		queryFn: () => newApi.getAllHotNews(),
	});
	const hotNews = data?.data?.result?.result;

	return (
		<div>
			<div className="grid grid-cols-12 gap-5">
				<div className="col-span-12 lg:col-span-8">
					<div className="w-full h-[234px] lg:h-[582px] relative">
						<Image
							src={
								hotNews?.length ? `${URL_IMAGE}/${hotNews[0]?.thumbnail}` : ""
							}
							className="object-cover"
							fill
							alt=""
						/>
					</div>
					<h3 className="font-bold text-xl lg:text-[32px] text-white py-2 lg:py-3">
						{hotNews?.length ? hotNews[0]?.title : ""}
					</h3>
					<p
						className="line-clamp-2 text-base lg:text-2xl font-normal text-white"
						dangerouslySetInnerHTML={{
							__html: hotNews?.length ? hotNews[0]?.description : "",
						}}
					></p>
				</div>

				<div className="flex lg:flex-col  justify-center lg:justify-start flex-wrap flex-row col-span-12  lg:col-span-4 gap-4 ">
					{hotNews?.map((item, index) => (
						<div
							key={index}
							className="flex w-[47%] lg:w-full    flex-col lg:flex-row gap-2 "
						>
							<div className="w-full h-[114px] lg:w-[302px] lg:h-[165px] relative flex-shrink-0">
								<Image
									src={`${URL_IMAGE}/${item?.thumbnail}`}
									className="object-cover rounded"
									fill
									alt=""
								/>
							</div>
							<div>
								<h5 className="text-white font-medium text-sm lg:text-xl  ">
									{item?.title}
								</h5>
								<span className="font-medium text-sm lg:text-base text-[#7E7E7E] text-nowrap">
									{moment(item?.createdAt).format("MMM DD, YYYY")}
								</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default HotNew;
