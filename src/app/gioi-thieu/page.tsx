import ACardContent from "@/components/about/ACardContent";
import ACardImage from "@/components/about/ACardImage";
import Heading from "@/components/heading/Heading";
import Hero from "@/components/hero/Hero";
import Image from "next/image";

type Props = {};
const AboutPage = (props: Props) => {
	return (
		<main className="w-full overflow-hidden relative">
			{/* p1-bg */}
			<div className="bg_about relative flex items-center justify-center">
				<div className="w-650 h-189 flex items-center justify-center">
					<Image
						src={"/images/slt_about.png"}
						className="object-cover"
						layout="fixed"
						width={650}
						height={189}
						alt="seolatop"
					/>
				</div>
			</div>
			{/* end p1-bg */}

			<div className="bg-blue00">
				<div className="container mx-auto">
					{/* p2-bg */}
					<div className=" py-10 lg:py-20">
						<Heading>SEO LÀ AI ?</Heading>
						<ACardContent type="">
							SEO OKVIP là bộ phận quy tụ các thủ lĩnh SEO tài ba với nhiều
							thành tích nổi bật. Ngày đầu thành lập vào tháng 2/2022, cả bộ
							phận lúc bấy giờ chỉ vỏn vẹn trên dưới 20 người cùng nuôi ý chí
							trong một văn phòng nhỏ. Trải qua nhiều sóng gió và thử thách,
							những chiến binh với tinh thần thép đã thành công tạo dựng đế chế
							riêng với gần 300 thành viên và mang lại lợi nhuận khủng dành cho
							công ty. Tuy nhiên, vào giữa tháng 12 năm 2023, gia đình SEO OKVIP
							đã phải đối mặt với sự kiện gây tổn thất nặng nề về cả tinh thần
							lẫn vật chất. Với ý chí “thắng không kiêu, bại không nản”, toàn
							thể nhân viên 1 lần nữa đứng dậy sau cơn bão và chính thức lấy
							ngày 15/12/2023 là ngày thành lập bộ phận. Với tôn chỉ làm việc
							“SEO là TOP”, bộ phận hứa hẹn sẽ chinh phục thị trường nhà cái lớn
							với nhiều brand như 789BET, NEW88, Hi88, Jun88, MB66,… nhằm cung
							cấp tới người dùng khuyến mãi nhà cái uy tín nhất.
						</ACardContent>
					</div>
					{/* end p2-bg */}

					{/* p3-bg */}
					<div className="flex justify-center items-center">
						<h2 className="ab_title font-bold lg:text-4xl leading-none">
							ĐÓNG VAI TRÒ QUAN TRỌNG <br /> ĐỐI VỚI VIỆC GIỮ THỨ HẠNG CHO
							WEBSITE
						</h2>
					</div>
					{/* end p3-bg */}
				</div>
			</div>
			{/* p4-bg */}
			<div className="w-full overflow-hidden relative bg-blue00">
				<div className="container mx-auto">
					<div className="flex flex-col justify-center items-center">
						<h2 className="ab_title_mission  lg:text-4xl  font-normal font-semibold leading-none my-8">
							Nhiệm vụ
						</h2>
						<div className="relative h-8 lg:h-24 w-full lg:w-[1428px]">
							<Image
								src={"/images/ab_mission.png"}
								className="object-cover"
								fill
								alt=""
							/>
						</div>
					</div>
					<div className="absolute left-0 top-0 bottom-0 hidden lg:block">
						<div className="w-8 h-full relative">
							<Image src="/images/Group153.png" fill alt="" />
						</div>
					</div>
					<div className="absolute right-0 top-0 bottom-0 rotate-180 hidden lg:block">
						<div className="w-6 h-full relative">
							<Image src="/images/Group153.png" fill alt="" />
						</div>
					</div>
				</div>
			</div>
			{/* end p4-bg */}

			{/* p5-bg */}
			<ACardImage />
			{/* end p5-bg */}

			{/* p6-bg */}
			<div className="bg-blue00">
				<div className="container mx-auto">
					<div className=" py-10 lg:py-20">
						<Heading>THÀNH CÔNG TỪ KHÓ KHĂN ?</Heading>
						<ACardContent type="content-2">
							Vào tháng 12/2023 vừa qua, bộ phận này đã rơi vào khủng hoảng với
							hàng loạt website hàng top bị mất trắng. Nhưng với sự kiên trì và
							tư duy tốt bộ phận SEO đã làm việc hết mình để vực dậy được thứ
							hạng của mình. Do đó, ngày 15/12/2023 được lấy làm mốc đành dấu
							ngày thành lập bộ phận SEO của OKVIP.
						</ACardContent>
					</div>
				</div>
			</div>
			{/* end p6-bg */}

			{/* p7-bg */}
			<div className="w-full overflow-hidden relative bg-blue00">
				<div className="show_bg_2 relative">
					<div className="container mx-auto flex justify-center">
						<div className="inline-flex flex-col justify-center items-start gap-8">
							<div className="frame_last_ab flex items-start gap-2 backdrop-filter backdrop-blur-[7.317px]  lg:h-[195.262px] lg:w-[1376.593px]">
								<p className="lg:w-[953.03px] text-white text-center font-bold lg:text-[39px] uppercase">
									website chính thức của bộ phận seo tại tập đoàn okvip
								</p>
							</div>
							<div className="frame_last_ab flex items-start gap-2 backdrop-filter backdrop-blur-[7.317px]  lg:h-[195.262px] lg:w-[1376.593px]">
								<p className="lg:w-[953.03px] text-white text-center font-bold  lg:text-[39px] uppercase">
									Diễn đàn hỗ trợ Seoer với các chia sẻ hữu ích về việc đẩy top
								</p>
							</div>
							<div className="frame_last_ab flex items-start gap-2 backdrop-filter backdrop-blur-[7.317px]  lg:h-[195.262px] lg:w-[1376.593px]">
								<p className="lg:w-[953.03px] text-white text-center font-bold  lg:text-[39px] uppercase">
									Nơi lưu giữ những thành tích nổi bật của SEO OKVIP
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* end p7-bg */}
		</main>
	);
};
export default AboutPage;
