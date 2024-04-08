"use client";
import newApi from "@/apis/new.api";
import {URL_IMAGE} from "@/constants";

import {useQuery} from "@tanstack/react-query";
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
							// src={
							// 	hotNews?.length ? `${URL_IMAGE}/${hotNews[0]?.thumbnail}` : ""
							// }
							src="https://images.unsplash.com/photo-1542393545-10f5cde2c810?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							className="object-cover"
							fill
							alt=""
						/>
					</div>
					<h3 className="font-bold text-xl lg:text-[32px] text-white py-2 lg:py-3">
						Interior Designer and Maude Interiors by Yvonne Designs
					</h3>
					<p className="line-clamp-2 text-base lg:text-2xl font-normal text-white">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
						suscipit sunt ullam unde eligendi temporibus, repudiandae quos
						architecto rerum dicta exercitationem ipsum. Adipisci sint voluptas
						aspernatur aliquid? Dolor sed unde odit dolores nihil libero
						perferendis veritatis blanditiis! Earum consectetur ex commodi totam
						accusamus rerum libero quo illum magni. Voluptates harum delectus
						consequatur modi, dolorum velit quaerat possimus ad mollitia et ipsa
						debitis. Quisquam nihil architecto deserunt ullam tenetur incidunt
						quibusdam maiores quam et nulla obcaecati voluptatibus hic sunt
						omnis, quia nostrum nisi sit facilis eum! Dolore, saepe incidunt
						earum recusandae nostrum quod officia nemo ad quas nam laudantium
						unde quo.
					</p>
				</div>
				<div className="grid grid-cols-12 col-span-12 lg:col-span-4 gap-2">
					{new Array(4).fill(0).map((_, index) => (
						<div
							key={index}
							className="flex col-span-6 lg:col-span-12 flex-col lg:flex-row gap-2 "
						>
							<div className="w-full h-[114px] lg:w-[302px] lg:h-[165px] relative flex-shrink-0">
								<Image
									src="https://images.unsplash.com/photo-1542393545-10f5cde2c810?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
									className="object-cover rounded"
									fill
									alt=""
								/>
							</div>
							<div>
								<h5 className="text-white font-medium text-sm lg:text-xl">
									Interior Designer and Maude Interiors by Yvonne Designs
								</h5>
								<span className="font-medium text-sm lg:text-base text-[#7E7E7E]">
									Jan 24, 2024
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
