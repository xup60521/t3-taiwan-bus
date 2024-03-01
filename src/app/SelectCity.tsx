"use client";

import { useState } from "react";
import ReactSelect from "react-select";
import Link from "next/link";

export default function SelectCity({
  list,
}: {
  list: {
    label: string;
    value: string;
  }[];
}): React.ReactNode {
  const [value, setValue] = useState("");

  return (
    <section
      id="start"
      className="flex h-screen w-screen flex-col items-center gap-4 justify-center"
    >
      <h2 className="text-3xl font-mono">Select a city</h2>
      <div className="w-full flex md:flex-row flex-col items-center gap-2 justify-center">
        <ReactSelect
          placeholder="選擇城市..."
          className="w-48 text-black"
          options={list}
          onChange={(e) => setValue(e?.value ?? "")}
        />
        {list.map((item) => {
          if (!value) {
            return null;
          }
          if (item.value === value) {
            return (
              <Link
                className="rounded-lg bg-sky-500 p-2 px-6 font-bold text-white transition-all hover:bg-sky-400"
                key={item.value}
                href={`/bus?city=${item.value}`}
              >
                進入
              </Link>
            );
          }
        })}
      </div>
    </section>
  );
}
