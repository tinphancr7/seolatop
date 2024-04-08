import ListCard from "@/components/card/ListCard";
import Heading from "@/components/heading/Heading";
import InputSearch from "@/components/input/InputSearch";
import React from "react";
import BgImg from "@/components/bg/BgImg";

const Activity = () => {
	return (
		<div className="relative">
			<div className="absolute top-0 left-0 w-full h-[861px]">
				<BgImg />
			</div>
			<div className="bg-blue00">
				<div className="container mx-auto  relative">
					<Heading>HOẠT ĐỘNG</Heading>
					<div className="flex items-center justify-center w-full mb-10">
						<InputSearch />
					</div>
					<div>
						<ListCard kind="activity" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Activity;
