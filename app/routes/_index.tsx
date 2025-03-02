import type { MetaFunction } from "@remix-run/node";

import { GradesTable } from "~/components/GradesTable";
import { ZaidAvatar } from "~/components/ZaidAvatar";

export const meta: MetaFunction = () => {
  return [
    { title: "Zaid Ejaz" },
    { name: "description", content: "Zaid Ejaz | 4574-FOC/BSCS/F22" },
  ];
};

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-8">
        <header className="flex items-center gap-2">
          <div className="flex flex-col items-center gap-2">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Zaid Ejaz
            </h1>
            <h3 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
              4574-FOC/BSCS/F22
            </h3>
          </div>
          <ZaidAvatar />
        </header>
        <div className="max-h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-tranparent">
          <GradesTable />
        </div>
      </div>
    </div>
  );
}

