"use client";

import { createClient, OAuthStrategy } from "@wix/sdk";
import { products, collections } from "@wix/stores";
import Cookies from "js-cookie";
import { ReactNode } from "react";
import { createContext } from "react";

//checking refresh tokens
//inside cookies is a string, transforming it into a json object
const refreshToken = JSON.parse(Cookies.get("refreshToken") || "{}");

const myWixClient = createClient({
  modules: {
    products,
    collections,
    //   currentCart
  },
  auth: OAuthStrategy({
    clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
    tokens: {
      refreshToken,
      accessToken: { value: "", expiresAt: 0 },
    },
  }),
});

export type myWixClient  = typeof myWixClient;

export const WixClientContext = createContext<myWixClient>(myWixClient);

export const WixClientContextProvider = ({children}:{children:ReactNode}) => {
  return (
    <WixClientContext.Provider value = { myWixClient}>
      {children}
    </WixClientContext.Provider>
  )
}


