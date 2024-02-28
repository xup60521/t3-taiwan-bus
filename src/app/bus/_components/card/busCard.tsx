"use client";
import { useAtom } from "jotai";
import type { SetStateAction } from "jotai";
import { useEffect, useState } from "react";
import { ScrollArea } from "~/components/ui/scroll-area";
import * as BusAtom from "~/state/bus";
import { api } from "~/trpc/react";
import type { BusEst, BusStops } from "~/type/bus";
import "./progress.css";
import { FiMenu, FiPlus, FiMinus } from "react-icons/fi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import type { SetAtom } from "~/type/setAtom";
import { useSearchParams } from "next/navigation";
import { FaCircleInfo } from "react-icons/fa6";
import { useOverlay } from "~/hooks/useOverlay";

export default function BusCard() {
  const [direction, setDirection] = useAtom(BusAtom.directionAtom);
  const [bus] = useAtom(BusAtom.busAtom);
  const [headSign] = useAtom(BusAtom.headSignAtom);
  const [, setOpen] = useAtom(BusAtom.openDrawerAtom);
  const [, setPage] = useAtom(BusAtom.pageAtom);
  const city = useSearchParams().get("city") ?? "Taichung";
  const [station, setStation] = useAtom(BusAtom.stationAtom);
  const [seconds, setSeconds] = useState(14);
  const [busStops] = useAtom(BusAtom.busStopsAtom);
  const [busOverlay] = useAtom(BusAtom.overlayAtom);
  const add_remove_overlay = useOverlay()
  const busEst = api.bus.getBusEst.useQuery(
    {
      bus,
      city,
    },
    {
      enabled: Boolean(bus),
      refetchInterval: 15 * 1000,
      onSuccess() {
        setSeconds(15);
      },
    },
  );
  const busStops0 = busStops?.find((item) => item.Direction === 0)?.Stops;
  const headto0 = busStops0?.sort((a, b) => b.StopSequence - a.StopSequence)[0]
    ?.StopName.Zh_tw;
  const busStops1 = busStops?.find((item) => item.Direction === 1)?.Stops;
  const headto1 = busStops1?.sort((a, b) => b.StopSequence - a.StopSequence)[0]
    ?.StopName.Zh_tw;
  const direction0 = busEst.data?.filter((item) => item.Direction === 0);
  const direction1 = busEst.data?.filter((item) => item.Direction === 1);
  const isOneWay =
    (busStops0?.length ?? 0) > 0 && (busStops1?.length ?? 0) > 0 ? false : true;

  const isOverlayed = !!busOverlay.find(
    (d) => d.RouteName.Zh_tw === bus && d.Direction === Number(direction),
  );
  

  useEffect(() => {
    const intervalId2 = setInterval(() => {
      setSeconds((prev) => prev - 0.01);
    }, 10);
    return () => {
      clearInterval(intervalId2);
    };
  }, []);

  return (
    <div
      className={`bottom-0 left-0 box-border h-[50vh] w-screen transition duration-300 ease-in-out md:absolute md:h-screen md:w-[25rem] md:p-2 `}
    >
      <div className="flex h-full w-full flex-col gap-1 rounded-lg bg-white pb-1 text-black md:opacity-90">
        <div className="flex h-8 w-full items-center justify-center gap-2 bg-slate-700 p-1 font-bold text-white md:rounded-t-lg">
          <button onClick={() => setOpen(true)}>
            {headSign ? headSign : "選擇公車..."}
          </button>
          {!!bus && (
            <>
              <button className="flex items-center justify-center">
                <FaCircleInfo />
              </button>
              <button
                onClick={add_remove_overlay}
                className={`box-border flex h-fit items-center justify-center rounded border-[1.5px] font-bold transition-all ${isOverlayed ? "border-red-300 text-red-300 hover:bg-red-300 hover:text-white" : " border-white hover:bg-white hover:text-slate-700"}`}
              >
                {isOverlayed ? <FiMinus /> : <FiPlus />}
              </button>
            </>
          )}
        </div>
        <div
          className={`w-full ${isOneWay ? "" : "grid grid-cols-2"} relative gap-4 p-1`}
        >
          <button
            className={`h-8	 truncate rounded-md p-1 text-center font-semibold transition ${isOneWay ? "w-full" : ""} z-20`}
            onClick={() => setDirection("0")}
          >
            {headto0 ? `往${headto0}` : " "}
          </button>
          {isOneWay ? (
            ""
          ) : (
            <button
              className={`z-20 h-8 truncate rounded-md p-1 text-center font-semibold transition`}
              onClick={() => setDirection("1")}
            >
              {headto1 ? `往${headto1}` : " "}
            </button>
          )}
          {!isOneWay && Boolean(busEst.data) ? (
            <div
              className={`absolute left-1 top-1 z-10 h-8 w-[calc(50%-0.75rem)] rounded-md bg-slate-200 transition-all duration-300 ${direction === "1" ? "translate-x-[calc(100%+1rem)]" : ""} `}
            />
          ) : null}
        </div>
        <div className="flex h-4 items-center overflow-hidden px-1">
          <progress className=" h-1 w-full " max={14} value={seconds} />
        </div>
        <ScrollArea className="w-full">
          <div className="flex w-full flex-col gap-1 p-1">
            {direction === "0" && (
              <StopList
                stops={busStops0}
                station={station}
                list={direction0}
                setPage={setPage}
                setStation={setStation}
              />
            )}
            {direction === "1" && (
              <StopList
                stops={busStops1}
                station={station}
                list={direction1}
                setPage={setPage}
                setStation={setStation}
              />
            )}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}

const StopList = ({
  list,
  setPage,
  setStation,
  station,
  stops,
}: {
  list?: BusEst[];
  setPage: SetAtom<[SetStateAction<string>], void>;
  setStation: SetAtom<[SetStateAction<string>], void>;
  station: string;
  stops?: BusStops["Stops"];
}) => {
  const [t, setToggleStop] = useAtom(BusAtom.toggleStop);
  if (!list) {
    return "";
  }

  return (
    <>
      {stops
        ?.sort((a, b) => a.StopSequence - b.StopSequence)
        .map((item) => {
          let g = list.find((d) => d.StopSequence === item.StopSequence);
          if (!g) {
            g = list.find((d) => d.StopName.Zh_tw === item.StopName.Zh_tw);
          }
          return (
            <div
              className="flex w-full justify-between"
              key={`${item.StopSequence} ${item.StopName.Zh_tw}`}
            >
              <div className="flex h-full items-center gap-2">
                <RemainningTime
                  EstimateTime={g?.EstimateTime}
                  NextBusTime={g?.NextBusTime}
                />
                <button
                  onClick={() => {
                    setToggleStop({
                      stopName: item.StopName.Zh_tw,
                      id: t.id + 1,
                    });
                  }}
                  className="group relative"
                >
                  <span>{item.StopName.Zh_tw}</span>
                  <span
                    className={`absolute -bottom-1 left-1/2 h-0.5 w-0 bg-red-400 group-hover:w-1/2 group-hover:transition-all ${station === item.StopName.Zh_tw ? "w-1/2" : ""}`}
                  ></span>
                  <span
                    className={`absolute -bottom-1 right-1/2 h-0.5 w-0 bg-red-400 group-hover:w-1/2 group-hover:transition-all ${station === item.StopName.Zh_tw ? "w-1/2" : ""}`}
                  ></span>
                </button>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="bg-transparant h-fit  w-fit -translate-x-2 rounded border-2 border-slate-700 p-1 text-center font-bold text-slate-700 transition-all hover:bg-slate-700 hover:text-white">
                    <FiMenu />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem
                    onClick={() => {
                      setStation(item.StopName.Zh_tw);
                      setPage("station");
                    }}
                  >
                    <span>查看站牌</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          );
        })}
    </>
  );
};

const RemainningTime = ({
  EstimateTime,
  NextBusTime,
}: {
  EstimateTime: BusEst["EstimateTime"];
  NextBusTime: BusEst["NextBusTime"];
}) => {
  const min = Math.floor(Number(EstimateTime ?? 0) / 60);
  const color =
    min > 5 ? "bg-slate-100 text-slate-600" : "bg-red-200 text-red-900";
  if (EstimateTime) {
    return (
      <div className={`h-full w-20 rounded p-1 text-center ${color}`}>
        {`${min}`.padEnd(3, " ")}分鐘
      </div>
    );
  }

  if (EstimateTime === 0) {
    return (
      <div className={`h-full w-20 rounded p-1 text-center ${color}`}>
        進站中
      </div>
    );
  }

  if (!EstimateTime && NextBusTime) {
    const date = new Date(NextBusTime);
    const time = `${date.getHours()}:${date.getMinutes().toString().padStart(2, "0")}`;

    return (
      <div className="w-20 rounded-md border-2 border-slate-100 p-1 py-[0.125rem] text-center text-slate-700">
        {time}
      </div>
    );
  }
  return (
    <div className="w-20 rounded-md border-2 border-slate-100 p-1 py-[0.125rem] text-center text-slate-500">
      末班駛離
    </div>
  );
};
