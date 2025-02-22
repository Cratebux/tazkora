"use client"

import { createContext, useState } from "react";

export const EmailContext = createContext({}); // Provide a default value

export const EmailProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");

  return (
    <EmailContext.Provider value={{ email, setEmail, token, setToken }}>
      {children}
    </EmailContext.Provider>
  );
};