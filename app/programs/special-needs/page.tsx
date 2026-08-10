import type { Metadata } from "next";
import { getProgram } from "../../components/program-data";
import { ProgramPage } from "../../components/program-page";
export const metadata: Metadata = { title: "Special Needs & Inclusion | Care & Joy Africa", description: "Assistive devices, care camps, caregiver support and disability rights advocacy in Uganda." };
export default function Page() { return <ProgramPage program={getProgram("special-needs")} />; }
