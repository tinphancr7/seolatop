import { URL_IMAGE } from "@/constants";
import moment from "moment";
import Image from "next/image";
import React from "react";

const CardItem = ({ onOpen, item, onChosenItem }: any) => {
  return (
    <>
      <div
        className="col-span-6 lg:col-span-4 cursor-pointer"
        onClick={() => {
          onOpen();
          onChosenItem(item);
        }}
      >
        <div className="w-full h-[114px] lg:h-[300px] relative rounded-[20px] border-2 border-green32 mb-2 shadow-card">
          <Image
            src={`${URL_IMAGE}/${item?.images[0]}`}
            alt="mb66"
            fill
            className="object-cover rounded-[20px]"
          />
        </div>
        <div>
          <h4 className="text-green32 text-base lg:text-2xl font-bold line-clamp-2">
            {item?.title}
          </h4>
          <span className="text-base lg:text-xl font-normal text-gray7E">
            {moment().format("DD/MM/YYYY")}
          </span>
        </div>
      </div>
    </>
  );
};

export default CardItem;
