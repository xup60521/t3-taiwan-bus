"use client"
import {  useAtom } from "jotai"
import type {SetStateAction} from "jotai"
import { useEffect, useState } from "react"
import { ScrollArea } from "~/components/ui/scroll-area"
import * as BusAtom from "~/state/bus"
import { api } from "~/trpc/react"
import type { BusEst, BusStops } from "~/type/bus"
import "./progress.css"
import {FiMenu} from "react-icons/fi"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "~/components/ui/dropdown-menu"
import type { SetAtom } from "~/type/setAtom"
import { useSearchParams } from "next/navigation"

export default function BusCard() {

    const [direction, setDirection] = useAtom(BusAtom.directionAtom)
    const [bus] = useAtom(BusAtom.busAtom)
    const [headSign] = useAtom(BusAtom.headSignAtom)
    const [,setOpen] = useAtom(BusAtom.openDrawerAtom)
    const [,setPage] = useAtom(BusAtom.pageAtom)
    const city = useSearchParams().get("city") ?? "Taichung"
    const [station,setStation] = useAtom(BusAtom.stationAtom)
    const [seconds, setSeconds] = useState(14);
    const [busStops] = useAtom(BusAtom.busStopsAtom)
    const busEst = api.bus.getBusEst.useQuery({
        bus,
        city
    }, {
        enabled: Boolean(bus),
        refetchInterval: 15 * 1000,
        onSuccess() {
            setSeconds(15)
        },
    })
    const busStops0 = busStops?.find(item=>item.Direction === 0)?.Stops
    const headto0 = busStops0?.sort((a,b)=> b.StopSequence-a.StopSequence)[0]?.StopName.Zh_tw
    const busStops1 = busStops?.find(item=>item.Direction === 1)?.Stops
    const headto1 = busStops1?.sort((a,b)=> b.StopSequence-a.StopSequence)[0]?.StopName.Zh_tw
    const direction0 = busEst.data?.filter(item=>item.Direction === 0)
    const direction0_headto = direction0?.sort((a,b)=> b.StopSequence-a.StopSequence)[0]?.StopName.Zh_tw
    const direction1 = busEst.data?.filter(item=>item.Direction === 1)
    const direction1_headto = direction0?.sort((b,a)=> b.StopSequence-a.StopSequence)[0]?.StopName.Zh_tw
    const isOneWay = ((busStops0?.length ?? 0 ) > 0 && (busStops1?.length ?? 0) > 0 ? false : true)
    

    useEffect(()=>{
        
        const intervalId2 = setInterval(()=>{
            setSeconds(prev=>prev-0.01)
        }, 10)
        return ()=>{clearInterval(intervalId2)}
      }, [])

    return (
        <div className={`box-border md:h-screen h-[50vh] md:w-[25rem] w-screen md:p-2 md:absolute left-0 bottom-0 transition duration-300 ease-in-out `} >
            <div className="w-full h-full rounded-lg md:opacity-90 bg-white text-black flex flex-col pb-1 gap-1">
                <button className="h-8 w-full p-1 bg-slate-700 text-white font-bold md:rounded-t-lg" onClick={()=>setOpen(true)}>{headSign ? headSign : "選擇公車..."}</button>
                
                
                    <div className={`w-full ${isOneWay ? "" : "grid grid-cols-2"} gap-4 p-1 relative`}>
                        <button className={`truncate	 text-center p-1 h-8 rounded-md font-semibold transition ${isOneWay ? "w-full" : ""} z-20`} onClick={()=>setDirection("0")}>{headto0 ? `往${headto0}` : " "}</button>
                        {isOneWay ? "" : (<button className={`truncate text-center p-1 h-8 rounded-md font-semibold transition z-20`} onClick={()=>setDirection("1")}>{headto1?`往${headto1}`: " "}</button>)}
                        {!isOneWay && Boolean(busEst.data) ? <div className={`z-10 w-[calc(50%-0.75rem)] absolute left-1 top-1 h-8 rounded-md bg-slate-200 transition-all duration-300 ${direction === "1" ? "translate-x-[calc(100%+1rem)]" : ""} `} /> : null}
                    </div>
                    <div className="px-1 h-4 overflow-hidden flex items-center">
                        <progress className=" w-full h-1 " max={14} value={seconds} />
                    </div>
                    <ScrollArea className="w-full">
                        <div className="w-full p-1 flex flex-col gap-1">
                            {direction === "0" && <StopList stops={busStops0} station={station} list={direction0} setPage={setPage} setStation={setStation} />}
                            {direction === "1" && <StopList stops={busStops1} station={station} list={direction1} setPage={setPage} setStation={setStation} />}
                            {/* {JSON.stringify(busEst.data)} */}
                        </div>
                    </ScrollArea>
                
            </div>
        </div>
    )
}



const StopList = ({
    list,
    setPage,
    setStation,
    station,
    stops
}:{
    list?: BusEst[],
    setPage: SetAtom<[SetStateAction<string>], void>,
    setStation: SetAtom<[SetStateAction<string>], void>,
    station: string,
    stops?: BusStops["Stops"]
}) => {
    
    const [t,setToggleStop] = useAtom(BusAtom.toggleStop)
    if (!list) {
        return ""
    }
    

    return (
        <>
            {stops?.sort((a,b)=>a.StopSequence-b.StopSequence).map(item=>{
                const g = list.find(d=>d.StopSequence===item.StopSequence)
                return (
                <div className="w-full flex justify-between" key={`${item.StopSequence} ${item.StopName.Zh_tw}`}>
                    <div className="h-full flex items-center gap-2">
                        <RemainningTime 
                            EstimateTime={g?.EstimateTime} 
                            NextBusTime={g?.NextBusTime}
                        />
                        <button onClick={()=>{
                            setToggleStop({
                                stopName: item.StopName.Zh_tw,
                                id: t.id+1
                            })}}
                            className="relative group"
                        >
                            <span>{item.StopName.Zh_tw}</span>
                            <span className={`absolute -bottom-1 left-1/2 w-0 h-0.5 bg-red-400 group-hover:w-1/2 group-hover:transition-all ${station === item.StopName.Zh_tw ? "w-1/2" : ""}`}></span>
                            <span className={`absolute -bottom-1 right-1/2 w-0 h-0.5 bg-red-400 group-hover:w-1/2 group-hover:transition-all ${station === item.StopName.Zh_tw ? "w-1/2" : ""}`}></span>
                        </button>
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <button className="-translate-x-2 border-2  border-slate-700 hover:bg-slate-700 hover:text-white transition-all bg-transparant font-bold text-slate-700 p-1 w-fit rounded h-fit text-center"><FiMenu /></button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem onClick={()=>{
                                setStation(item.StopName.Zh_tw)
                                setPage("station")
                            }}>
                                <span>查看站牌</span>
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
        EstimateTime: BusEst["EstimateTime"],
        NextBusTime: BusEst["NextBusTime"]
    }) => {

    const min = Math.floor(Number(EstimateTime ?? 0) / 60)
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