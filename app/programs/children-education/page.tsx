import type { Metadata } from "next";
import { getProgram } from "../../components/program-data";
import { ProgramPage } from "../../components/program-page";
export const metadata: Metadata = { title: "Children & Education | Care & Joy Africa", description: "Education access, school materials, mentorship and child protection for vulnerable children in Uganda." };
export default function Page() { return <ProgramPage program={getProgram("children-education")} />; }
