"use client";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import masterCard from "../../../public/svg/master_card_tiny.png.svg";
import piggyBank from "../../../public/svg/piggybank_guide.png.svg";
import { useContext, useEffect, useState } from "react";
import { WalletContext } from "@/app/context/WalletContent";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";


const FundWallet = () => {
  const [amount, setAmount] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState("");
  const [url, setUrl] = useState("");
  const [reference, setReference] = useState("");
  const router = useRouter();


  // const { url, deposit, isLoading } = useContext(WalletContext);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem("authToken");
      const storedReference = localStorage.getItem("reference");
      setToken(storedToken);
      setReference(storedReference);
    }
  }, []);


  const verify = async () => {
    const verify = await fetch(
      `https://tazkora-3.onrender.com/api/wallet/verify?reference=${reference}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      },
    );
    const response = await verify.json();
    console.log(response);
    if (typeof window !== "undefined") {
      localStorage.removeItem("reference");
    }
  };


  const deposit = async () => {
    if (amount) {
      if (typeof window !== "undefined") {
        setIsLoading(true);
        const data = await fetch(
          "https://tazkora-3.onrender.com/api/wallet/deposit",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ amount: amount }),
          },
        );
        const response = await data.json();
        setUrl(response.data.authorization_url);
        setReference(response.data.reference);
        // useEffect(() => {
        //   if (typeof window !== "undefined") {
        //     localStorage.setItem("reference", response.data.reference);
        //   }
        // })
        // console.log(response);
        verify()
        setTimeout(() => {
          router.push(response.data.authorization_url);
        }, 3000);
        setIsLoading(false);
      }
    }
  };
  
  

  return (
    <div className="pb-10">
      <h1 className="font-bold lg:text-[2rem]">Fund Wallet</h1>
      <div className="grid pt-10">
        <p>Tap here & enter.. (e.g 5000)</p>
        <input
          onChange={(e) => {
            setAmount(e.target.value);
          }}
          className="mt-2 w-full rounded bg-itembg p-3 text-white opacity-40 outline-none lg:w-[370] lg:p-5"
          placeholder="Tab here $ enter.. (e.g 5000)"
        />
        {/* <div>
          <h1 className="py-5 font-bold lg:text-[2rem]">
            Select Payment Option
          </h1>
          <div className="grid gap-5">
            <div className="flex w-full items-center gap-3 rounded-lg bg-itembg p-3 lg:w-[370] lg:p-5">
              <Image src={masterCard} />
              <p>Use a new Card</p>
            </div>
            <div className="flex w-full items-center gap-3 rounded-lg bg-itembg p-3 lg:w-[370] lg:p-5">
              <Image src={piggyBank} />
              <p>Pay with bank</p>
            </div>
          </div> */}

        {/* </div> */}
        <button
          onClick={() => {
            deposit();
          }}
          className="mt-5 w-full rounded-lg bg-blue py-3 text-center text-white lg:w-[370]"
        >
          {isLoading ? (
            <div className="flex justify-center gap-3">
              <Loader2 className="animate-spin" />
              <p>Please wait</p>
            </div>
          ) : (
            <p>Proceed</p>
          )}
        </button>
      </div>
    </div>
  );
};

export default FundWallet;
