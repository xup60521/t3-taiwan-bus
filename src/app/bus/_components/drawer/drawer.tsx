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
    const [drawerOpen, setDrawerOpen] = useAtom(BusAtom.openDrawerAtom)

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
    }, [data, bus, setHeadSign])

    return (
    <>
        <Drawer onClose={()=>setDrawerOpen(false)} open={drawerOpen} >
            <DrawerContent onInteractOutside={()=>setDrawerOpen(false)} onEscapeKeyDown={()=>setDrawerOpen(false)}>
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
                        <div className="w-full flex flex-col">
                            {data.map((item, index) => {
                                return (
                                <>
                                    {index !== 0 && <div className="w-full border-t-[0.05rem] border-slate-100 mx-1" />}
                                    <div 
                                        key={item.SubRoutes[0].SubRouteName.Zh_tw} 
                                        onClick={()=>{
                                            setBus(item.RouteName.Zh_tw)
                                            
                                            setDirection("0")
                                            closeBtnRef.current?.click()
                                            setQString("")
                                        }}
                                        className="p-2 py-3 rounded-md hover:bg-slate-100 hover:cursor-pointer transition-all"
                                    >
                                        {item.headSign}
                                    </div>
                                </>
                                )
                            })}
                        </div>
                    </ScrollArea>

                        <Button variant="outline" ref={closeBtnRef} onClick={()=>setDrawerOpen(false)} className="w-fit" >取消</Button>

                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    </>           
    )
}

