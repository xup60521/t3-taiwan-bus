'use client'

const OverlayCard:React.FC = () => {

    return (
        <div className={`box-border md:h-screen h-[50vh] md:w-[25rem] w-screen md:p-2 md:absolute left-0 bottom-0 transition duration-300 ease-in-out `} >
            <div className="w-full h-full rounded-lg md:opacity-90 bg-white text-black flex flex-col items-center pb-1 gap-1">
                <h1 className="h-8 w-full p-1 text-center bg-slate-700 text-white font-bold md:rounded-t-lg">疊加</h1>
                
            </div>
        </div>
    )
}

export default OverlayCard