import { NextResponse, type NextRequest } from "next/server";
import {stopList} from "~/lib/stopList"
import { get_access_token } from "~/server/api/routers/bus";
import { BusStopSearchResult } from "~/type/bus";

export async function GET(req:NextRequest) {
    const q = req.nextUrl.searchParams.get("q")
    const city = req.nextUrl.searchParams.get("city")
    if (!q || !city) {
        return new NextResponse("no search param")
    }
    const access_token_res = (await get_access_token())
        const access_token = access_token_res.access_token
        const res = await fetch(`https://tdx.transportdata.tw/api/basic/v2/Bus/Stop/City/${city}?%24top=30&%24format=JSON&$filter=contains(StopName/Zh_tw,'${q}')&$select=StopName`, {
            headers: {
                "Authorization": `Bearer ${access_token}`
            },
            next: {revalidate: 43200}
        }).then(res => {
            return res
        })
        const data = await res.json() as BusStopSearchResult[]
    return NextResponse.json(data)
}