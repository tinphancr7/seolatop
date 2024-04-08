import React from "react";
interface Heading2Props {
	children: React.ReactNode;
	bg: string;
	textColor: string;
	className?: string;
}
const Heading2 = ({children, bg, textColor, className}: Heading2Props) => {
	return (
		<div
			className={`flex items-center justify-center gap-2 lg:gap-5 mb-6 ${className}`}
		>
			<div
				className="w-[140px] lg:w-[482px] h-1 lg:h-4"
				style={{
					background: bg,

					clipPath: "polygon(100% 15%, 0 46%, 100% 86%)",
				}}
			></div>
			<span
				className={`font-bold text-base lg:text-4xl uppercase text-nowrap`}
				style={{
					color: textColor,
				}}
			>
				{children}
			</span>
			<div
				className="w-[140px] lg:w-[482px] h-1 lg:h-4"
				style={{
					background: bg,

					clipPath: "polygon(100% 15%, 0 46%, 100% 86%)",
					transform: "rotate(180deg)",
				}}
			></div>
		</div>
	);
};

export default Heading2;
