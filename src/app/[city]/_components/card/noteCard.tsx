'use client'

import { useAtom } from "jotai"
import { FaTrash } from "react-icons/fa";
import * as BusAtom from "~/state/bus"

const NoteCard:React.FC = () => {

    const [note, setNote] = useAtom(BusAtom.noteAtom)

    return (
        <div className={`box-border md:h-screen h-[50vh] md:w-[25rem] w-screen md:p-2 md:absolute left-0 bottom-0 transition duration-300 ease-in-out `} >
            <div className="w-full h-full rounded-lg md:opacity-90 bg-white text-black flex flex-col items-center pb-1 gap-1">
                <h1 className="h-8 w-full p-1 text-center bg-slate-700 text-white font-bold md:rounded-t-lg">筆記</h1>
                <textarea className="w-full h-full p-4 resize-none" value={note} onChange={(e)=>setNote(e.target.value)} />
                <button onClick={()=>{
                    if (confirm("Delete Note?")) {
                        setNote("")
                    }
                }} className="absolute hover:scale-125 transition-all right-6 bottom-6 flex items-center justify-center w-8 h-8 text-white bg-red-700 rounded-full">
                    <FaTrash />
                </button>
            </div>
        </div>
    )
}

export default NoteCard