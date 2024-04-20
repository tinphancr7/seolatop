import {URL_IMAGE} from "@/constants";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NewItem = ({item}: any) => {
	return (
		<Link href={`/${item?.slug}`} className="col-span-6 lg:col-span-4">
			<div className="w-full h-[114px] lg:h-[302px] relative">
				<Image
					src={`${URL_IMAGE}/${item?.thumbnail}`}
					className="object-cover"
					fill
					alt=""
				/>
			</div>
			<h5 className="font-medium text-sm lg:text-xl text-white py-2">
				{item?.title}
			</h5>
			<span className="font-medium text-sm lg:text-base text-[#7E7E7E]">
				{moment(item?.created_at).format("MMM DD, YYYY")}
			</span>
		</Link>
	);
};

export default NewItem;
