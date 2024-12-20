// app/page.tsx
import { AppSidebar } from "@/components/app-sidebar";
import { MenubarDemo } from "@/components/upper-menu";
import { CardWithImageOnly } from "@/components/cardwithform";
import { SecondCard } from "@/components/secondcard";

export default function Home() {
  return (
    <main className="flex-1 p-4">
      <MenubarDemo />
      <h1 className="text-2xl font-bold">Welcome to My Music App</h1>
      <CardWithImageOnly />
      <p className="mt-2">Explore your favorite music and playlists here.</p>
      <SecondCard />
    </main>
  );
}
