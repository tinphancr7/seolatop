"use client";
import { useDebounce } from "@/hooks/useDebounce";
import { Input } from "@nextui-org/react";
import { useRouter } from "next/navigation";

import React, { useCallback, useEffect, useState, useRef } from "react";
import { IoSearchSharp } from "react-icons/io5";

const InputSearch = ({ kind, type, search }: any) => {
  const router = useRouter();
  const initialRender = useRef(true);

  const [text, setText] = useState(search);
  const searchMatch = useDebounce(text, 500);

  const onClear = useCallback(() => {
    setText("");
  }, []);
  useEffect(() => {
    // let link =
    //   kind === "blog"
    //     ? `/${kind}?pageIndex=${pageIndex}&pageSize=${pageSize}&search=${searchMatch}&type=${type}`
    //     : `/${kind}?pageIndex=${pageIndex}&pageSize=${pageSize}&search=${searchMatch}`;
    if (initialRender.current) {
      initialRender.current = false;
      return;
    } else {
      if (!searchMatch) {
        router.push(`/${kind}-1`);
      } else {
        router.push(`/${kind}?search=${searchMatch}`);
      }
    }
  }, [kind, router, searchMatch]);
  return (
    <Input
      isClearable
      className="w-full max-w-[600px]"
      variant="bordered"
      radius="lg"
      classNames={{
        inputWrapper: "rounded-full text-white focus:border-white",
        input: "focus:border-white",
      }}
      placeholder="Search by name..."
      startContent={<IoSearchSharp size={24} />}
      value={text}
      onClear={() => onClear()}
      onValueChange={(value) => setText(value)}
    />
  );
};

export default InputSearch;
