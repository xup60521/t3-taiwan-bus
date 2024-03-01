import { redirect } from "next/navigation";
import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";
import { unstable_noStore } from "next/cache";

const Map = dynamic(() => import("./_components/Map"), { ssr: false });

export default function BusRoute({
  searchParams,
}: {
  searchParams: { city: string };
}) {
  unstable_noStore();

  if (!searchParams?.city) {
    redirect("/");
  }

  return (
    <main className="flex h-screen w-screen flex-col overflow-hidden md:flex-row">
      <Map city={searchParams.city} />
      <div className="h-[50vh] w-screen bg-white md:h-screen md:w-[25rem]"></div>
    </main>
  );
}
