'use client'
import dynamic from "next/dynamic"
import type { BusList } from "~/type/bus"
import DrawerSection from "./_components/drawer/drawer"
import SyncSearchParams from "~/lib/SyncSearchParams"
import BusCard from "./_components/card/busCard"
import { Suspense } from "react"

const Map = dynamic(()=>import("./_components/map/map"), {ssr: false})

export default function Bus({
    initBusList
}: {
    initBusList: BusList[]
}) {


    return (
        <>
            <Suspense>
                <SyncSearchParams />
            </Suspense>
            <main className="w-screen h-screen bg-slate-800 text-white overflow-hidden">
                <DrawerSection initBusList={initBusList} /> 
                <Map />
                <BusCard />
            </main>
        </>
    )
}

