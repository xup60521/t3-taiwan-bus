'use client'
import dynamic from "next/dynamic"
import type { BusList } from "~/type/bus"
import DrawerSection from "~/app/bus/_components/drawer/drawer"
import SyncSearchParams from "~/lib/SyncSearchParams"
import BusCard from "~/app/bus/_components/card/busCard"
import { Suspense } from "react"
import PageController from "~/app/bus/_components/pageController/pageController"
import * as BusAtom from "~/state/bus"
import { useAtom } from "jotai"
import StationCard from "~/app/bus/_components/card/stationCard"
import PopupSection from "~/app/bus/_components/popup/PopupSetStation"
import NoteCard from "./_components/card/noteCard"

const Map = dynamic(()=>import("~/app/bus/_components/map/map"), {ssr: false})

export default function Bus({init}:{init: BusList[]}) {

    const [page] = useAtom(BusAtom.pageAtom)
    const [openPopup] = useAtom(BusAtom.openStationPopupAtom)
    
    return (
        <>
            <Suspense>
                <SyncSearchParams />
            </Suspense>
            <main className={`${openPopup ? "blur" : ""} transition-all box-border w-screen h-screen bg-slate-800 text-white overflow-hidden flex-col flex`}>
                <DrawerSection initBusList={init} /> 
                <Map />
                {page==="bus" && <BusCard />}
                {page==="station" && <StationCard />}
                {page==="note" && <NoteCard />}
                <PageController />
                <PopupSection />
            </main>
        </>
    )
}

