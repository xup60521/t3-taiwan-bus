"use client";
import { useAtom } from "jotai";
import * as BusAtom from "~/state/bus";
import Popup from "reactjs-popup";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { FaSearch, FaSpinner } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { type BusStopSearchResult } from "~/type/bus";
import { ScrollArea } from "~/components/ui/scroll-area";
import { searchStop } from "~/server_action/searchStop";
import { useSetURLSearchParams } from "~/hooks/useSetURLParams";

export default function PopupSetStation({city}: {city: string}) {
  const [open, setOpen] = useAtom(BusAtom.openStationPopupAtom);
  const [result, setResult] = useState<BusStopSearchResult[] | null>(null);
  const [loading, setLoading] = useState(false);
  // const setStation = useSetAtom(BusAtom.stationAtom)
  const setSearchParams = useSetURLSearchParams()
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSearch = async () => {
    if (inputRef.current?.value && city) {
      setLoading(true);
      searchStop(inputRef.current.value, city)
        .then((data) => {
          setResult([...data]);
          setLoading(false);
        })
        .catch((err) => alert(err));
    }
  };

  const handleEnter = async (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && inputRef.current?.value && city) {
      await handleSearch();
    }
  };

  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
    }
  }, [open]);

  return (
    <Popup open={open} onClose={() => setOpen(false)}>
      <div className="flex w-[95vw] flex-col  items-center gap-3 rounded-lg bg-white p-4 transition-all md:w-[40rem]">
        <h3 className="w-full text-center text-xl">搜尋站牌</h3>
        <div className="flex w-full gap-2">
          <Input onKeyDown={handleEnter} ref={inputRef} className="flex-grow" />
          <Button onClick={handleSearch} className="bg-slate-700">
            {loading ? <FaSpinner className="animate-spin" /> :<FaSearch />}
          </Button>
        </div>
        <ScrollArea className="w-full">
          <div className="max-h-[70vh] w-full">
            {result
              ?.map((d) => d.StopName.Zh_tw)
              .filter((d, i, arr) => arr.indexOf(d) === i)
              .map((item, index) => {
                return (
                  <>
                    {index !== 0 && (
                      <div className="mx-1 w-full border-t-[0.05rem] border-slate-100" />
                    )}
                    <div
                      onClick={() => {
                        setOpen(false);
                        setSearchParams([{
                          key: "station",
                          value: item
                        }])
                      }}
                      key={`${item}`}
                      className="rounded-md p-2 py-3 transition-all hover:cursor-pointer hover:bg-slate-100"
                    >
                      {item}
                    </div>
                  </>
                );
              })}
          </div>
        </ScrollArea>
        <Button className="w-fit" onClick={() => setOpen(false)}>
          取消
        </Button>
      </div>
    </Popup>
  );
}
