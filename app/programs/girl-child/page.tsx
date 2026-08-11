import type { Metadata } from "next";
import { getProgram } from "../../components/program-data";
import { ProgramPage } from "../../components/program-page";
export const metadata: Metadata = { title: "Girl Child Empowerment | Care & Joy Africa", description: "Education, menstrual health, rights awareness and mentorship for girls in Uganda." };
export default function Page() { return <ProgramPage program={getProgram("girl-child")} />; }
