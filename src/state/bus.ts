import { atom } from "jotai"
import { atomWithStorage } from 'jotai/utils'
import type { BusGeo, BusStops } from "~/type/bus"

export const busAtom = atom("")
export const directionAtom = atom("")
export const headSignAtom = atom("")
export const busStopsAtom = atom<BusStops[] | null>(null)
export const busShapeAtom = atom<BusGeo[]>([])
export const toggleStop = atom<{
    stopName?: string,
    id: number;
}>({stopName: undefined, id:0})
export const openDrawerAtom = atom(false)
export const openStationPopupAtom = atom(false)
export const stationAtom = atom("")
export const pageAtom = atom("bus")
export const cityAtom = atom("")
export const noteAtom = atomWithStorage("note", "")

type overlayType = BusGeo & {
    Stops: BusStops["Stops"]
}

export const overlayAtom = atom<overlayType[]>([])
export const togglePolylineAtom = atom<{
    routeName?: string;
    direction?: string;
    id: number;
  }>({ routeName: undefined, id: 0, direction: undefined });