"use client";

import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { ScrollArea } from "~/components/ui/scroll-area";
import { RNN } from "~/lib/utils";
import * as BusAtom from "~/state/bus";
import { api } from "~/trpc/react";
import type { BusRoutePassBy } from "~/type/bus";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { FiMenu } from "react-icons/fi";
import { useOverlay } from "~/hooks/useOverlay";
import { useSearchParams } from "next/navigation";
import { useSetURLSearchParams } from "~/hooks/useSetURLParams";

export default function StationCard({ city }: { city: string }) {
  // const [station] = useAtom(BusAtom.stationAtom)
  const [seconds, setSeconds] = useState(14);
  // const [bus,setBus] = useAtom(BusAtom.busAtom)
  // const [,setPage] = useAtom(BusAtom.pageAtom)
  // const [direction,setDirection] = useAtom(BusAtom.directionAtom)
  const searchParams = useSearchParams();
  const station = searchParams.get("station") ?? "";
  const bus = searchParams.get("bus") ?? "";
  const direction = searchParams.get("direction") ?? "";
  const [, setOpen] = useAtom(BusAtom.openStationPopupAtom);
  const data = api.bus.getRoutePassBy.useQuery(
    {
      stopName: station,
      city,
    },
    {
      enabled: Boolean(station),
      refetchInterval: 15 * 1000,
      onSuccess() {
        setSeconds(15);
      },
    },
  );

  useEffect(() => {
    const intervalId1 = setInterval(() => {
      setSeconds((prev) => prev - 0.01);
    }, 10);
    return () => {
      clearInterval(intervalId1);
    };
  }, []);

  return (
    <div
      className={`bottom-0 left-0 box-border h-[50%] w-screen transition duration-300 ease-in-out md:absolute md:h-screen md:w-[25rem] md:p-2 `}
    >
      <div className="flex h-full w-full flex-col gap-1 rounded-lg bg-white pb-1 text-black md:opacity-90">
        <button
          onClick={() => setOpen(true)}
          className="h-8 w-full bg-slate-700 p-1 font-bold text-white md:rounded-t-lg"
        >
          {station ? station : "選擇站牌..."}
        </button>
        <div className="flex h-4 items-center overflow-hidden px-1">
          <progress className=" h-1 w-full " max={14} value={seconds} />
        </div>
        <ScrollArea className="w-full">
          <div className="flex w-full flex-col gap-1 p-1">
            <BusList
              bus={bus}
              direction={direction}
              list={data.data}
            />
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}

const BusList = ({
  list,
  bus,
  direction,
}: {
  list?: BusRoutePassBy[];
  bus: string;
  direction: string;
}) => {
  const [busOverlay] = useAtom(BusAtom.overlayAtom);
    const setSearchParams = useSetURLSearchParams()
  const add_remove_overlay = useOverlay();

  return (
    <>
      {list
        ?.sort(
          (a, b) =>
            Number(RNN(a.RouteName.Zh_tw)) - Number(RNN(b.RouteName.Zh_tw)),
        )
        .map((item) => {
          const isOverlayed = !!busOverlay.find(
            (d) =>
              d.RouteName.Zh_tw === item.RouteName.Zh_tw &&
              item.Direction === Number(direction),
          );
          return (
            <div
              key={`${item.Direction} ${item.RouteName.Zh_tw} ${item.StopSequence}`}
              className="flex w-full justify-between"
            >
              <div className="flex h-full items-center gap-2">
                <RemainningTime
                  EstimateTime={item.EstimateTime}
                  NextBusTime={item.NextBusTime}
                />
                <button
                  onClick={() => {
                    // setBus(item.RouteName.Zh_tw);
                    // setDirection(
                    //   String(item.Direction === 255 ? 0 : item.Direction),
                    // );
                    setSearchParams([{
                        key: "bus",
                        value: item.RouteName.Zh_tw
                    },{
                        key: "direction",
                        value: String(item.Direction === 255 ? 0 : item.Direction),
                    }])
                  }}
                  className="group relative"
                >
                  <span>{item.RouteName.Zh_tw}</span>
                  <span
                    className={`absolute -bottom-1 left-1/2 h-0.5 w-0 bg-red-400 group-hover:w-1/2 group-hover:transition-all ${bus === item.RouteName.Zh_tw && direction === `${item.Direction}` && "w-1/2"}`}
                  ></span>
                  <span
                    className={`absolute -bottom-1 right-1/2 h-0.5 w-0 bg-red-400 group-hover:w-1/2 group-hover:transition-all ${bus === item.RouteName.Zh_tw && direction === `${item.Direction}` && "w-1/2"}`}
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
                    //   setDirection(
                    //     String(item.Direction === 255 ? 0 : item.Direction),
                    //   );
                    //   setBus(item.RouteName.Zh_tw);
                    //   setPage("bus");
                      setSearchParams([{
                        key: "bus",
                        value: item.RouteName.Zh_tw
                    },{
                        key: "direction",
                        value: String(item.Direction === 255 ? 0 : item.Direction),
                    }, {
                        key: "page",
                        value: "bus"
                    }])
                    }}
                  >
                    <span>查看路線</span>
                  </DropdownMenuItem>
                  {bus === item.RouteName.Zh_tw &&
                    Number(direction) === item.Direction && (
                      <DropdownMenuItem onClick={add_remove_overlay}>
                        <span>
                          {isOverlayed ? "移除疊加路線" : "新增疊加路線"}
                        </span>
                      </DropdownMenuItem>
                    )}
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
  EstimateTime: BusRoutePassBy["EstimateTime"];
  NextBusTime: BusRoutePassBy["NextBusTime"];
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
