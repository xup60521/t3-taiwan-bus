'use client'

import type { BusList } from "~/type/bus"
import { useState, useRef, useEffect } from "react"
import { useAtom } from "jotai"
import * as BusAtom from "~/state/bus"
import {
    Drawer,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
  } from "~/components/ui/drawer"
  import { RNN } from "~/lib/utils"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { ScrollArea } from "~/components/ui/scroll-area"
import { FaMapSigns } from "react-icons/fa";

export default function DrawerSection({
    initBusList
}: {
    initBusList: BusList[]
}) {

    const [qString, setQString] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)
    const closeBtnRef = useRef<HTMLButtonElement>(null)
    const [bus, setBus] = useAtom(BusAtom.busAtom)
    const [, setDirection] = useAtom(BusAtom.directionAtom)
    const [, setHeadSign] = useAtom(BusAtom.headSignAtom)
    const [open, setOpen] = useState(false)

    const data = structuredClone(initBusList).sort((a,b)=>Number(RNN(a.RouteName.Zh_tw)) - Number(RNN(b.RouteName.Zh_tw))).map(item=>{
        const headSign = `${item.RouteName.Zh_tw} ${item.SubRoutes[0].Headsign}`
        return {
            headSign,
            ...item
        }
    }).filter(item=>{
        if (qString) {
            return item.headSign.includes(qString)
        }
        return true
    })

    useEffect(()=>{
        const h = data.find(d => d.RouteName.Zh_tw === bus)?.headSign
        if (h) {
            setHeadSign(h)
        }
    }, [data])

    return (
            <div className="absolute max-w-[100vw] bottom-0 p-2 left-[50vw] -translate-x-[50%] z-10 flex gap-2">
                    <Button 
                    variant={"default"} 
                    onClick={()=>setOpen(true)}
                    className=" line-clamp-1"
                    >
                        {bus ? data.find(d => d.RouteName.Zh_tw === bus)?.headSign : "選擇公車..."}
                    </Button>
                    <Button variant={"secondary"}>
                        <FaMapSigns />
                    </Button>
                <Drawer onClose={()=>setOpen(false)} open={open} >
                    <DrawerContent onInteractOutside={()=>setOpen(false)} onEscapeKeyDown={()=>setOpen(false)}>
                        <DrawerHeader>
                            <DrawerTitle>選擇公車</DrawerTitle>
                        </DrawerHeader>
                        <DrawerFooter className="flex flex-col items-center">
                            <Input ref={inputRef} value={qString} onChange={(e)=>{setQString(e.target.value)}} placeholder="搜尋路線..." onKeyDown={(e)=>{
                                if (e.key === "Enter") {
                                    inputRef.current?.blur()
                                }
                            }} />
                            <ScrollArea className="h-[60vh] w-full">
                                <div className="w-full flex flex-col gap-2">
                                    {data.map(item => {
                                        return <div 
                                        key={item.SubRoutes[0].SubRouteName.Zh_tw} 
                                        onClick={()=>{
                                            setBus(item.RouteName.Zh_tw)
                                            
                                            setDirection("0")
                                            closeBtnRef.current?.click()
                                            setQString("")
                                        }}
                                        className="p-2 rounded-md hover:bg-slate-100 hover:cursor-pointer transition-all"
                                        >
                                            {item.headSign}
                                        </div>
                                    })}
                                </div>
                            </ScrollArea>

                                <Button variant="outline" ref={closeBtnRef} onClick={()=>setOpen(false)} className="w-fit" >取消</Button>

                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
            </div>
    )
}

