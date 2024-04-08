"use client";
import {listMenuHeader} from "@/constants";
import React, {useEffect} from "react";
import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";

const Header = () => {
	const pathname = usePathname();

	useEffect(() => {
		let marker = document.querySelector(".marker");
		let item = document.querySelectorAll("nav a");

		function indicator(e) {
			marker.style.left = e.offsetLeft + "px";
			marker.style.width = e.offsetWidth + "px";
		}
		function indicator1(e) {
			marker.style.left = e.offsetLeft + "px";
			marker.style.width = "0px";
		}

		item.forEach((link) => {
			link.addEventListener("mouseover", (e) => {
				indicator(e.target);
			});
			link.addEventListener("mouseout", (e) => {
				indicator1(e.target);
			});
		});
	}, []);

	return (
		<div className="bg-blue09 flex items-center h-[100px] lg:h-[166px]   fixed top-0 left-0 right-0  w-full z-20">
			<div className="container mx-auto">
				<div className="flex items-center justify-between">
					<div className="w-8 h-8 relative block md:hidden">
						<Image
							src={"/images/userMessage.png"}
							fill
							alt=""
							className="object-cover"
						/>
					</div>
					<Link
						href={"/"}
						className="relative w-[125px] h-9 lg:w-[246px] lg:h-[70px]"
					>
						<Image
							src="/images/logo.png"
							className="object-cover"
							fill
							alt=""
						/>
					</Link>
					<div className="w-8 h-8 relative  block md:hidden">
						<Image
							src={"/images/phoneLetter.png"}
							fill
							alt=""
							className="object-cover"
						/>
					</div>

					<nav className="md:flex items-center gap-5 text-xl font-medium text-white hidden ">
						<div className="marker left-0 absolute h-1 w-0 bg-green32 -bottom-2 rounded transition-all"></div>
						{listMenuHeader.map((item, index) => (
							<Link
								className={`${pathname === item.path ? "text-green32" : ""}`}
								href={item.path}
								key={index}
							>
								{item.name}
							</Link>
						))}
					</nav>
				</div>
			</div>
		</div>
	);
};

export default Header;
