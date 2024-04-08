import React from "react";
type Props = {
  children: React.ReactNode;
  type: string;
};
const ACardContent = ({ children, type }: Props) => {
  let containerClass: string | null = null;

  if (type === "content-2") {
    containerClass = "lg:h-[555px]";
  }
  return (
    <div className="flex items-center justify-center">
      <div
        className={`img_border_about_content relative  w-full lg:w-[1564px] flex  justify-center  px-3  lg:top-[-100px] ${containerClass}`}
      >
        <p className=" text-base lg:text-2xl text-white lg:w-[1123px] lg:top-[100px] lg:py-[120px]">
          {children}
        </p>
      </div>
    </div>
  );
};
export default ACardContent;
