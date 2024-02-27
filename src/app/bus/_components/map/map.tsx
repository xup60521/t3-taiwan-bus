"use client";
import {
  MapContainer,
  TileLayer,
  Polyline,
  Tooltip,
  useMap,
  Marker,
  Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useMemo, useRef } from "react";
import * as BusAtom from "~/state/bus";
import { useAtom } from "jotai";
import ShowMarker from "./marker";
import { getBusStops } from "~/server_action/getBusStops";
import { getBusShape } from "~/server_action/getBusShape";
import { Icon } from "leaflet";
import seedrandom from "seedrandom"

export default function Map() {
  const position = useMemo(
    () => ({ lat: 24.137396608878987, lng: 120.68692065044608 }),
    [],
  );
  const [city] = useAtom(BusAtom.cityAtom);

  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={true}
      className="z-0 h-full w-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        className="absolute right-0"
      />
      <ShowPolyLines city={city} />
      <ShowOverlayPolylines />
      <ShowStops city={city} />
      <ShowOverlayStops />
    </MapContainer>
  );
}

const ShowPolyLines = ({ city }: { city: string }) => {
  const [bus] = useAtom(BusAtom.busAtom);
  const [direction] = useAtom(BusAtom.directionAtom);
  const [busStops] = useAtom(BusAtom.busStopsAtom);
  const [busShape, setBusShape] = useAtom(BusAtom.busShapeAtom);
  const map = useMap();

  useEffect(() => {
    if (busShape) {
      const positionStr = busShape[Number(direction)]?.Geometry;
      const regex = /[A-Z()]/g;
      const positionArr = positionStr
        ?.replace(regex, "")
        .split(",")
        .map((f) =>
          f
            .split(" ")
            .reverse()
            .map((item) => Number(item)),
        ) as [number, number][];
      if (positionArr) {
        const center = { lat: 0, lng: 0 } as { lat: number; lng: number };
        positionArr.forEach((d, _i, arr) => {
          center.lat += d[0] / arr.length;
          center.lng += d[1] / arr.length;
        });
        map.flyTo(center, 13);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [busShape]);

  useEffect(() => {
    if (bus) {
      getBusShape(bus, city)
        .then((data) => {
          const withDirectionData = data
            .map((item, index) => {
              if (item.Direction) {
                return item;
              } else {
                item.Direction = index;
                return item;
              }
            })
            .sort((a, b) => a.Direction - b.Direction);
          setBusShape([...withDirectionData]);
        })
        .catch((err) => alert(err));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bus]);

  if (!busShape || bus === "" || direction === "") {
    return "";
  }
  const positionStr =
    busShape[Number(direction)]?.Geometry ?? busShape[0]?.Geometry;
  if (positionStr) {
    const regex = /[A-Z()]/g;
    const positionArr = positionStr
      .replace(regex, "")
      .split(",")
      .map((f) =>
        f
          .split(" ")
          .reverse()
          .map((item) => Number(item)),
      ) as [number, number][];
    const thisStops = busStops?.find(
      (item) =>
        item.Direction === Number(direction) && item.RouteName.Zh_tw === bus,
    )?.Stops;
    
    return (
      <>
        <Polyline
          positions={positionArr}
          pathOptions={{
            opacity: 0.6,
            color: "#809fff",
            weight: 8,
          }}
        >
          <Tooltip sticky>
            {thisStops
              ? `${bus}（${thisStops[0].StopName.Zh_tw} - ${thisStops[thisStops.length - 1].StopName.Zh_tw}）`
              : bus}
          </Tooltip>
        </Polyline>
      </>
    );
  }
  return "";
};

const ShowOverlayPolylines = () => {
  const [bus] = useAtom(BusAtom.busAtom);
  const [direction] = useAtom(BusAtom.directionAtom);
  const [busOverlay] = useAtom(BusAtom.overlayAtom);

  return (
    <>
      {busOverlay.map((item) => {
        if (
          item.Direction === Number(direction) &&
          item.RouteName.Zh_tw === bus
        ) {
          return null;
        }
        const regex = /[A-Z()]/g;
        const positionArr = item.Geometry.replace(regex, "")
          .split(",")
          .map((f) =>
            f
              .split(" ")
              .reverse()
              .map((item) => Number(item)),
          ) as [number, number][];
        const headSign = `${item.RouteName.Zh_tw}（${item.Stops[0].StopName.Zh_tw} - ${item.Stops[item.Stops.length - 1].StopName.Zh_tw}）`;
        const color = `#${Math.floor((Math.abs(Math.sin(seedrandom(item.RouteName.Zh_tw)()) * 16777215))).toString(16)}`
        return (
          <Polyline
            key={`polyline ${item.RouteName.Zh_tw} ${item.Direction}`}
            positions={positionArr}
            pathOptions={{
              opacity: 0.6,
              color,
              weight: 8,
            }}
          >
            <Tooltip sticky>{headSign}</Tooltip>
          </Polyline>
        );
      })}
    </>
  );
};

const ShowStops = ({ city }: { city: string }) => {
  const [bus] = useAtom(BusAtom.busAtom);
  const [direction] = useAtom(BusAtom.directionAtom);
  const [busStops, setBusStops] = useAtom(BusAtom.busStopsAtom);

  useEffect(() => {
    if (bus) {
      getBusStops(bus, city)
        .then((data) => setBusStops([...data]))
        .catch((err) => alert(err));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bus]);

  if (!bus || direction === "") {
    return null;
  }

  if (busStops && bus && direction) {
    const thisDirection = busStops.find(
      (item) => item.Direction === Number(direction),
    );
    return (
      <>
        {thisDirection?.Stops.map((item) => {
          return (
            <ShowMarker
              item={item}
              key={`${item.StopSequence} ${item.StopName.Zh_tw}`}
            />
          );
        })}
      </>
    );
  }

  return null;
};

const ShowOverlayStops = () => {
  const [busOverlay] = useAtom(BusAtom.overlayAtom);
  const [busStops] = useAtom(BusAtom.busStopsAtom);
  const busStopFlat = busStops?.map(d => d.Stops).flat().map(d => d.StopName.Zh_tw)
  const ref = useRef<L.Marker>(null)
  const flatall = busOverlay.map(d => d.Stops).flat()
  const flatName = flatall.map(d => d.StopName.Zh_tw).filter((item, index, arr) => arr.indexOf(item) === index)
  const filteredOverlap = flatName.filter(name => !busStopFlat?.find(item => item === name))
  const icon = new Icon({
    iconUrl: "pin3.png",
    iconSize: [16, 16],
    
})   


  return <>
    {filteredOverlap.map(name => {
      const item = flatall.find(d => d.StopName.Zh_tw === name)
      return <>
        {!!item && <Marker ref={ref} riseOffset={-12} icon={icon} key={`${item.StopSequence}`} position={[item.StopPosition.PositionLat, item.StopPosition.PositionLon]} >
                <Popup >
                    <div>
                        <p>{`${item.StopName.Zh_tw}`}</p>
                    </div>
                </Popup>
                <Tooltip direction='bottom'>
                    <div>
                        <p>{`${item.StopName.Zh_tw}`}</p>
                    </div>
                </Tooltip>
            </Marker>}
      </>
    })}
  </>;
};

