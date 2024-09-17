export interface Token {
  id: string;
  name: string;
  symbol: string;
  image: string;
  description: string;
  totalSupply: number;
  revokeMintAuthority: boolean;
  supplyBurned: number;
  useOfFunds: string;
  solanaAddress: string;
  releaseDate: string;
  isAdvertised: boolean;
  website?: string | null | "";
  twitter?: string | null | "";
  telegram?: string | null | "";
}
