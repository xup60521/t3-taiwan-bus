'use client'

import { useSetAtom } from "jotai"
import { useRouter, useSearchParams } from "next/navigation"
import { pageAtom } from "~/state/bus"

export type SetURLSearchParamsInputProps = {
    key: string,
    value: string
}

export function useSetURLSearchParams() {
    const searchParams = useSearchParams()
    const router = useRouter()
    const setPage = useSetAtom(pageAtom)
    return function useSetURLSearchParams(list: SetURLSearchParamsInputProps[]) {
        const url = new URLSearchParams(searchParams.toString())
        list.forEach((item) => {
            if (item.key === "page") {
                setPage(item.value)
            }
            url.set(item.key, item.value)
        })
        router.push(`?${url.toString()}`)
    }
}