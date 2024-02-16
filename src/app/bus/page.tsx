import { redirect } from "next/navigation"
import Bus from "./bus"


export default async function Page({searchParams}: {searchParams: {city:string}}) {

    if (!searchParams.city) {
        redirect("/bus?city=Taichung")
    }
    

    return (
        <>
            <Bus  />
        </>
    )
}

