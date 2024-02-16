'use client'
import Link from "next/link";
import { useState } from "react";

export default function Home() {

  const [value, setValue] = useState("Taichung")

  return (
    <main className="flex min-h-screen flex-col gap-4 items-center justify-center bg-slate-800 text-white">
      <h1 className="font-mono text-3xl">T3 Taiwan Bus</h1>
      <select className="text-black rounded p-2" value={value} onChange={(e)=>setValue(e.target.value)} defaultValue={"Taichung"}>
        <option value="Taipei">Taipei</option>
        <option value="NewTaipei">NewTaipei</option>
        <option value="Taoyuan">Taoyuan</option>
        <option value="Taichung">Taichung</option>
        <option value="Tainan">Tainan</option>
        <option value="Kaohsiung">Kaohsiung</option>
        <option value="Keelung">Keelung</option>
        <option value="KinmenCounty">KinmenCounty</option>
        <option value="Hsinchu">Hsinchu</option>
        <option value="HsinchuCounty">HsinchuCounty</option>
        <option value="MiaoliCounty">MiaoliCounty</option>
        <option value="ChanghuaCounty">ChanghuaCounty</option>
        <option value="NantouCounty">NantouCounty</option>
        <option value="YunlinCounty">YunlinCounty</option>
        <option value="ChiayiCounty">ChiayiCounty</option>
        <option value="Chiayi">Chiayi</option>
        <option value="PingtungCounty">PingtungCounty</option>
        <option value="YilanCounty">YilanCounty</option>
        <option value="HualienCounty">HualienCounty</option>
        <option value="TaitungCounty">TaitungCounty</option>
        <option value="PenghuCounty">PenghuCounty</option>
      </select>
      <Link href={`/bus?city=${value ?? "Taichung"}`} className="font-mono">
        ---Click Here---
      </Link>
    </main>
  );
}
