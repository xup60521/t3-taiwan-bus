import Bus from "./bus"
import { unstable_noStore } from "next/cache"

export default async function Page({params}: {params: {city:string}}) {

    unstable_noStore()

    return (
        <>
            <Bus city={params.city}  />
        </>
    )
}

