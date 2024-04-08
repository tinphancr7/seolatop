"use client";
import Image from "next/image";
import Heading from "@/components/heading/Heading";
import ListPartner from "./components/ListPartner";
import ListCard from "../../components/card/ListCard";
import PaginationComp from "@/components/pagination/PaginationComp";
import {useState} from "react";
import SwiperCard from "@/components/swiper-card/SwiperCard";

const Project = () => {
	return (
		<div className="">
			<div className="relative show_bg_2">
				<Heading>CÁC DỰ ÁN NỔI BẬT</Heading>
				<SwiperCard />
				<div className="flex justify-center flex-col items-center relative z-10 max-w-[1230px] w-full mx-auto ">
					<h3 className="text-base lg:text-4xl text-green32 font-extrabold lg:my-5">
						MB66.BZ
					</h3>
				</div>
			</div>

			<div className="bg-blue00  ">
				<div className="relative">
					<div className="text-base lg:text-2xl font-normal text-justify max-w-[1200px] w-full mx-auto lg:pb-14 line-clamp-4 lg:line-clamp-none px-10 lg:px-0 text-white">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
						dolorum enim nemo ea mollitia repellat perferendis nostrum maxime
						dolore voluptatem impedit hic veniam a debitis non, animi,
						blanditiis consequatur adipisci alias quam nam suscipit explicabo
						praesentium eius! Quidem amet facere molestias rerum repellat autem
						ipsum error recusandae cumque quia qui vero consequuntur tempora
						fugit dolore neque, voluptatum aliquam illum animi. Quis minima ad
						voluptas, eaque placeat veniam saepe inventore distinctio.
						Repudiandae adipisci dolorum dolor suscipit neque harum? Quibusdam,
						possimus molestias officiis sequi aliquam maiores velit commodi
						harum impedit ipsa beatae ex deleniti facilis quo voluptas eligendi
						tempore et fuga sapiente, nostrum labore? Quae id aut sapiente
						error! Expedita magnam rerum qui eos aspernatur vero vel aliquid
						consequuntur tempora reiciendis, molestias molestiae nam nesciunt
						modi fuga perferendis assumenda neque laudantium earum sint officiis
						temporibus eaque. Aliquid ad quas aspernatur dolor voluptatum
						eligendi, in atque natus dicta voluptatem iste deleniti sit animi
						error quasi asperiores laudantium suscipit! Soluta quo delectus
						minus tempore! Rerum eligendi sed voluptas, mollitia sint nihil
						omnis facere, quisquam provident cupiditate veritatis? Enim
						blanditiis impedit rerum quibusdam nisi suscipit nemo reiciendis
						tenetur, eligendi accusamus, ipsam voluptas veritatis repellendus
						dicta dolor molestias vitae, consectetur nobis deserunt sint. Qui,
						earum obcaecati! chính mình nhé!
					</div>
					<div className="absolute bottom-0 rotate-[180deg] left-0 right-0 mx-auto w-[1564px] h-[884px] hidden md:block ">
						<Image
							src="/images/Mask.png"
							fill
							className="object-cover"
							alt=""
						/>
					</div>
					<div className="absolute rotate-[180deg] -bottom-6 lg:bottom-0 left-0 right-0 mx-auto w-full h-[263px]  md:hidden">
						<Image
							src="/images/maskmobile.png"
							fill
							className="object-contain"
							alt=""
						/>
					</div>
				</div>
				<div className="container mx-auto pt-10 lg:pt-[150px]">
					<Heading>CÁC DỰ ÁN KHÁC</Heading>
					<div className="lg:my-[60px] my-4 lg:px-[100px]  w-full ">
						<ListPartner />
					</div>
					<ListCard kind="project" />
				</div>
			</div>
		</div>
	);
};

export default Project;
