'use client'
import dynamic from "next/dynamic"
import type { BusList } from "~/type/bus"
import DrawerSection from "~/app/[city]/_components/drawer/drawer"
import BusCard from "~/app/[city]/_components/card/busCard"
import { useEffect, useState } from "react"
import PageController from "~/app/[city]/_components/pageController/pageController"
import * as BusAtom from "~/state/bus"
import { useAtom } from "jotai"
import StationCard from "~/app/[city]/_components/card/stationCard"
import PopupSection from "~/app/[city]/_components/popup/PopupSetStation"
import NoteCard from "./_components/card/noteCard"
import { getAllStop } from "~/server_action/getAllStop"
import OverlayCard from "./_components/card/overlayCard"
import { Toaster } from "~/components/ui/toaster"
import { useSearchParams } from "next/navigation"

const Map = dynamic(()=>import("~/app/[city]/_components/map/map"))

export default function Bus({city}:{city:string}) {

    const searchParams = useSearchParams()
    const page = searchParams.get("page") ?? "bus"
    const [openPopup] = useAtom(BusAtom.openStationPopupAtom)
    const [initBusList, setinitBusList] = useState<BusList[] | null>(null)

    useEffect(()=>{
        getAllStop(city ?? undefined).then(data=>setinitBusList(data)).catch(err=>alert(err))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    if (!initBusList) {
        return "loading..."
    }
    
    return (
        <>
            {/* <DevTools /> */}
            <main className={`${openPopup ? "blur" : ""} transition-all box-border w-screen h-screen bg-slate-800 text-white overflow-hidden flex-col flex`}>
                <DrawerSection initBusList={initBusList} /> 
                <Map city={city}  />
                {page==="bus" && <BusCard city={city} />}
                {page==="station" && <StationCard city={city} />}
                {page==="note" && <NoteCard />}
                {page==="overlay" && <OverlayCard />}
                <PageController />  
                <PopupSection city={city} />
                <Toaster />
            </main>
        </>
    )
}

