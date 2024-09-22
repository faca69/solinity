const url: string = "https://api.commerce.coinbase.com/charges";

interface LocalPrice {
  amount: string;
  currency: string;
}

interface RequestBody {
  local_price: LocalPrice;
  pricing_type: string;
  name: string;
  description: string;
  redirect_url?: string;
}

const requestBody: RequestBody = {
  local_price: {
    amount: "299",
    currency: "USD",
  },
  pricing_type: "fixed_price",
  name: "Advertise",
  description: "Advertise the Launch of your Presale",
  redirect_url: "https://www.solinity.xyz/tokens",
};

const payload: RequestInit = {
  method: "POST",
  mode: "cors",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "X-CC-Api-Key": "0592027b-ae9f-4e03-bf1e-b89ed67eb570",
  },
  body: JSON.stringify(requestBody),
};

interface ChargeResponse {
  data: {
    hosted_url: string;
  };
}

async function createCharge(): Promise<ChargeResponse | undefined> {
  try {
    const response = await fetch(url, payload);
    if (!response.ok) {
      throw new Error(`HTTP error Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error creating charge:", error);
    return undefined;
  }
}

export { createCharge };
