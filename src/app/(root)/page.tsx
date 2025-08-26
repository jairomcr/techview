import { Cta, HowltWorks, Navbar, Pricing } from "./components";
import { HeroBlock } from "./components/HeroBlock";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navbar/>
      <HeroBlock/>
      <HowltWorks/>
      <Pricing/>
      <Cta/>
    </div>
  );
}
