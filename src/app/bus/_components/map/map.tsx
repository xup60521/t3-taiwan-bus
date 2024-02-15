"use client"
import { MapContainer, Marker, TileLayer, Polyline, Tooltip, useMap, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import { useEffect, useMemo, useState } from "react"
import * as BusAtom from "~/state/bus"
import { useAtom } from "jotai"
import type { BusGeo, BusStops } from '~/type/bus'
import { Icon } from 'leaflet'
import ShowMarker from './marker'

export default function Map() {

    const position = useMemo(()=>({ lat: 24.137396608878987, lng: 120.68692065044608 }), [])
    const icon = new Icon({
        iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
        iconSize: [35,35],
    }) 

    return (
        <MapContainer center={position} zoom={13} scrollWheelZoom={true} className="w-full h-full z-0" zoomControl={false} >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                className="absolute right-0"
            />
            <ShowPolyLines />
            <ShowStops />
            
        </MapContainer>
    )
}

const ShowPolyLines = () => {

    const [bus] = useAtom(BusAtom.busAtom)
    const [direction] = useAtom(BusAtom.directionAtom)
    const [headSign] = useAtom(BusAtom.headSignAtom)
    const [busShape, setBusShape] = useState<BusGeo[] | null>(null)
    const map = useMap()

    useEffect(()=>{
        if (busShape) {
            const positionStr = busShape[Number(direction)]?.Geometry
            const regex = /[A-Z()]/g
            const positionArr = positionStr?.replace(regex, "").split(",").map(f=>f.split(" ").reverse().map(item=>Number(item))) as [number, number][]
            if (positionArr) {
                const center = {lat:0, lng:0} as {lat:number, lng:number}
                positionArr.forEach((d, _i, arr)=>{
                    center.lat += d[0]/arr.length
                    center.lng += d[1]/arr.length
                })
                map.flyTo(center, 13)
            }
        }
    },[busShape])

    useEffect(()=>{
        if (bus) {
            const fetchData = async (bus:string) => {
                const res = await fetch(`/api/getBusStops?bus=${bus}&type=geo`).then(res=>res)
                const data = await res.json() as BusGeo[]
                setBusShape([...data])
            }
            fetchData(bus).catch(err=>alert(err))
        }
    },[bus])

    if (!busShape || bus === "" || direction === "") {
        return ""
    }
    const positionStr = busShape[Number(direction)]?.Geometry
    if (positionStr) {
        const regex = /[A-Z()]/g
        const positionArr = positionStr.replace(regex, "").split(",").map(f=>f.split(" ").reverse().map(item=>Number(item))) as [number, number][]
        return (
        <Polyline positions={positionArr} pathOptions={{
            color: "#809fff",
            weight: 8
        }} >
            <Tooltip sticky>
                {headSign ? headSign : bus}
            </Tooltip>
        </Polyline>
        )
    }
    return ""
}

const ShowStops = () => {
    const [bus] = useAtom(BusAtom.busAtom)
    const [direction] = useAtom(BusAtom.directionAtom)
    const [headSign] = useAtom(BusAtom.headSignAtom)
    const [busStops, setBusStops] = useAtom(BusAtom.busStopsAtom)
    const map = useMap()

    useEffect(()=>{
        if (bus) {
            const fetchData = async (bus:string) => {
                const res = await fetch(`/api/getBusStops?bus=${bus}&type=stops`).then(res=>res)
                const data = await res.json()  as BusStops[]
                setBusStops([...data])
            }
            fetchData(bus).catch(err=>alert(err))
        }
    }, [bus])

    if (!bus || direction === "") {
        return null
    }

    if (busStops && bus && direction) {
        const thisDirection = busStops.find(item=>item.Direction === Number(direction))
        return thisDirection?.Stops.map((item)=>{
            const icon = new Icon({
                iconUrl: "pin.png",
                iconSize: [16, 48],
                
            })   
            return <ShowMarker item={item} key={`${item.StopSequence} ${item.StopName.Zh_tw}`} />
        })
    }

    return null
}