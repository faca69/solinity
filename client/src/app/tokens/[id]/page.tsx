import { Token } from "@/common/token.interface";
import ClientSIngleTokenPage from "@/components/ClientSIngleTokenPage";
import { Metadata } from "next";

interface Props {
  params: {
    id: string;
  };
}

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const response = await fetch(
    `https://solinity.onrender.com/api/tokens/${id}`
  );
  const data: Token = await response.json();

  return {
    title: data?.name,
  };
}

export default function SingleTokenPage({ params: { id } }: Props) {
  return (
    <ClientSIngleTokenPage
      params={{
        id,
      }}
    />
  );
}
