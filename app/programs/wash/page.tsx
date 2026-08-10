import type { Metadata } from "next";
import { getProgram } from "../../components/program-data";
import { ProgramPage } from "../../components/program-page";
export const metadata: Metadata = { title: "WASH | Care & Joy Africa", description: "Clean water infrastructure, household purification and school hygiene programs in Uganda." };
export default function Page() { return <ProgramPage program={getProgram("wash")} />; }
