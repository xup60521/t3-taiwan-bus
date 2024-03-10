"use client";
import { useAtom, useSetAtom } from "jotai";
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
import { useSetURLSearchParams } from "~/hooks/useSetURLParams";

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
  const { toast } = useToast();
  const setSearchParams = useSetURLSearchParams()

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
  const setTogglePolyline = useSetAtom(BusAtom.togglePolylineAtom);

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
            <button
              onClick={() => {
                setTogglePolyline((prev) => ({
                  routeName: item.RouteName.Zh_tw,
                  direction: `${item.Direction}`,
                  id: prev.id + 1,
                }));
              }}
              className="relative group text-black p-1"
            >
              <span>{headSign}</span>
              <span
                className={`absolute -bottom-1 left-1/2 w-0 h-0.5 bg-red-400 group-hover:w-1/2 group-hover:transition-all`}
              ></span>
              <span
                className={`absolute -bottom-1 right-1/2 w-0 h-0.5 bg-red-400 group-hover:w-1/2 group-hover:transition-all`}
              ></span>
            </button>
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
                      // setBus(item.RouteName.Zh_tw);
                      // setDirection(`${item.Direction}`);
                      // setPage("bus");
                      setSearchParams([{
                        key: "bus",
                        value: item.RouteName.Zh_tw
                      }, {
                        key: "direction",
                        value: `${item.Direction}`
                      }, {
                        key: "page",
                        value: "bus"
                      }])
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
