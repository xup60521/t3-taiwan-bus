'use client'
import { ScrollArea } from "@radix-ui/react-scroll-area";
import Link from "next/link";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "~/components/ui/dropdown-menu";

export default function Home() {


  return (
    <main className="flex h-screen flex-col gap-4 items-center justify-center bg-slate-800 text-white">
      <h1 className="font-mono text-3xl">T3 Taiwan Bus</h1>
      
        <div className="w-full grid grid-cols-2 h-[70vh] items-center">
          <div className="text-center"><Link href="/bus?city=Taipei">Taipei</Link></div>
          <div className="text-center"><Link href="/bus?city=NewTaipei">NewTaipei</Link></div>
          <div className="text-center"><Link href="/bus?city=Taoyuan">Taoyuan</Link></div>
          <div className="text-center"><Link href="/bus?city=Taichung">Taichung</Link></div>
          <div className="text-center"><Link href="/bus?city=Tainan">Tainan</Link></div>
          <div className="text-center"><Link href="/bus?city=Kaohsiung">Kaohsiung</Link></div>
          <div className="text-center"><Link href="/bus?city=Keelung">Keelung</Link></div>
          <div className="text-center"><Link href="/bus?city=KinmenCounty">KinmenCounty</Link></div>
          <div className="text-center"><Link href="/bus?city=Hsinchu">Hsinchu</Link></div>
          <div className="text-center"><Link href="/bus?city=HsinchuCounty">HsinchuCounty</Link></div>
          <div className="text-center"><Link href="/bus?city=MiaoliCounty">MiaoliCounty</Link></div>
          <div className="text-center"><Link href="/bus?city=ChanghuaCounty">ChanghuaCounty</Link></div>
          <div className="text-center"><Link href="/bus?city=NantouCounty">NantouCounty</Link></div>
          <div className="text-center"><Link href="/bus?city=YunlinCounty">YunlinCounty</Link></div>
          <div className="text-center"><Link href="/bus?city=ChiayiCounty">ChiayiCounty</Link></div>
          <div className="text-center"><Link href="/bus?city=Chiayi">Chiayi</Link></div>
          <div className="text-center"><Link href="/bus?city=PingtungCounty">PingtungCounty</Link></div>
          <div className="text-center"><Link href="/bus?city=YilanCounty">YilanCounty</Link></div>
          <div className="text-center"><Link href="/bus?city=HualienCounty">HualienCounty</Link></div>
          <div className="text-center"><Link href="/bus?city=TaitungCounty">TaitungCounty</Link></div>
          <div className="text-center"><Link href="/bus?city=PenghuCounty">PenghuCounty</Link></div>

        </div>
      
    </main>
  );
}
