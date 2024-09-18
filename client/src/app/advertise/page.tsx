"use client";

import { createCharge } from "@/coinbase/chargeGenerator";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export default function AdvertisePage() {
  const [hostedUrl, setHostedUrl] = useState("");
  useEffect(() => {
    const fetchChargeData = async () => {
      try {
        const chargeData = await createCharge();
        if (chargeData && chargeData.data && chargeData.data.hosted_url) {
          setHostedUrl(chargeData.data.hosted_url);
        }
      } catch (error) {
        console.error("Error fetching charge data:");
      }
    };

    fetchChargeData();
  }, []);

  const handleClick = () => {
    if (hostedUrl) {
      window.location.href = hostedUrl;
    }
  };
  return (
    <div className="flex flex-col text-center ">
      <div className="bg-emerald-700/80 h-[400px] w-[400px] blur-[400px] absolute top-[200px] left-[750px] -z-10 "></div>
      <h1 className="text-6xl font-bold py-11 text-center bg-gradient-to-b from-emerald-300 to-emerald-700 bg-clip-text text-transparent">
        Boost Your Presales's Visibility!
      </h1>

      <h2 className="text-4xl font-semibold bg-gradient-to-b from-gray-100 to-gray-300 bg-clip-text text-transparent">
        Get your presale featured at the top of the list.
      </h2>

      <div>
        <div>
          <p>$299</p>
          <p>USD Equivelant</p>

          <p></p>

          <Button color="primary" onClick={handleClick} disabled={!hostedUrl}>
            Pay with Crypto
          </Button>
        </div>
      </div>
    </div>
  );
}
