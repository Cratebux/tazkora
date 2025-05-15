"use client";

import { useRouter } from "next/navigation";
import { createContext, useState, useEffect } from "react";

export const WalletContext = createContext({});

export const WalletProvider = ({ children }) => {
  const [balance, setBalance] = useState();
  const [history, setHistory] = useState({});
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState("");
  const [reference, setReference] = useState("");
  const router = useRouter();

  // console.log(localStorage.getItem("authToken"))

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem("authToken");
      const storedReference = localStorage.getItem("reference");
      setToken(storedToken);
      setReference(storedReference);
    }
  }, []);

  // console.log

  const amount = 40000;

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
        if (typeof window !== "undefined") {
          localStorage.setItem("reference", response.data.reference);
        }
        console.log(response);
        router.push(url);
        setIsLoading(false);
      }
    }
  };

  // console.log(token)

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

  // useEffect(() => {
  // if (reference) {
  //   setTimeout(() => {
  //     verify();
  //   }, 40000);
  // }
  // }, [reference]);

  const withdraw = async (amount, accountNumber) => {
    const data = await fetch(
      "https://tazkora-3.onrender.com/api/wallet/withdraw",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: 20,
          bankCode: "057",
          accountNumber: 91456587483,
          accountName: "Test Account",
        }),
      },
    );
    const response = await data.json();
    setUrl(response.data.authorization_url);
    router.push(url);
  };

  const fetchBalance = async () => {
    const data = await fetch(
      "https://tazkora-3.onrender.com/api/wallet/balance",
      {
        method: "GET",
        headers: { Authorization: `Bearer ${token}`, },
        "Content-Type": "application/json",
      },
    );
    const response = await data.json();
    // setBalance(response.data.balance);
    console.log(response);
  };

  const fetchHistory = async () => {
    const data = await fetch(
      "https://tazkora-3.onrender.com/api/wallet/transactions",
      {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
        "Content-Type": "application/json",
      },
    );
    const response = await data.json();
    setHistory(response.data);
  };

  // useEffect(() => {
  //   withdraw();
  //   fetchBalance();
  //   fetchHistory();
  // }, []);
  return (
    <WalletContext.Provider
      value={{ balance, history, url, deposit, isLoading }}
    >
      {children}
    </WalletContext.Provider>
  );
};
