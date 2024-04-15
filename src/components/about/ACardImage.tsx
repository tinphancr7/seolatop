import Image from "next/image";
import React from "react";

type Props = {};

const ACardImage = (props: Props) => {
	return (
		<div className="bg-blue00">
			<div className="py-10">
				<div className="container mx-auto">
					<div className="flex justify-between items-start">
						<div className="flex flex-col items-center gap-7">
							<div className="img_card_ab_1 lg:w-[525.85px] lg:h-[448.224px]"></div>
							<div className="flex items-start gap-[7.318px]">
								<div className="img_ms_ab flex justify-center items-center lg:w-[369px] lg:h-[195px]">
									<p className="text_in_card_mission lg:w-[255px] lg:text-8">
										Luôn làm việc với tinh thần “Seo là Top”
									</p>
								</div>
							</div>
						</div>
						<div className="flex flex-col items-center gap-7">
							<div className="img_card_ab_2  lg:w-[525.85px] lg:h-[448.224px]"></div>
							<div className="flex items-start gap-[7.318px]">
								<div className="img_ms_ab flex justify-center items-center lg:w-[369px] lg:h-[195px]">
									<p className="text_in_card_mission lg:w-[255px] lg:text-8">
										Chiến binh tạo ra kỷ nguyên mới
									</p>
								</div>
							</div>
						</div>
						<div className="flex flex-col items-center gap-7">
							<div className="img_card_ab_3  lg:w-[525.85px] lg:h-[448.224px]"></div>
							<div className="flex items-start gap-[7.318px]">
								<div className="img_ms_ab flex justify-center items-center lg:w-[369px] lg:h-[195px]">
									<p className="text_in_card_mission lg:w-[255px] lg:text-8">
										Đều là các chuyên gia giỏi chuyên môn, nhanh nhạy và sáng
										tạo
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ACardImage;
