import {listPartners, listPartnersMobile} from "@/constants";
import Image from "next/image";
import Marquee from "react-fast-marquee";
const ListPartner = () => {
	return (
		<>
			<div className="hidden lg:block">
				<Marquee>
					{listPartners.map((item, index) => (
						<div key={index} className="px-5">
							<Image
								src={item?.url}
								className="object-cover"
								alt={item?.name || ""}
							/>
						</div>
					))}
				</Marquee>
			</div>
			<div className="block lg:hidden">
				<Marquee>
					{listPartnersMobile.map((item, index) => (
						<div key={index} className="px-5">
							<Image
								src={item?.url}
								className="object-cover"
								alt={item?.name || ""}
							/>
						</div>
					))}
				</Marquee>
			</div>
		</>
	);
};

export default ListPartner;
