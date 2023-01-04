import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import Head from "next/head";
//INTERNAL IMPORT
import Style from "../styles/connectWallet.module.css";


//IMPORT FROM SMART CONTRACT
import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";
const connectWallet = () => {
  const [activeBtn, setActiveBtn] = useState(1);
  const { currentAccount, connectWallet } = useContext(NFTMarketplaceContext);
  const providerArray = [
    {
      provider: "/assets/provider-1.png",
      name: "Metamask",
    },
    {
      provider: "/assets/provider-2.png",
      name: "walletConnect",
    },
    {
      provider: "/assets/provider-3.png",
      name: "walletlink",
    },
    {
      provider:"/assets/provider-1.png",
      name: "Formatic",
    },
  ];
  return (
    <>
    <Head>
     <meta name="viewport" content="width=device-width"/>
     <meta name="next-head-count" content="2"/>
     <title>Connect Wallet</title>
            </Head>
    <div className={Style.connectWallet}>
      <div className={Style.connectWallet_box}>
        <h1 className="text-5xl font-bold">Connect your wallet</h1>
        <p className="text-xl my-6">
          Connect with one of our avaliabl wallet providers or create a new one
        </p>
        <div className="bg-shadowDark h-[1px] w-full"></div>
        <div className={Style.connectWallet_box_provider}>
          {providerArray.map((el, i) => (
            <div
              className={`${Style.connectWallet_box_provider_item} ${
                activeBtn == i + 1 ? Style.active : ""
              }`}
              key={i + 1}
              onClick={() => (setActiveBtn(i + 1), connectWallet())}
            >
              <Image
                src={el.provider}
                alt={el.provider}
                width={50}
                height={50}
                className={Style.connectWallet_box_provider_item_img}
              />
              <p>{el.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default connectWallet;
