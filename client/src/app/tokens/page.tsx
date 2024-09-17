import ClientTokensPage from "@/components/ClientTokensPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tokens",
};

export default function TokensPage() {
  return <ClientTokensPage />;
}
