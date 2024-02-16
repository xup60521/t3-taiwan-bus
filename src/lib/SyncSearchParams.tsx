"use client"
import { useEffect } from "react"
import * as BusAtom from "~/state/bus"
import { useAtom } from "jotai"
import { useRouter, useSearchParams } from "next/navigation"

export default function SyncSearchParams() {

    const router = useRouter()
    const searchParams = useSearchParams()
    const busParam = searchParams.get("bus")
    const directionParam = searchParams.get("direction")
    const stationParam = searchParams.get("station")
    const pageParam = searchParams.get("page")
    const [bus, setBus] = useAtom(BusAtom.busAtom)
    const [direction, setDirection] = useAtom(BusAtom.directionAtom)
    const [station, setStation] = useAtom(BusAtom.stationAtom)
    const [page, setPage] = useAtom(BusAtom.pageAtom)

    useEffect(()=>{
        if (busParam) {
            setBus(busParam)
        }
        if (directionParam) {
            setDirection(directionParam)
        }
        if (stationParam) {
            setStation(stationParam)
        }
        if (pageParam) {
            setPage(pageParam)
        }
    }, [])

    useEffect(()=>{
        if (bus!=="" 
        &&  direction!=="" 
             ) {
            router.push(`?bus=${bus}&direction=${direction}&station=${station}&page=${page}`)
        }
    }, [bus, direction, router, station, page])

    return <></>
}