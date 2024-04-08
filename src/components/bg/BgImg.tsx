import Image from "next/image";
import React from "react";

const BgImg = () => {
	return (
		<div className="absolute w-full h-full">
			<div className="w-full h-full absolute top-0 left-0">
				<Image src="/images/image824.png" fill alt="" />
			</div>
			<div
				className="w-full h-full absolute  top-0 left-0"
				style={{
					backgroundImage:
						"linear-gradient(to bottom, rgba(9, 12, 29, 1), rgba(0, 3, 26, 0.8), rgba(0, 3, 27, 1)",
				}}
			></div>
			<div className="absolute left-0 h-full top-0 bottom-0 hidden lg:block">
				<div className="w-8 h-full relative">
					<Image src="/images/Group153.png" fill alt="" />
				</div>
			</div>
			<div className="absolute right-0 h-full top-0 bottom-0 rotate-180 hidden lg:block">
				<div className="w-8 h-full relative">
					<Image src="/images/Group153.png" fill alt="" />
				</div>
			</div>
		</div>
	);
};

export default BgImg;
