import type { Metadata } from "next";
import { getProgram } from "../../components/program-data";
import { ProgramPage } from "../../components/program-page";
export const metadata: Metadata = { title: "Women's Empowerment | Care & Joy Africa", description: "Livelihood skills, savings groups, health advocacy and leadership for women in Uganda." };
export default function Page() { return <ProgramPage program={getProgram("women")} />; }
