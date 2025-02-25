import { RiNextjsFill } from "react-icons/ri";
import { SiPrisma, SiShadcnui, SiZod } from "react-icons/si";
import { TbBrandAuth0 } from "react-icons/tb";

export default function Home() {
  return (
    <div className="w-full h-screen flex items-center flex-col justify-center gap-5">
      <h1 className="text-4xl">Z3 Stack</h1>
      <h2 className="text-xl">Next.js Starter Template</h2>
      <div className="flex gap-3 text-4xl">
        <RiNextjsFill />
        <SiPrisma />
        <SiZod />
        <TbBrandAuth0 />
        <SiShadcnui />
      </div>
    </div>
  );
}
