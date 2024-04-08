import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CardItem = ({kind}) => {
	return (
		<Link href={"/blog/123"} className="col-span-6 lg:col-span-4">
			<div className="w-full h-[114px] lg:h-[300px] relative rounded-[20px] border-2 border-green32 mb-2 shadow-card">
				<Image
					src="https://images.unsplash.com/photo-1711539924834-06816347ff2a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D"
					alt="mb66"
					fill
					className="object-cover rounded-[20px]"
				/>
			</div>
			<div>
				<h4 className="text-green32 text-base lg:text-2xl font-bold line-clamp-2">
					mb66 - một bước làm giàu
				</h4>
				{kind === "project" ? (
					<p className="text-base lg:text-xl text-gray7E lg:text-white font-normal line-clamp-1">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
						exercitationem est possimus magni voluptatum delectus, sed dolore
						explicabo nisi beatae.
					</p>
				) : (
					<span className="text-base lg:text-xl font-normal text-gray7E">
						{moment().format("DD/MM/YYYY")}
					</span>
				)}
			</div>
		</Link>
	);
};

export default CardItem;
