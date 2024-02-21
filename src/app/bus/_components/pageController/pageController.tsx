"use client"

import { useAtom } from "jotai"
import * as BusAtom from "~/state/bus"

export default function PageController() {
    const [page, setPage] = useAtom(BusAtom.pageAtom)

    return (
        <div className="box-border h-8 flex absolute left-[50vw] -translate-x-[50%] md:top-[calc(100vh-2.5rem)] top-2 bg-white text-black text-sm rounded-xl">
            <button className="w-12 h-8 text-center font-bold z-20" onClick={()=>setPage("bus")}>公車</button>
            <button className="w-12 h-8 text-center font-bold z-20" onClick={()=>setPage("station")}>站牌</button>
            <button className="w-12 h-8 text-center font-bold z-20" onClick={()=>setPage("note")}>筆記</button>
            <div className={`w-12 left-0 h-8 absolute z-10 bg-orange-100 rounded-xl transition-all duration-300 ${page==="station" ? "translate-x-[100%]" : `${page==="note" ? "translate-x-[200%]" : ""}`}`} />
        </div>
    )
}