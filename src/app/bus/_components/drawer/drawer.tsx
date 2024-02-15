'use client'

import type { BusList } from "~/type/bus"
import { useState, useRef } from "react"
import { useAtom } from "jotai"
import * as BusAtom from "~/state/bus"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
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

    return (
            <div className="absolute bottom-2 left-[50vw] -translate-x-[50%] z-10">
                <Drawer>
                    <DrawerTrigger asChild>
                        <Button 
                        variant={"default"} 
                        
                        >
                            {bus ? data.find(d => d.RouteName.Zh_tw === bus)?.headSign : "選擇公車..."}
                        </Button>
                    </DrawerTrigger>
                    <DrawerContent>
                        <DrawerHeader>
                            <DrawerTitle>選擇公車</DrawerTitle>
                        </DrawerHeader>
                        <DrawerFooter>
                            <Input ref={inputRef} value={qString} onChange={(e)=>{setQString(e.target.value)}} placeholder="搜尋路線..." onKeyDown={(e)=>{
                                if (e.key === "Enter") {
                                    inputRef.current?.blur()
                                }
                            }} />
                            <ScrollArea className="h-[60vh]">
                                <div className="w-full flex flex-col gap-2">
                                    {data.map(item => {
                                        return <div 
                                        key={item.SubRoutes[0].SubRouteName.Zh_tw} 
                                        onClick={()=>{
                                            setBus(item.RouteName.Zh_tw)
                                            setHeadSign(item.headSign)
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
                            <DrawerClose>
                                <Button variant="outline" ref={closeBtnRef} >取消</Button>
                            </DrawerClose>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
            </div>
    )
}

