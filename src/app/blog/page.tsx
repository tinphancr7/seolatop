"use client";
import Heading from "@/components/heading/Heading";
import TabBlog from "./components/TabBlog";
import ListCard from "@/components/card/ListCard";
import InputSearch from "../../components/input/InputSearch";
import BgImg from "@/components/bg/BgImg";

const Blog = () => {
	return (
		<div className="relative">
			<div className="absolute top-0 left-0 w-full h-[861px]">
				<BgImg />
			</div>
			<div className="absolute bottom-0 left-0 w-full h-[861px] rotate-180 hidden lg:block">
				<BgImg />
			</div>
			<div className="bg-blue00 pb-10">
				<div className="relative container mx-auto  ">
					<Heading>BLOG</Heading>
					<div className="mb-6 lg:mb-10">
						<TabBlog />
					</div>

					<div className="flex items-center justify-center w-full mb-10">
						<InputSearch />
					</div>
					<div className="h-fit">
						<ListCard />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Blog;
