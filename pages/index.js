import React, { useState, useEffect, useContext } from "react";
import EarnFree from "../components/EarnFree";
import { useRouter } from "next/router";
import { services } from "../services/data/services";
import Head from "next/head";
import AudioCollection from "../components/AudioCollection";
import ButtonSamira from "../components/ButtonSamira";
import MissDrop from "../components/MissDrop";
import ExploreVideo from "../components/ExploreVideo";
import TopListCreators from "../components/TopListCreators";
import BrowseCategory from "../components/BrowseCategory";
import TheVideos from "../components/TheVideos";
import FeaturedNFTs from "../components/FeaturedNFTs";
import HelloNFT from "../components/HelloNFT"
//INTERNAL IMPORT

import { getTopCreators } from "../components/TopCreators/TopCreators";

//IMPORTING CONTRCT DATA
import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";

const Home = () => {
  const { checkIfWalletConnected, currentAccount } = useContext(
    NFTMarketplaceContext
  );
  useEffect(() => {
    checkIfWalletConnected();
  }, []);

  const { fetchNFTs } = useContext(NFTMarketplaceContext);
  const [nfts, setNfts] = useState([]);
  const [nftsCopy, setNftsCopy] = useState([]);

  useEffect(() => {
    if (currentAccount) {
      fetchNFTs().then((items) => {
        setNfts(items.reverse());
        setNftsCopy(items);
        console.log(nfts);
      });
    }
  }, []);

  //CREATOR LIST

  const creators = getTopCreators(nfts);
  return (
 <>
      <Head>
                <meta name="viewport" content="width=device-width"/>
                <meta name="next-head-count" content="2"/>
                <title> NFT Marketplace</title>
                       </Head>
                       <section className="container my-20">
        <div className="flex justify-between lg:flex-row flex-col">
            <div className="lg:w-[40%] w-full">
                <h1 className="text-[5rem] font-bold text1">Discover, collect, and sell NFTs  🖼️</h1>
                <p className="font-bold my-10 text-xl">Discover the most outstanding NTFs in all topics of life. Creative your NTFs and sell them</p>
                <div className="flex justify-between lg:w-[50%] w-[70%]">
                   
                    <button
         onClick={() => router.push("/Search")}
        className="ButtonQHarr rounded-full shadow-icons border-icons px-8 py-4 border   hover:bg-shadowLight bg-icons text-shadowLight hover:text-icons ">Start your search</button>

                </div>
            </div>
        <img src="/assets/hero.png" alt="NFT" className="lg:w-[60%] w-full lg:mt-0 mt-12" />
        </div>
        </section>

        {/* Service */}
        <section className="container my-20">
        <div className="flex  lg:flex-row  flex-col justify-between px-2">
{services.map((item) => (
          <div className="flex  flex-col items-center  mt-10 px-4 py-5 rounded-xl lg:w-3/12 w-full mx-1 ">
             <img src={item?.image} alt={item?.text} className="w-[80px] "/>
             <ButtonSamira title="Step 1" type="simple" />

            <div className="flex flex-col mr-2 ">
              <p className="font-bold text-center text-xl my-8">{item?.title}</p>
              <p className="text-gray text-center">{item?.text}</p>
              </div>
            </div>

            ))}
</div>
        </section>
    <div >
     
  
      <HelloNFT />
      <AudioCollection />
      <ExploreVideo />
      <TopListCreators />
      <FeaturedNFTs />
      <BrowseCategory />
      <MissDrop />


    <EarnFree />
    <TheVideos />
    </div>
 </>

  );
};

export default Home;
