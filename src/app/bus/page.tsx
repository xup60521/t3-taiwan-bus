import Bus from "./bus"
import { get_access_token } from "~/server/api/routers/bus"
import type { BusList } from "~/type/bus"

export default async function Page() {

    const access_token_res = (await get_access_token())
    const access_token = access_token_res.access_token
    const initBusList_res = await fetch("https://tdx.transportdata.tw/api/basic/v2/Bus/Route/City/Taichung?&$select=SubRoutes,RouteName", {
        headers: {
            "Authorization": `Bearer ${access_token}`
        },
        next: {revalidate: 43200}
    }).then(res => res) 
    const initBusList = await initBusList_res.json() as BusList[]

    // const initBusList = data as BusList[]

    return (
        <>
            <Bus initBusList={initBusList} />
        </>
    )
}

