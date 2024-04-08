import Heading from "@/components/heading/Heading";
import {listContacts} from "@/constants";
import Image from "next/image";
import React from "react";

const Contact = () => {
	return (
		<div className=" show_bg_2">
			<div className="lg:container mx-auto relative">
				<Heading>LIÊN HỆ</Heading>
				<div className="flex items-center justify-center flex-col lg:flex-row ">
					<div className="relative w-[320px] h-[273px] lg:w-[695px] lg:h-[592px]">
						<div className="relative w-full h-full z-10">
							<Image
								src="/images/iframe.png"
								className="object-contain"
								fill
								alt=""
							/>
						</div>
						<div className="absolute top-2 lg:top-[22px] left-12 lg:left-[102px] w-[218px] h-[250px] lg:w-[475px] lg:h-[544px]">
							<Image
								src="/images/iframeImg.png"
								className="object-contain"
								fill
								alt=""
							/>
						</div>
					</div>
					<div className="lg:w-[857px] w-full">
						<h3 className="font-bold text-5xl text-green32 text-center pb-5 hidden lg:block">
							Thông tin liên hệ
						</h3>
						<div className="flex flex-col gap-4">
							{listContacts.map((contact, index) => (
								<div
									key={index}
									className="relative lg:w-full h-[62px] w-full  lg:h-[129px]"
								>
									<Image
										src={"/images/layer.png"}
										fill
										className="object-cover"
										alt=""
									/>
									<div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] flex items-center gap-2 w-[80%]">
										<div className="flex items-center justify-center w-full gap-2">
											<span className="flex-shrink-0 ">
												{<contact.Icon className="text-lg lg:text-3xl" />}
											</span>
											<p className="text-base lg:text-2xl">{contact.name}</p>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
