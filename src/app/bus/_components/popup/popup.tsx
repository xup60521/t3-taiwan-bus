'use client'
import { useAtom } from "jotai"
import * as BusAtom from "~/state/bus"
import Popup from "reactjs-popup"
import { Input } from "~/components/ui/input"
import { Button } from "~/components/ui/button"
import { FaSearch } from "react-icons/fa";
import { useEffect, useRef, useState } from "react"
import { type BusStopSearchResult } from "~/type/bus"
import { ScrollArea } from "~/components/ui/scroll-area"

export default function PopupSection() {

    const [open, setOpen] = useAtom(BusAtom.openPopupAtom)
    const [result, setResult] = useState<BusStopSearchResult[] | null>(null)
    const [,setStation] = useAtom(BusAtom.stationAtom)
    const inputRef = useRef<HTMLInputElement>(null)
    const handleSearch = async () => {
        if (inputRef.current?.value) {
            const res = await fetch(`/api/searchStop?q=${inputRef.current.value}`).then(res=>res)
            const data = await res.json() as BusStopSearchResult[]
            setResult([...data])
        }
    }

    const handleEnter = async (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            await handleSearch()
        }
    }

    useEffect(()=>{
        if (open) {
            inputRef.current?.focus()
        }
    },[open])

    return (
        <Popup open={open} onClose={()=>setOpen(false)}>
            <div className="items-center md:w-[40rem] w-[95vw]  bg-white transition-all rounded-lg p-4 flex flex-col gap-3">
                <h3 className="w-full text-xl text-center">搜尋站牌</h3>
                <div className="w-full flex gap-2">
                    <Input onKeyDown={handleEnter} ref={inputRef} className="flex-grow" />
                    <Button onClick={handleSearch} className="bg-slate-700"><FaSearch /></Button>
                </div>
                <ScrollArea className="w-full">
                    <div className="w-full max-h-[70vh]">
                        {result?.map(d=>d.StationName.Zh_tw).filter((d,i,arr)=>arr.indexOf(d)===i).map((item, index)=>{
                            return (
                                <>
                                    {index !== 0 && <div className="w-full border-t-[0.05rem] border-slate-100 mx-1" />}
                                    <div 
                                        onClick={()=>{
                                            setOpen(false)
                                            setStation(item)
                                        }}
                                        key={`${item}`}
                                        className="p-2 py-3 rounded-md hover:bg-slate-100 hover:cursor-pointer transition-all"
                                    >
                                        {item}
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </ScrollArea>
                <Button className="w-fit" onClick={()=>setOpen(false)}>取消</Button>
            </div>
        </Popup>
    )
}