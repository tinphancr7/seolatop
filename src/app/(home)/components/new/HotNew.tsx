"use client";
import {URL_IMAGE} from "@/constants";
import useHotNewsQuery from "@/hooks/useHotNewsQuery";

import {useQuery} from "@tanstack/react-query";
import moment from "moment";
import Image from "next/image";

const HotNew = ({pageIndex, pageSize, search}: any) => {
	const {data, isLoading} = useQuery(
		useHotNewsQuery({
			pageIndex,
			pageSize,
			search,
		})
	);

	const [itemData, ...restData] = data?.result?.result || [];

	return (
		<div className="grid grid-cols-12 gap-5">
			<div className="col-span-12 lg:col-span-8">
				<div className="w-full h-[234px] lg:h-[582px] relative">
					<Image
						src={itemData && `${URL_IMAGE}/${itemData?.thumbnail}`}
						className="object-cover"
						fill
						alt=""
					/>
				</div>
				<h3 className="font-bold text-xl lg:text-[32px] text-white py-2 lg:py-3">
					{itemData?.title}
				</h3>
				<div
					className="line-clamp-2 text-base lg:text-2xl font-normal text-white"
					dangerouslySetInnerHTML={{
						__html: itemData?.description,
					}}
				/>
			</div>

			<div className="flex lg:flex-col  justify-between lg:justify-start flex-wrap flex-row col-span-12  lg:col-span-4 lg:gap-4 ">
				{restData?.map((item, index) => (
					<div
						key={index}
						className="flex w-[48%] lg:w-full    flex-col lg:flex-row gap-4 "
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
	);
};

export default HotNew;
