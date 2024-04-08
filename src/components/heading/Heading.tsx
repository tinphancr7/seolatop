import Image from "next/image";
import React from "react";

interface HeadingProps {
	children: React.ReactNode;
}
const Heading = ({children}: HeadingProps) => {
	return (
		<div className="flex items-center justify-center relative mb-6">
			<div className="relative h-8 lg:h-24 w-full lg:w-[1428px]">
				<Image
					src={"/images/headingWeb1.png"}
					className="object-cover"
					fill
					alt=""
				/>
			</div>

			<div className="absolute top-0 left-[50%]  -translate-x-[50%]  ">
				<div
					className="text-base font-[SVN-Gilroy]  lg:text-5xl font-[900] text-transparent   bg-clip-text uppercase text-nowrap"
					style={{
						backgroundImage:
							"linear-gradient(90deg, #565F96 0%, #FFF 34.73%, #FFF 74.67%, #565F96 100%)",
					}}
				>
					{children}
				</div>
			</div>
		</div>
	);
};

export default Heading;
