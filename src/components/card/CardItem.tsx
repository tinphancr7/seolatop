import {URL_IMAGE} from "@/constants";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CardItem = ({item, kind}) => {
	return (
		<Link
			href={`/${kind === "project" ? "du-an" : "blog"}/${item?.slug}`}
			className="col-span-6 lg:col-span-4 hover:-translate-y-1 transition-all"
		>
			<div className="w-full h-[114px] lg:h-[300px] relative rounded-[20px] border-2 border-green32 mb-2 hover:shadow-card">
				<Image
					src={`${URL_IMAGE}/${item?.thumbnail || item?.images[0]}`}
					alt="mb66"
					fill
					className="object-cover rounded-[20px]"
				/>
			</div>
			<div>
				<h4 className="text-green32 text-base lg:text-2xl font-bold line-clamp-2">
					{item?.title}
				</h4>
				{kind === "project" ? (
					<p
						className="text-base lg:text-xl text-gray7E lg:text-white font-normal line-clamp-2"
						dangerouslySetInnerHTML={{__html: item?.description}}
					></p>
				) : (
					<span className="text-base lg:text-xl font-normal text-gray7E">
						{moment(item?.createdAt).format("DD/MM/YYYY")}
					</span>
				)}
			</div>
		</Link>
	);
};

export default CardItem;
