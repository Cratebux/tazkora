"use client";

import { useRouter } from "next/navigation";
import { createContext, useState, useEffect } from "react";

export const WalletContext = createContext({});

export const WalletProvider = ({ children }) => {
  const [balance, setBalance] = useState("");
  const [history, setHistory] = useState({});
  const [url, setUrl] = useState("");
  const router = useRouter();

  const token = localStorage.getItem("authToken");
  // console.log(token)

  const deposit = async (amount) => {
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
    router.push(url);
  };

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
          "amount": amount,
          "bankCode": "057",
          "accountNumber": accountNumber,
          "accountName": "Test Account"
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
        headers: { Authorization: `Bearer ${token}` },
        "Content-Type": "application/json",
      },
    );
    const response = await data.json();
    setBalance(response.data.balance);
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

  useEffect(() => {
    fetchBalance();
    fetchHistory();
  }, []);
  return (
    <WalletContext.Provider value={{ balance, history, url, deposit }}>
      {children}
    </WalletContext.Provider>
  );
};
