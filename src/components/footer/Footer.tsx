import Image from "next/image";
import React from "react";
import {FaLocationDot} from "react-icons/fa6";
import {IoIosCall} from "react-icons/io";
import {MdOutlineEmail} from "react-icons/md";
import {RiArrowRightSLine} from "react-icons/ri";
const Footer = () => {
	return (
		<div className="bg-blue00 pt-10">
			<div className="bg-blue19 w-full pt-2 pb-14 lg:py-8 flex items-center justify-center ">
				<div className="grid grid-cols-12 lg:gap-10 container lg:max-w-screen-xl ">
					<div className="col-span-12 lg:col-span-3 flex items-center justify-center">
						<div className="relative w-[181px] h-[52px] lg:w-[246px] lg:h-[70px] ">
							<Image
								src="/images/logo.png"
								className="object-cover"
								fill
								alt=""
							/>
						</div>
					</div>
					<div className="flex flex-col lg:gap-5 py-4 col-span-12 lg:col-span-3">
						<h5 className="text-base font-medium text-center lg:text-start text-white">
							Thông tin liên hệ
						</h5>
						<ul className="text-white font-normal text-sm justify-between flex lg:flex-col flex-row flex-wrap gap-2 lg:gap-5">
							<li className="flex items-center gap-2 lg:gap-4">
								<MdOutlineEmail size={24} /> contact@sed.edu.vn
							</li>
							<li className="flex items-center gap-2 lg:gap-4">
								<IoIosCall size={24} />
								+84 943713223
							</li>
							<li className="flex items-center gap-2 lg:gap-4">
								<FaLocationDot size={24} /> Tầng 1, Số 4 Nguyễn Thị Minh Khai,
								Quận 1, Thành phố Hồ Chí Minh
							</li>
						</ul>
					</div>
					<div className="col-span-12 lg:col-span-6 flex items-center justify-between lg:justify-start gap-0 lg:gap-14">
						<div className="flex flex-col gap-2 lg:gap-5 col-span-6 lg:col-span-3">
							<h5 className="text-base font-medium text-white">
								Chính sách & Quy định
							</h5>
							<ul className="text-white font-normal text-sm flex flex-col gap-2 lg:gap-4">
								<li className="flex items-center gap-2 lg:gap-4">
									<RiArrowRightSLine size={24} /> Thông tin các chứng nhận
								</li>
								<li className="flex items-center gap-2 lg:gap-4">
									<RiArrowRightSLine size={24} />
									Chính sách hoàn trả học phí
								</li>
								<li className="flex items-center gap-2 lg:gap-4">
									<RiArrowRightSLine size={24} /> Quy định cấp chứng nhận
								</li>
								<li className="flex items-center gap-2 lg:gap-4">
									<RiArrowRightSLine size={24} /> Quy định bảo lưu khóa học
								</li>
							</ul>
						</div>
						<div className="flex flex-col gap-2 lg:gap-5 col-span-6 lg:col-span-3">
							<h5 className="text-base font-medium text-white">Danh mục</h5>
							<ul className="text-white font-normal text-sm flex flex-col gap-2 lg:gap-4">
								<li className="flex items-center gap-2 lg:gap-4">
									<RiArrowRightSLine size={24} />
									Khóa học
								</li>
								<li className="flex items-center gap-2 lg:gap-4">
									<RiArrowRightSLine size={24} />
									Góc học viên
								</li>
								<li className="flex items-center gap-2 lg:gap-4">
									<RiArrowRightSLine size={24} />
									Giảng viên
								</li>
								<li className="flex items-center gap-2 lg:gap-4">
									<RiArrowRightSLine size={24} /> Blog
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<p className="text-center p-3 text-sm font-normal">
				© Copyright 2024 by seolatop
			</p>
		</div>
	);
};

export default Footer;
