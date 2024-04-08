"use client";
import Card from "@/components/card/Card";

import React, {Fragment, useEffect, useState} from "react";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import {Pagination} from "swiper/modules";
interface ListRankProps {
	name: string;
	order: number;
}
const ListRank = ({name, order}: ListRankProps) => {
	console.log("name", name);
	const [orderActive, setOrderActive] = useState(0);
	useEffect(() => {
		if (name === "master") {
			const links = document.getElementsByClassName("example_wrapper");
			// add background image to the element
			for (let i = 0; i < links.length; i++) {
				links[i].style.backgroundImage =
					"linear-gradient(1deg, rgba(45, 57, 143, 0.00) -0.3%, rgba(45, 57, 143, 0.35) 49.45%, rgba(45, 57, 143, 0.00) 99.54%)";
			}
			const handleMouseOver = (event) => {
				const hoveredPos = parseInt(event.currentTarget.dataset.order);

				setOrderActive(hoveredPos);

				for (let i = 0; i < links.length; i++) {
					const link = links[i];

					const linkPos = parseInt(link.dataset.order);

					if (linkPos !== hoveredPos && linkPos > hoveredPos) {
						link.classList.add("shiftDown");
					}
					if (linkPos !== hoveredPos && linkPos < hoveredPos) {
						link.classList.add("shiftUp");
					}
				}
			};

			const handleMouseOut = () => {
				setOrderActive(0);
				for (let i = 0; i < links.length; i++) {
					const link = links[i];
					link.classList.remove("shiftDown");
					link.classList.remove("shiftUp");
				}
			};

			for (let i = 0; i < links.length; i++) {
				links[i].addEventListener("mouseover", handleMouseOver);
				links[i].addEventListener("mouseout", handleMouseOut);
			}

			// Cleanup event listeners on component unmount
			return () => {
				for (let i = 0; i < links.length; i++) {
					links[i].removeEventListener("mouseover", handleMouseOver);
					links[i].removeEventListener("mouseout", handleMouseOut);
				}
			};
		}
	}, [name]); // Empty dependency array ensures the effect runs only once on mount

	return (
		<>
			<div className="lg:grid grid-cols-5 gap-5 hidden">
				{new Array(5).fill(0).map((item, index) => (
					<Fragment key={index}>
						<Card
							dataOrder={index + order}
							name={name}
							orderActive={orderActive}
						/>
					</Fragment>
				))}
			</div>
			<div className="lg:hidden ">
				<Swiper
					slidesPerView={3}
					spaceBetween={15}
					autoplay={{
						delay: 2000,
						disableOnInteraction: false,
					}}
					pagination={{
						clickable: true,
					}}
					modules={[Pagination]}
					className="mySwiper"
				>
					{new Array(5).fill(0).map((item, index) => (
						<SwiperSlide key={index}>
							<Card
								dataOrder={index + order}
								name={name}
								orderActive={orderActive}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</>
	);
};

export default ListRank;
