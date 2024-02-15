import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { get_access_token } from "~/server/api/routers/bus";
import type { BusGeo, BusStops } from "~/type/bus";


export async function GET(req:NextRequest) {
    const getType = req.nextUrl.searchParams.get("type")
    const input = req.nextUrl.searchParams.get("bus")
    if (getType === "geo") {
        const access_token_res = (await get_access_token())
        const access_token = access_token_res.access_token
        const res = await fetch(`https://tdx.transportdata.tw/api/basic/v2/Bus/Shape/City/Taichung/${input}?$select=Direction,RouteName,Geometry&$filter=RouteName/Zh_tw eq '${input}'&$format=JSON`, {
            headers: {
                "Authorization": `Bearer ${access_token}`
            },
            next: {revalidate: 43200}
        }).then(res => {
            return res
        })
        const data = await res.json() as BusGeo[]
        return NextResponse.json(data)
    }
    if (getType === "stops") {
        const access_token_res = (await get_access_token())
        const access_token = access_token_res.access_token
        const res = await fetch(`https://tdx.transportdata.tw/api/basic/v2/Bus/StopOfRoute/City/Taichung/${input}?$select=RouteName,Direction,Stops&$filter=RouteName/Zh_tw eq '${input}'&$format=JSON`, {
            headers: {
                "Authorization": `Bearer ${access_token}`
            },
            next: {revalidate: 43200}
        }).then(res => {
            return res
        })
        const data = await res.json() as BusStops[]
        return NextResponse.json(data)
    }
    return new NextResponse("invalid input")
}

