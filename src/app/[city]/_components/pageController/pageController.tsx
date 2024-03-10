"use client";

import { useSearchParams } from "next/navigation";
import { useSetURLSearchParams } from "~/hooks/useSetURLParams";

export default function PageController() {
  // const [page, setPage] = useAtom(BusAtom.pageAtom);
  const searchParams = useSearchParams()
  const setSearchParams = useSetURLSearchParams()
  const page = searchParams.get("page") ?? ""

  return (
    <div className="absolute left-[50vw] top-2 box-border flex h-8 -translate-x-[50%] rounded-xl bg-white text-sm text-black md:top-[calc(100vh-2.5rem)]">
      <button
        className="z-20 h-8 w-12 text-center font-bold"
        onClick={() => setSearchParams([{
          key: "page",
          value: "bus"
        }])}
      >
        公車
      </button>
      <button
        className="z-20 h-8 w-12 text-center font-bold"
        onClick={() => setSearchParams([{
          key: "page",
          value: "station"
        }])}
      >
        站牌
      </button>
      <button
        className="z-20 h-8 w-12 text-center font-bold"
        onClick={() => setSearchParams([{
          key: "page",
          value: "note"
        }])}
      >
        筆記
      </button>
      <button
        className="z-20 h-8 w-12 text-center font-bold"
        onClick={() => setSearchParams([{
          key: "page",
          value: "overlay"
        }])}
      >
        疊加
      </button>
      <div
        className={`
        absolute left-0 z-10 h-8 w-12 rounded-xl bg-orange-100 transition-all duration-300 
        ${
          page === "station"
            ? "translate-x-[100%]"
            : `${
                page === "note"
                  ? "translate-x-[200%]"
                  : `${page === "overlay" ? "translate-x-[300%]" : ""}`
              }`
        }`}
      />
    </div>
  );
}
