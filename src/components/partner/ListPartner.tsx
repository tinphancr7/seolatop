import {listPartners} from "@/constants";
import Image from "next/image";

const ListPartner = () => {
	return (
		<div className="grid grid-cols-12 gap-3 ">
			{listPartners.map((item, index) => (
				<div key={index} className="col-span-4 lg:col-span-2 ">
					<div className="w-full h-[42px] lg:h-[96px] relative">
						<Image
							src={item?.url}
							className="object-cover"
							alt={item?.name || ""}
						/>
					</div>
				</div>
			))}
		</div>
	);
};

export default ListPartner;
