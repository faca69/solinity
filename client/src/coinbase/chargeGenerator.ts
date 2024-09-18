//chargeGenerator.ts

const url: string = "https://api.commerce.coinbase.com/charges";

//commerce.coinbase.com/checkout/f6da07e7-4d24-4381-8123-4b8382da32ef

interface LocalPrice {
  amount: string; // price of charge
  currency: string; // currency
}

interface RequestBody {
  local_price: LocalPrice;
  pricing_type: string;
  name: string;
  description: string;
  redirect_url?: string; // optional redirect URL
}

const requestBody: RequestBody = {
  local_price: {
    amount: "1.50",
    currency: "USD",
  },
  pricing_type: "fixed_price",
  name: "Name of the charge",
  description: "Small description",
  redirect_url: "https:/google.com",
};

const payload: RequestInit = {
  method: "POST",
  mode: "cors",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "X-CC-Api-Key": process.env.COMMERCE_API_KEY as string,
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
