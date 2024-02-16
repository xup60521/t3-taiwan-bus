'use client'

import { useAtom } from "jotai"
import type {SetStateAction} from "jotai"
import { useEffect, useState } from "react"
import { ScrollArea } from "~/components/ui/scroll-area"
import { RNN } from "~/lib/utils"
import * as BusAtom from "~/state/bus"
import { api } from "~/trpc/react"
import type { BusRoutePassBy } from "~/type/bus"
import type { SetAtom } from "~/type/setAtom"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "~/components/ui/dropdown-menu"
import { FiMenu } from "react-icons/fi"

export default function StationCard() {

    const [station] = useAtom(BusAtom.stationAtom)
    const [seconds, setSeconds] = useState(14);
    const [bus,setBus] = useAtom(BusAtom.busAtom)
    const [,setPage] = useAtom(BusAtom.pageAtom)
    const [direction,setDirection] = useAtom(BusAtom.directionAtom)
    const [,setOpen] = useAtom(BusAtom.openPopupAtom)
    const data = api.bus.getRoutePassBy.useQuery(station, {
        enabled: Boolean(station),
        refetchInterval: 15 * 1000,
        onSuccess() {
            setSeconds(15)
        },
    })

    useEffect(()=>{
        
        const intervalId1 = setInterval(()=>{
            setSeconds(prev=>prev-0.01)
        }, 10)
        return ()=>{clearInterval(intervalId1)}
      }, [])

    return (
        <div className={`box-border md:h-screen h-[50%] md:w-[25rem] w-screen md:p-2 md:absolute left-0 bottom-0 transition duration-300 ease-in-out `} >
            <div className="w-full h-full rounded-lg md:opacity-90 bg-white text-black flex flex-col pb-1 gap-1">
                <button onClick={()=>setOpen(true)} className="h-8 w-full p-1 bg-slate-700 text-white font-bold md:rounded-t-lg">{station ? station : "選擇站牌..."}</button>
                <div className="px-1 h-4 overflow-hidden flex items-center">
                    <progress className=" w-full h-1 " max={14} value={seconds} />
                </div>
                <ScrollArea className="w-full">
                    <div className="w-full p-1 flex flex-col gap-1">
                        <BusList bus={bus} direction={direction} setPage={setPage} list={data.data} setBus={setBus} setDirection={setDirection} />
                    </div>
                </ScrollArea>
            </div>
        </div>
    )
}

const BusList = ({
    list,
    setBus,
    setDirection,
    setPage,
    bus,
    direction
}: {
    list?: BusRoutePassBy[],
    setBus: SetAtom<[SetStateAction<string>], void>
    setDirection: SetAtom<[SetStateAction<string>], void>,
    setPage: SetAtom<[SetStateAction<string>], void>,
    bus: string,
    direction: string
}) => {
return  (  
    <>
        {list?.sort((a,b)=>Number(RNN(a.RouteName.Zh_tw)) - Number(RNN(b.RouteName.Zh_tw))).map(item=>{
            return (
            <div key={`${item.Direction} ${item.RouteName.Zh_tw} ${item.StopSequence}`} className="w-full flex justify-between">
                <div className="h-full flex items-center gap-2">
                    <RemainningTime 
                        EstimateTime={item.EstimateTime}
                        NextBusTime={item.NextBusTime}
                    />
                    <button onClick={()=>{
                        setBus(item.RouteName.Zh_tw)
                        setDirection(String(item.Direction))
                    }}
                        className="relative group"
                    >
                        <span>{item.RouteName.Zh_tw}</span>
                        <span className={`absolute -bottom-1 left-1/2 w-0 h-0.5 bg-red-400 group-hover:w-1/2 group-hover:transition-all ${(bus === item.RouteName.Zh_tw && direction === `${item.Direction}`) && "w-1/2"}`}></span>
                        <span className={`absolute -bottom-1 right-1/2 w-0 h-0.5 bg-red-400 group-hover:w-1/2 group-hover:transition-all ${(bus === item.RouteName.Zh_tw && direction === `${item.Direction}`) && "w-1/2"}`}></span>
                    </button>
                </div>
                <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <button className="-translate-x-2 border-2  border-slate-700 hover:bg-slate-700 hover:text-white transition-all bg-transparant font-bold text-slate-700 p-1 w-fit rounded h-fit text-center"><FiMenu /></button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem onClick={()=>{
                                setDirection(String(item.Direction))
                                setBus(item.RouteName.Zh_tw)
                                setPage("bus")
                            }}>
                                <span>查看路線</span>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
            </div>
            )
        })}
    </>
    )
}

const RemainningTime = ({
    EstimateTime,
    NextBusTime
}:
{
    EstimateTime: BusRoutePassBy["EstimateTime"],
    NextBusTime: BusRoutePassBy["NextBusTime"]
}) => {

const min = Number(EstimateTime ?? 0) / 60
const color = (min > 5 ? "bg-slate-100 text-slate-600" : "bg-red-200 text-red-900")
if (EstimateTime) {
    return <div className={`w-20 p-1 text-center h-full rounded ${color}`}>
        {`${min}`.padEnd(3, " ")}分鐘
    </div>
}

if (EstimateTime === 0) {
    return <div className={`w-20 p-1 text-center h-full rounded ${color}`}>
        進站中
    </div>
}

if (!EstimateTime && NextBusTime) {

    const date = new Date(NextBusTime)
    const time = `${date.getHours()}:${date.getMinutes().toString().padStart(2, "0")}`

    return (
        <div className="w-20 p-1 py-[0.125rem] text-center rounded-md border-slate-100 border-2 text-slate-700">
            {time}
        </div>
    )
}
return <div className="w-20 p-1 py-[0.125rem] text-center rounded-md border-slate-100 border-2 text-slate-500">
            末班駛離
        </div>
}