import Card from "@/components/card/Card";
import Heading from "@/components/heading/Heading";
import React from "react";

const Hero = () => {
	return (
		<div className="px-4 lg:px-0">
			<div className=" w-full hidden lg:flex items-center gap-20">
				<div className="w-[123px] lg:w-[312px] flex-shrink-0 ">
					<Card name="seo" dataOrder={199} orderActive={200} />
				</div>
				<div>
					<h3 className="text-xl lg:text-3xl font-bold text-white lg:pb-4">
						QUẢN LÝ BỘ PHẬN S.E.O
					</h3>
					<p className="text-base lg:text-2xl  text-white">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum Lorem ipsum
						dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim
						veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
						ea commodo consequat. Duis aute irure dolor in reprehenderit in
						voluptate velit esse cillum dolore eu fugiat nulla pariatur.
						Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
						officia deserunt mollit anim id est laborum
					</p>
				</div>
			</div>

			<div className="text-base lg:text-2xl  text-white lg:hidden ">
				<div className="w-[123px] lg:w-[312px] flex-shrink-0 float-left  mr-5">
					<Card name="seo" dataOrder={199} orderActive={200} />
				</div>
				<h3 className="text-lg lg:text-3xl font-bold text-white lg:pb-4">
					QUẢN LÝ BỘ PHẬN S.E.O
				</h3>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
				imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae
				scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec
				congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut
				aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio.
				Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc
				sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero
				sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget
				tellus gravida venenatis. Integer fringilla congue eros non fermentum.
				Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis
				diam velit.
			</div>
		</div>
	);
};
export default Hero;
