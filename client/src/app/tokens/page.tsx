import CustomHeadingOne from "@/components/CustomHeadingOne";
import TokensContainer from "@/components/TokensContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tokens",
};

export default function TokensPage() {
  return (
    <div className="">
      <CustomHeadingOne>Explore Presales</CustomHeadingOne>
      <TokensContainer />
    </div>
  );
}
