"use client";
import { useAtom } from "jotai";
import { FaTrash } from "react-icons/fa6";
import { ScrollArea } from "~/components/ui/scroll-area";
import * as BusAtom from "~/state/bus";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { FiMenu } from "react-icons/fi";
import { useToast } from "~/components/ui/use-toast";

const OverlayCard: React.FC = () => {
  return (
    <div
      className={`bottom-0 left-0 box-border h-[50vh] w-screen transition duration-300 ease-in-out md:absolute md:h-screen md:w-[25rem] md:p-2 `}
    >
      <div className="flex h-full w-full flex-col items-center gap-1 rounded-lg bg-white pb-1 text-black md:opacity-90">
        <h1 className="h-8 w-full bg-slate-700 p-1 text-center font-bold text-white md:rounded-t-lg">
          疊加
        </h1>
        <ScrollArea className="w-full">
          <div className="flex w-full flex-col gap-1 p-1">
            <OverlayList />
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default OverlayCard;

const OverlayList: React.FC = () => {
  const [busOverlay, setBusOverlay] = useAtom(BusAtom.overlayAtom);
  const [, setBus] = useAtom(BusAtom.busAtom);
  const [, setDirection] = useAtom(BusAtom.directionAtom);
  const [, setPage] = useAtom(BusAtom.pageAtom);
  const { toast } = useToast();

  const handleRemove = (name: string, direction: number, headSign:string) => {
    setBusOverlay((prev) => {
      const filtered = prev.filter(
        (item) => item.RouteName.Zh_tw !== name || item.Direction !== direction,
      );
      return [...filtered];
    });
    toast({
      title: "刪除成功",
      description: headSign,
      className: "bg-red-100"
    });
  };

  return (
    <>
      {busOverlay.map((item) => {
        const stopLength = item.Stops.length;
        const headSign = `${item.RouteName.Zh_tw}（${item.Stops[0].StopName.Zh_tw} - ${item.Stops[stopLength - 1].StopName.Zh_tw}）`

        return (
          <div
            key={`overlay ${item.RouteName.Zh_tw} ${item.Direction}`}
            className="flex w-full items-center justify-between"
          >
            <span className="w-[calc(100vw-6rem)] flex-shrink truncate p-2 md:w-[calc(25rem-6rem)]">{headSign}</span>
            <div className="box-border flex w-max items-center gap-2">
              <button
                onClick={() => {
                  handleRemove(item.RouteName.Zh_tw, item.Direction, headSign);
                }}
                className="bg-transparant h-fit  w-fit -translate-x-2 rounded border-2 border-red-700 p-1 text-center font-bold text-red-700 transition-all hover:bg-red-700 hover:text-white"
              >
                <FaTrash />
              </button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="bg-transparant h-fit  w-fit -translate-x-2 rounded border-2 border-slate-700 p-1 text-center font-bold text-slate-700 transition-all hover:bg-slate-700 hover:text-white">
                    <FiMenu />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem
                    onClick={() => {
                      setBus(item.RouteName.Zh_tw);
                      setDirection(`${item.Direction}`);
                      setPage("bus");
                    }}
                  >
                    <span>查看公車</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        );
      })}
    </>
  );
};
