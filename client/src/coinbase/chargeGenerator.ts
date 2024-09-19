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
    amount: "1",
    currency: "USD",
  },
  pricing_type: "fixed_price",
  name: "Advertise",
  description: "Advertise the Launch of your Presale",
  redirect_url: "http://localhost:3001/tokens",
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

async function createCharge(): Promise<any> {
  try {
    const response = await fetch(url, payload);
    if (!response.ok) {
      throw new Error(`HTTP error Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error creating charge:", error);
  }
}

export { createCharge };
