import { NextResponse, type NextRequest } from "next/server";
import {stopList} from "~/lib/stopList"

export async function GET(req:NextRequest) {
    const q = req.nextUrl.searchParams.get("q")
    if (!q) {
        return new NextResponse("no search param")
    }
    const data = stopList.filter(item => item.StationName.Zh_tw.includes(q))
    return NextResponse.json(data)
}