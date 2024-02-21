import { redirect } from "next/navigation"
import Bus from "./bus"
import { getAllStop } from "~/server_action/getAllStop"


export default async function Page({searchParams}: {searchParams: {city:string}}) {

    if (!searchParams.city) {
        redirect("/bus?city=Taichung")
    }
    
    const data = await getAllStop(searchParams.city)

    return (
        <>
            <Bus init={data}  />
        </>
    )
}

