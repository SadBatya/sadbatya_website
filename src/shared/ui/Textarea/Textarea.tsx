"use client";

import { useState } from "react";
import { Button } from "@/shared/ui";

interface Props {
  placeholder: string;
  name: string;
  sample?: string;
}

export const Textarea = ({ placeholder, name, sample, ...props }: Props) => {
  const [value, setValue] = useState("");

  return (
    <div className="relative w-full">
      <textarea
        {...props}
        defaultValue={value}
        placeholder={placeholder}
        name={name}
        id=""
        className="px-4 py-2 outline-none w-full h-[150px] resize-none rounded-md border border-[#3f3f3f] shadow-md shadow-white/10 transition-all duration-500 focus:shadow-white/30"
      />
      {sample && (
        <Button
          onClick={() => setValue(sample)}
          className="absolute bottom-2 right-2 text-sm text-nowrap"
        >
          Использовать шаблон
        </Button>
      )}
    </div>
  );
};
