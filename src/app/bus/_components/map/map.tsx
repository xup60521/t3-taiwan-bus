"use client"
import { MapContainer, Marker, TileLayer, Polyline, Tooltip } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import { useMemo } from "react"
import { api } from '~/trpc/react'
import * as BusAtom from "~/state/bus"
import { useAtom } from "jotai"

export default function Map() {

    const position = useMemo(()=>({ lat: 24.137396608878987, lng: 120.68692065044608 }), [])

    return (
        <MapContainer center={[position.lat, position.lng]} zoom={13} scrollWheelZoom={true} className="w-full h-full z-0" zoomControl={false} >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                className="absolute right-0"
            />
            <ShowPolyLines />
        </MapContainer>
    )
}

const ShowPolyLines = () => {
    const [bus] = useAtom(BusAtom.busAtom)
    const [direction] = useAtom(BusAtom.directionAtom)
    const [headSign] = useAtom(BusAtom.headSignAtom)
    const data = api.bus.getBusGeometry.useQuery(bus, {
        enabled: Boolean(bus),
    })
    if (!data.data || bus === "" || direction === "") {
        return ""
    }
    const positionStr = data.data[Number(direction)]?.Geometry
    if (positionStr) {
        const regex = /[A-Z()]/g
        const positionArr = positionStr.replace(regex, "").split(",").map(f=>f.split(" ").reverse().map(item=>Number(item))) as [number, number][]
        return <Polyline positions={positionArr} pathOptions={{
            color: "#809fff",
            weight: 8
        }} >
            <Tooltip permanent>
                {headSign ? headSign : bus}
            </Tooltip>
        </Polyline>
    }
    return ""
}