"use client";
import React, {useCallback, useRef, useState} from "react";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import {EffectCoverflow, Pagination} from "swiper/modules";
import Image from "next/image";
import {URL_IMAGE} from "@/constants";
const SwiperCardDetail = ({images}: {images: string[]}) => {
	const sliderRef = useRef<any>(null);
	const handlePrev = useCallback(() => {
		if (!sliderRef.current) return;
		sliderRef.current.swiper.slidePrev();
	}, []);

	const handleNext = useCallback(() => {
		if (!sliderRef.current) return;
		sliderRef.current.swiper.slideNext();
	}, []);
	return (
		<div className="relative">
			<div
				className="w-full lg:max-w-[1400px] lg:w-full mx-auto"
				id="matches-list"
			>
				<Swiper
					ref={sliderRef}
					effect={"coverflow"}
					loop
					centeredSlides
					grabCursor={true}
					slidesPerView={"auto"}
					coverflowEffect={{
						rotate: 0,
						stretch: 0,
						depth: 100,
						modifier: 4,
						slideShadows: true,
					}}
					pagination={false}
					modules={[EffectCoverflow, Pagination]}
					// className="mySwiper"
					spaceBetween={3}
					initialSlide={3}
					// roundLengths={true}
					navigation={false}
				>
					{images?.map((img, index) => (
						<SwiperSlide key={index}>
							<div
								className={`relative match-list-card  rounded-[20px] border-2 border-green32 mb-2 shadow-card`}
							>
								<Image
									src={`${URL_IMAGE}/${img}`}
									fill
									alt=""
									className="object-cover rounded-[20px]"
								/>
							</div>
						</SwiperSlide>
					))}
				</Swiper>

				{images?.length > 1 && (
					<>
						<div
							className="absolute left-10 top-[50%] -translate-y-[50%] cursor-pointer"
							onClick={handlePrev}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="28"
								height="56"
								viewBox="0 0 28 56"
								fill="none"
							>
								<path d="M0 28L28 0L14 28L28 56L0 28Z" fill="#32DFC0" />
							</svg>
						</div>
						<div
							className="absolute right-10 top-[50%] -translate-y-[50%] cursor-pointer"
							onClick={handleNext}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="28"
								height="56"
								viewBox="0 0 28 56"
								fill="none"
							>
								<path d="M28 28L0 0L14 28L0 56L28 28Z" fill="#32DFC0" />
							</svg>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default SwiperCardDetail;
