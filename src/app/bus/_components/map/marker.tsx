'use client'

import L, { Icon } from "leaflet";
import { useEffect, useRef } from "react";
import { Marker, Popup, PopupProps, Tooltip } from "react-leaflet";
import type { BusStops } from "~/type/bus";
import type { Unpacked } from "~/type/unpack";
import {useAtom} from "jotai"
import * as BusAtom from "~/state/bus";

export default function ShowMarker({item}: {item: Unpacked<BusStops["Stops"]>}) {
    const ref = useRef<L.Marker>(null)
    const [toggleStop] = useAtom(BusAtom.toggleStop)
    const icon = new Icon({
        iconUrl: "pin.png",
        iconSize: [16, 48],
        
    })   

    useEffect(()=>{
        if (toggleStop?.stopName === item.StopName.Zh_tw) {
            ref.current?.openPopup()
        }
    },[toggleStop])
    
    return <Marker ref={ref} riseOffset={-12} icon={icon} key={`${item.StopSequence}`} position={[item.StopPosition.PositionLat, item.StopPosition.PositionLon]} >
                <Popup >
                    <div>
                        <p>{`${item.StopSequence} ${item.StopName.Zh_tw}`}</p>
                    </div>
                </Popup>
                <Tooltip permanent direction='top'>
                    <div>
                        <p>{`${item.StopSequence}`}</p>
                    </div>
                </Tooltip>
            </Marker>
}