"use client";
import {RankLogo} from "@/interfaces";

import Image from "next/image";

const rankLogo: RankLogo = {
	highlight: {
		name: "highlight",
		url: "highlight.png",
		width: "182px",
		height: "206px",
		widthImg: "84px",
		heightImg: "84px",
		top: "22%",
		bottom: "63px",
	},
	master: {
		name: "master",
		url: "master.png",
		width: "w-[80px] lg:w-[182px]",
		height: "h-[90px] lg:h-[206px]",
		widthImg: "w-9 lg:w-[84px]",
		heightImg: "h-9 lg:h-[84px] ",
		top: "top-[24px] lg:top-[22%]",
		bottom: "bottom-[26px] lg:bottom-[62px]",
	},
	seo: {
		name: "seo",
		url: "seo.png",
		width: "w-[74px] lg:w-[200px]",
		height: "h-[83px] lg:h-[226px]",
		widthImg: "w-8 lg:w-[88px]",
		heightImg: "h-8 lg:h-[88px] ",
		top: "top-[24px] lg:top-[70px]",
		bottom: "bottom-[14px] lg:bottom-[62px]",
	},
	diamond: {
		name: "diamond",
		url: "diamond.png",
		width: "w-[89px] lg:w-[200px]",
		height: "h-[91px] lg:h-[205px]",
		widthImg: "w-8 lg:w-[88px]",
		heightImg: "h-8 lg:h-[88px] ",
		top: "top-[24px] lg:top-[58px]",
		bottom: "bottom-[21px] lg:bottom-[47px]",
	},
	platinum: {
		name: "platinum",
		url: "platinum.png",
		width: "w-[82px] lg:w-[156px]",
		height: "h-[84px] lg:h-[160px]",
		widthImg: "w-[50px] lg:w-[88px]",
		heightImg: "h-[50px] lg:h-[88px] ",
		top: "top-[20px] lg:top-[35px]",
		bottom: "bottom-[17px] lg:bottom-[30px]",
	},
	gold: {
		name: "gold",
		url: "gold.png",
		width: "w-[82px] lg:w-[115px]",
		height: "h-[84px] lg:h-[118px]",
		widthImg: "w-[50px] lg:w-[80px]",
		heightImg: "h-[50px] lg:h-[80px] ",
		top: "top-[20px] lg:top-[24px]",
		bottom: "bottom-[15px] lg:bottom-[18px]",
	},
	bronze: {
		name: "bronze",
		url: "bronze.png",
		width: "w-[74px] lg:w-[108px]",
		height: "h-[83px] lg:h-[111px]",
		widthImg: "w-[58px] lg:w-[88px]",
		heightImg: "h-[58px] lg:h-[88px] ",
		top: "top-[24px] lg:top-[24px]",
		bottom: "bottom-[16px] lg:bottom-[62px]",
	},
};
const Card = ({dataOrder, orderActive, name}: any) => {
	return (
		<div
			className={`w-full h-[208px] lg:h-[476px] relative flex-shrink-0 carousel-item  skew-x-[-10deg]  ${
				name === "master"
					? "example_wrapper"
					: name === "seo"
					? ""
					: "example_wrapper2"
			}   `}
			data-order={dataOrder}
			style={{
				backgroundImage:
					name === "seo"
						? "linear-gradient(1deg, rgba(11, 14, 34, 0.5) 0%, rgba(45, 57, 143, 0.4) 14%, rgb(152, 106, 200) 50%, rgba(45, 57, 143, 0.35) 90%, rgba(11, 14, 34, 0.2) 99%)"
						: "linear-gradient(1deg, rgba(45, 57, 143, 0.00) -0.3%, rgba(45, 57, 143, 0.35) 49.45%, rgba(45, 57, 143, 0.00) 99.54%)",
			}}
		>
			<div
				className="w-[3px] h-full absolute top-0 left-0"
				style={{
					backgroundImage:
						name === "seo"
							? "linear-gradient(1deg,  rgba(61, 72, 153, 0) 20%, #FAF5FF 50%,rgba(61, 72, 153, 0) 80%)"
							: "linear-gradient(0deg, rgba(61, 72, 153, 0) 20%, #6679FF 50%,rgba(61, 72, 153, 0) 80%)",
				}}
			></div>
			<div
				className="w-[3px] h-full absolute top-0 right-0"
				style={{
					backgroundImage:
						name === "seo"
							? "linear-gradient(1deg,  rgba(61, 72, 153, 0) 20%, #FAF5FF 50%,rgba(61, 72, 153, 0) 80%)"
							: "linear-gradient(0deg, rgba(61, 72, 153, 0) 20%, #6679FF 50%,rgba(61, 72, 153, 0) 80%)",
				}}
			></div>
			<div className=" absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] z-[9999] flex flex-col items-center justify-center skew-x-[10deg]">
				<div
					className={` flex-shrink-0 relative animate-image ${rankLogo[name]?.width} ${rankLogo[name]?.height} `}
				>
					<Image
						src={`/images/${
							orderActive?.toString() === dataOrder?.toString() &&
							name === "master"
								? rankLogo["highlight"].url
								: rankLogo[name]?.url
						}`}
						fill
						className="object-cover "
						alt=""
					/>

					<div
						className={`absolute  left-[50%]  rounded-full -translate-x-[50%]  z-[-1]  ${rankLogo[name]?.widthImg} ${rankLogo[name]?.heightImg} ${rankLogo[name]?.top}`}
					>
						<Image
							src={
								"https://images.unsplash.com/photo-1608178398319-48f814d0750c?q=80&w=2079&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							}
							fill
							className="object-cover rounded-full"
							alt=""
						/>
					</div>

					<span
						className={`absolute inline-block  left-[50%] -translate-x-[50%] font-bold text-[7px] lg:text-base text-white uppercase ${rankLogo[name]?.bottom}`}
					>
						Boss
					</span>
				</div>
				<div className="text-white font-extrabold text-center text-xs lg:text-3xl text-nowrap">
					MR. LINDA
				</div>
			</div>
		</div>
	);
};

export default Card;
