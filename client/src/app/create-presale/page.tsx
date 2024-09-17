import ClientCreatePresalePage from "@/components/ClientCreatePresalePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Presale",
};

export default function CreatePresalePage() {
  return <ClientCreatePresalePage />;
}
