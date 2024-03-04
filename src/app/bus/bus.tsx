'use client'
import dynamic from "next/dynamic"
import type { BusList } from "~/type/bus"
import DrawerSection from "~/app/bus/_components/drawer/drawer"
import SyncSearchParams from "~/lib/SyncSearchParams"
import BusCard from "~/app/bus/_components/card/busCard"
import { Suspense, useEffect, useState } from "react"
import PageController from "~/app/bus/_components/pageController/pageController"
import * as BusAtom from "~/state/bus"
import { useAtom } from "jotai"
import StationCard from "~/app/bus/_components/card/stationCard"
import PopupSection from "~/app/bus/_components/popup/PopupSetStation"
import NoteCard from "./_components/card/noteCard"
import { getAllStop } from "~/server_action/getAllStop"
import { useSearchParams } from "next/navigation"
import OverlayCard from "./_components/card/overlayCard"
import { Toaster } from "~/components/ui/toaster"
import { DevTools } from 'jotai-devtools'

const Map = dynamic(()=>import("~/app/bus/_components/map/map"), {ssr: false})

export default function Bus() {

    const [page] = useAtom(BusAtom.pageAtom)
    const [openPopup] = useAtom(BusAtom.openStationPopupAtom)
    const [initBusList, setinitBusList] = useState<BusList[] | null>(null)
    const city = useSearchParams().get("city")

    useEffect(()=>{
        getAllStop(city ?? undefined).then(data=>setinitBusList(data)).catch(err=>alert(err))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    if (!initBusList) {
        return "loading..."
    }
    
    return (
        <>
            <Suspense>
                <SyncSearchParams />
            </Suspense>
            {/* <DevTools /> */}
            <main className={`${openPopup ? "blur" : ""} transition-all box-border w-screen h-screen bg-slate-800 text-white overflow-hidden flex-col flex`}>
                <DrawerSection initBusList={initBusList} /> 
                <Map />
                {page==="bus" && <BusCard />}
                {page==="station" && <StationCard />}
                {page==="note" && <NoteCard />}
                {page==="overlay" && <OverlayCard />}
                <PageController />  
                <PopupSection />
                <Toaster />
            </main>
        </>
    )
}

