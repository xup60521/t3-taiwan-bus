import { z } from "zod";
import { env } from "~/env";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import type { BusEst, BusGeo, BusList } from "~/type/bus";


export const busRouter = createTRPCRouter({
    getAllBus: publicProcedure.query(async()=>{
        const access_token_res = (await get_access_token())
        const access_token = access_token_res.access_token
        const initBusList_res = await fetch("https://tdx.transportdata.tw/api/basic/v2/Bus/Route/City/Taichung?&$select=SubRoutes,RouteName", {
            headers: {
                "Authorization": `Bearer ${access_token}`
            },
            next: {revalidate: 43200}
        })
        const initBusList = await initBusList_res.json() as BusList[]
        return initBusList
    }),
    getBusEst: publicProcedure.input(z.string()).query(async ({input})=>{
        const access_token_res = (await get_access_token())
        const access_token = access_token_res.access_token
        const res = await fetch(`https://tdx.transportdata.tw/api/basic/v2/Bus/EstimatedTimeOfArrival/City/Taichung/${input}?$select=RouteName,StopName,Direction,NextBusTime,StopStatus&$filter=RouteName/Zh_tw eq '${input}'&$format=JSON`, {
            headers: {
                "Authorization": `Bearer ${access_token}`
            },
        }).then(res => {
            return res
        })
        const data = await res.json()  as BusEst[]
        return data
    }),
    getBusGeometry: publicProcedure.input(z.string()).query(async ({input})=>{
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
        const data = await res.json()  as BusGeo[]
        return data
    })
})

export async function get_access_token() {
    
    const res = await fetch("https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
            grant_type: "client_credentials",
            client_id: env.client_id,
            client_secret: env.client_secret
        })
    })
    
    return await res.json() as {
        access_token: string
    }

}