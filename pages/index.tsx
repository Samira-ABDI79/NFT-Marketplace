import EarnFree from "../components/EarnFree";
import Button from "../components/Button";
import { services } from "../services/data/services";
import HelloNFT from "../components/HelloNFT";
import AudioCollection from "../components/AudioCollection";
import MissDrop from "../components/MissDrop";
import ExploreVideo from "../components/ExploreVideo";

function Home(){
  return(
    <>

<section className="container my-20">
        <div className="flex justify-between lg:flex-row flex-col">
            <div className="lg:w-[40%] w-full">
                <h1 className="text-[5rem] font-bold">Discover, collect, and sell NFTs  🖼️</h1>
                <p className="font-bold my-10 text-xl">Discover the most outstanding NTFs in all topics of life. Creative your NTFs and sell them</p>
                <div className="flex justify-between lg:w-[50%] w-[70%]">
                    <Button title="Start your search" type="yellow" />
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
             <Button title="Step 1" type="simple" />

            <div className="flex flex-col mr-2 ">
              <p className="font-bold text-center text-xl my-8">{item?.title}</p>
              <p className="text-gray text-center">{item?.text}</p>
              </div>
            </div>

            ))}
</div>
        </section>


        {/* Hello NFT */}
      <HelloNFT />
      <AudioCollection />
      <ExploreVideo />
      <MissDrop />


    <EarnFree />
    </>
  )
}

export default Home;