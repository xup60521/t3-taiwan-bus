import Link from "next/link";

export default function Home() {

  const list = ["Taipei",
    "NewTaipei",
    "Taoyuan",
    "Taichung",
    "Tainan",
    "Kaohsiung",
    "Keelung",
    "KinmenCounty",
    "Hsinchu",
    "HsinchuCounty",
    "MiaoliCounty",
    "ChanghuaCounty",
    "NantouCounty",
    "YunlinCounty",
    "ChiayiCounty",
    "Chiayi",
    "PingtungCounty",
    "YilanCounty",
    "HualienCounty",
    "TaitungCounty",
    "PenghuCounty"]

  return (
    <main className="flex h-screen flex-col gap-4 items-center justify-center bg-slate-800 text-white">
      <h1 className="font-mono text-3xl">T3 Taiwan Bus</h1>
      
        <div className="w-full grid grid-cols-2 h-[70vh] items-center">
          {list.map(item=>{
            return <div key={item} className="text-center">
              <a href={`/bus?city=${item}`}>{item}</a>
            </div>
          })}
        </div>
      
    </main>
  );
}
