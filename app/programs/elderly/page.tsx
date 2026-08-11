import type { Metadata } from "next";
import { getProgram } from "../../components/program-data";
import { ProgramPage } from "../../components/program-page";
export const metadata: Metadata = { title: "Elderly Care | Care & Joy Africa", description: "Safe shelter, essential relief, medical access and belonging for older people in Uganda." };
export default function Page() { return <ProgramPage program={getProgram("elderly")} />; }
