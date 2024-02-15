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
    const [bus, setBus] = useAtom(BusAtom.busAtom)
    const [direction, setDirection] = useAtom(BusAtom.directionAtom)


    useEffect(()=>{
        if (busParam) {
            setBus(busParam)
        }
        if (directionParam) {
            setDirection(directionParam)
        }
    }, [])

    useEffect(()=>{
        if (bus!=="" 
        &&  direction!=="" 
             ) {
            router.push(`?bus=${bus}&direction=${direction}`)
        }
    }, [bus, direction, router])

    return <></>
}