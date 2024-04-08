import moment from "moment";
import Image from "next/image";
import React from "react";

const CardItemModal = ({onOpen}) => {
	return (
		<div className="col-span-6 lg:col-span-4 cursor-pointer" onClick={onOpen}>
			<div className="w-full h-[114px] lg:h-[300px] relative rounded-[20px] border-2 border-green32 mb-2 shadow-card">
				<Image
					src="https://images.unsplash.com/photo-1711539924834-06816347ff2a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D"
					alt="mb66"
					fill
					className="object-cover rounded-[20px]"
				/>
			</div>
			<div>
				<h4 className="text-green32 text-base lg:text-2xl font-bold">
					mb66 - một bước làm giàu
				</h4>
				<span className="text-base lg:text-xl font-normal text-gray7E">
					{moment().format("DD/MM/YYYY")}
				</span>
			</div>
		</div>
	);
};

export default CardItemModal;
