import React, { useEffect, useState, useContext } from "react";
import Head from "next/head";
import EarnFree from "../components/EarnFree";
import ExploreVideo from "../components/ExploreVideo";
import FeaturedNFTs from "../components/FeaturedNFTs";
//INTRNAL IMPORT
import Style from "../styles/searchPage.module.css";

import { SearchBar } from "../components/SearchBar/SearchBar";




//SMART CONTRACT IMPORT
import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";

const searchPage = () => {
  const { fetchNFTs, setError, currentAccount } = useContext(
    NFTMarketplaceContext
  );
  const [nfts, setNfts] = useState([]);
  const [nftsCopy, setNftsCopy] = useState([]);

  useEffect(() => {
    try {
      if (currentAccount) {
        fetchNFTs().then((items) => {
          setNfts(items.reverse());
          setNftsCopy(items);
          console.log(nfts);
        });
      }
    } catch (error) {
      setError("Please reload the browser", error);
    }
  }, []);

  const onHandleSearch = (value) => {
    const filteredNFTS = nfts.filter(({ name }) =>
      name.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredNFTS.length === 0) {
      setNfts(nftsCopy);
    } else {
      setNfts(filteredNFTS);
    }
  };

  const onClearSearch = () => {
    if (nfts.length && nftsCopy.length) {
      setNfts(nftsCopy);
    }
  };


  return (
    <>
    <Head>
                <meta name="viewport" content="width=device-width"/>
                <meta name="next-head-count" content="2"/>
                <title>Search</title>
                       </Head>
    <div className={Style.searchPage}>

      {/* <SearchBar
        onHandleSearch={onHandleSearch}
        onClearSearch={onClearSearch}
      /> */}
      <FeaturedNFTs />
    <ExploreVideo />
    <EarnFree />
    </div>
    </>
  );
};

export default searchPage;
