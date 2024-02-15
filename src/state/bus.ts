import { atom } from "jotai"
import type { BusStops } from "~/type/bus"

export const busAtom = atom("")
export const directionAtom = atom("")
export const headSignAtom = atom("")
export const busStopsAtom = atom<BusStops[] | null>(null)
export const toggleStop = atom<{
    stopName?: string,
    id: number;
}>({stopName: undefined, id:0})