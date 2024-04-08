import {URL_IMAGE} from "@/constants";
import moment from "moment";
import Image from "next/image";
import React from "react";

const NewItem = ({item}: any) => {
	return (
		<div className="col-span-6 lg:col-span-4">
			<div className="w-full h-[114px] lg:h-[302px] relative">
				{/* <Image
					src={`${URL_IMAGE}/${item?.thumbnail}`}
					className="object-cover"
					fill
					alt=""
				/> */}
				<Image
					src="https://images.unsplash.com/photo-1542393545-10f5cde2c810?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					className="object-cover rounded"
					fill
					alt=""
				/>
			</div>
			<h5 className="font-medium text-sm lg:text-xl text-white py-2">
				{/* {item?.title} */}
				Interior Designer and Maude Interiors by Yvonne Designs
			</h5>
			<span className="font-medium text-sm lg:text-base text-[#7E7E7E]">
				{/* Jan 24, 2024 */}
				{moment(item?.created_at).format("MMM DD, YYYY")}
			</span>
		</div>
	);
};

export default NewItem;
