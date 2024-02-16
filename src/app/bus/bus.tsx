'use client'
import dynamic from "next/dynamic"
import type { BusList } from "~/type/bus"
import DrawerSection from "./_components/drawer/drawer"
import SyncSearchParams from "~/lib/SyncSearchParams"
import BusCard from "./_components/card/busCard"
import { Suspense } from "react"
import PageController from "./_components/pageController/pageController"
import * as BusAtom from "~/state/bus"
import { useAtom } from "jotai"
import StationCard from "./_components/card/stationCard"

const Map = dynamic(()=>import("./_components/map/map"), {ssr: false})

export default function Bus({
    initBusList
}: {
    initBusList: BusList[]
}) {

    const [page] = useAtom(BusAtom.pageAtom)

    return (
        <>
            <Suspense>
                <SyncSearchParams />
            </Suspense>
            <main className="box-border w-screen h-screen bg-slate-800 text-white overflow-hidden flex-col flex">
                <DrawerSection initBusList={initBusList} /> 
                <Map />
                {page==="bus" && <BusCard />}
                {page==="station" && <StationCard />}
                <PageController />
            </main>
        </>
    )
}

