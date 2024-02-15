import { z } from "zod";
import { env } from "~/env";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import type { BusEst, BusGeo, BusList } from "~/type/bus";


export const busRouter = createTRPCRouter({
    
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