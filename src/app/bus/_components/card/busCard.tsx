"use client"
import { useAtom } from "jotai"
import { useEffect, useId, useState } from "react"
import { ScrollArea } from "~/components/ui/scroll-area"
import * as BusAtom from "~/state/bus"
import { api } from "~/trpc/react"
import type { BusEst } from "~/type/bus"
import "./progress.css"

export default function BusCard() {

    const [direction, setDirection] = useAtom(BusAtom.directionAtom)
    const [bus] = useAtom(BusAtom.busAtom)
    const busEst = api.bus.getBusEst.useQuery(bus, {
        enabled: Boolean(bus),
        trpc: {
            ssr: true
        },
        refetchInterval: 15 * 1000,
        onSuccess() {
            setSeconds(15)
        },
    })
    const [seconds, setSeconds] = useState(14);
    const direction0 = busEst.data?.filter(item=>item.Direction === 0)
    const direction0_headto = direction0?.sort((a,b)=> b.StopSequence-a.StopSequence)[0]?.StopName.Zh_tw
    const direction1 = busEst.data?.filter(item=>item.Direction === 1)
    const direction1_headto = direction0?.sort((b,a)=> b.StopSequence-a.StopSequence)[0]?.StopName.Zh_tw
    const isOneWay = ((direction0?.length ?? 0 ) > 0 && (direction1?.length ?? 0) > 0 ? false : true)

    useEffect(()=>{
        
        const intervalId2 = setInterval(()=>{
            setSeconds(prev=>prev-0.01)
        }, 10)
        return ()=>{clearInterval(intervalId2)}
      }, [])

    return (
        <div className={`md:h-screen h-[50vh] md:w-[25rem] w-screen md:p-2 absolute left-0 top-0 transition duration-300 ease-in-out ${bus ? "" : "md:-translate-x-[100%]"}`} >
            <div className="w-full h-full rounded-lg opacity-90 bg-white text-black flex flex-col pb-1 gap-1">
                <div className={`w-full ${isOneWay ? "" : "grid grid-cols-2"} gap-4 p-1`}>
                    <button className={`truncate	 text-center p-1 h-8 rounded-md font-semibold transition ${isOneWay ? "w-full" : ""} ${direction === "0" ? "bg-slate-200" : ""}`} onClick={()=>setDirection("0")}>{direction0_headto ? `往${direction0_headto}` : " "}</button>
                    {isOneWay ? "" : (<button className={`truncate text-center p-1 h-8 rounded-md font-semibold transition ${direction === "1" ? "bg-slate-200" : ""}`} onClick={()=>setDirection("1")}>{direction1_headto?`往${direction1_headto}`: " "}</button>)}
                </div>
                <div className="px-1 h-4 overflow-hidden flex items-center">
                    <progress className=" w-full h-1 " max={14} value={seconds} />
                </div>
                <ScrollArea className="w-full">
                    <div className="w-full p-1 flex flex-col gap-1">
                        {direction === "0" && <StopList list={direction0} />}
                        {direction === "1" && <StopList list={direction1} />}
                    </div>
                </ScrollArea>
            </div>
        </div>
    )
}

const StopList = ({list}:{list?: BusEst[]}) => {
    
    const [t,setToggleStop] = useAtom(BusAtom.toggleStop)
    if (!list) {
        return ""
    }

    return (
        <>
            {list.sort((a,b)=>a.StopSequence-b.StopSequence).map(item=>{
                return (
                <div className="w-full flex items-center gap-2" key={`${item.StopSequence} ${item.StopName.Zh_tw}`}>
                    <RemainningTime 
                        EstimateTime={item.EstimateTime} 
                        StopStatus={item.StopStatus} 
                        NextBusTime={item.NextBusTime}
                    />
                    <button onClick={()=>{
                        setToggleStop({
                            stopName: item.StopName.Zh_tw,
                            id: t.id+1
                        })}}
                        className="relative group"
                    >
                        <span>{item.StopName.Zh_tw}</span>
                        <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-red-400 group-hover:w-1/2 group-hover:transition-all"></span>
                                <span className="absolute -bottom-1 right-1/2 w-0 h-0.5 bg-red-400 group-hover:w-1/2 group-hover:transition-all"></span>
                    </button>
                </div>
                )
            })}
        </>
    )
}

const RemainningTime = ({
        EstimateTime,
        StopStatus,
        NextBusTime
    }:
    {
        EstimateTime: BusEst["EstimateTime"],
        StopStatus: BusEst["StopStatus"],
        NextBusTime: BusEst["NextBusTime"]
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