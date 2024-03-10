import { atom } from "jotai"
import { atomWithStorage } from 'jotai/utils'
import type { BusGeo, BusStops } from "~/type/bus"

export const headSignAtom = atom("")
export const busStopsAtom = atom<BusStops[] | null>(null)
export const busShapeAtom = atom<BusGeo[]>([])
export const toggleStop = atom<{
    stopName?: string,
    id: number;
}>({stopName: undefined, id:0})
export const openDrawerAtom = atom(false)
export const openStationPopupAtom = atom(false)
export const noteAtom = atomWithStorage("note", "")
export const pageAtom = atom("")
type overlayType = BusGeo & {
    Stops: BusStops["Stops"]
}

export const overlayAtom = atom<overlayType[]>([])
export const togglePolylineAtom = atom<{
    routeName?: string;
    direction?: string;
    id: number;
  }>({ routeName: undefined, id: 0, direction: undefined });