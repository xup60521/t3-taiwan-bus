'use client'
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "~/components/ui/dropdown-menu";

export default function Home() {


  return (
    <main className="flex h-screen flex-col gap-4 items-center justify-center bg-slate-800 text-white">
      <h1 className="font-mono text-3xl">T3 Taiwan Bus</h1>
      
        <div className="w-full grid grid-cols-2 h-[70vh] items-center">
          <div className="text-center"><a href="/bus?city=Taipei">Taipei</a></div>
          <div className="text-center"><a href="/bus?city=NewTaipei">NewTaipei</a></div>
          <div className="text-center"><a href="/bus?city=Taoyuan">Taoyuan</a></div>
          <div className="text-center"><a href="/bus?city=Taichung">Taichung</a></div>
          <div className="text-center"><a href="/bus?city=Tainan">Tainan</a></div>
          <div className="text-center"><a href="/bus?city=Kaohsiung">Kaohsiung</a></div>
          <div className="text-center"><a href="/bus?city=Keelung">Keelung</a></div>
          <div className="text-center"><a href="/bus?city=KinmenCounty">KinmenCounty</a></div>
          <div className="text-center"><a href="/bus?city=Hsinchu">Hsinchu</a></div>
          <div className="text-center"><a href="/bus?city=HsinchuCounty">HsinchuCounty</a></div>
          <div className="text-center"><a href="/bus?city=MiaoliCounty">MiaoliCounty</a></div>
          <div className="text-center"><a href="/bus?city=ChanghuaCounty">ChanghuaCounty</a></div>
          <div className="text-center"><a href="/bus?city=NantouCounty">NantouCounty</a></div>
          <div className="text-center"><a href="/bus?city=YunlinCounty">YunlinCounty</a></div>
          <div className="text-center"><a href="/bus?city=ChiayiCounty">ChiayiCounty</a></div>
          <div className="text-center"><a href="/bus?city=Chiayi">Chiayi</a></div>
          <div className="text-center"><a href="/bus?city=PingtungCounty">PingtungCounty</a></div>
          <div className="text-center"><a href="/bus?city=YilanCounty">YilanCounty</a></div>
          <div className="text-center"><a href="/bus?city=HualienCounty">HualienCounty</a></div>
          <div className="text-center"><a href="/bus?city=TaitungCounty">TaitungCounty</a></div>
          <div className="text-center"><a href="/bus?city=PenghuCounty">PenghuCounty</a></div>

        </div>
      
    </main>
  );
}
