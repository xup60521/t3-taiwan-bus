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
import PopupSection from "~/app/bus/_components/popup/popup"

const Map = dynamic(()=>import("~/app/bus/_components/map/map"), {ssr: false})

export default function Bus({
    initBusList,
}: {
    initBusList: BusList[],
}) {

    const [page] = useAtom(BusAtom.pageAtom)
    const [openPopup] = useAtom(BusAtom.openPopupAtom)

    return (
        <>
            <Suspense>
                <SyncSearchParams />
            </Suspense>
            <main className={`${openPopup ? "blur" : ""} transition-all box-border w-screen h-screen bg-slate-800 text-white overflow-hidden flex-col flex`}>
                <DrawerSection initBusList={initBusList} /> 
                <Map />
                {page==="bus" && <BusCard />}
                {page==="station" && <StationCard />}
                <PageController />
                <PopupSection />
            </main>
        </>
    )
}

