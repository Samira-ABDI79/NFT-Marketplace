import Head from "next/head";
import EarnFree from "../../components/EarnFree";
import ExploreVideo from "../../components/ExploreVideo";
import FeaturedNFTs from "../../components/FeaturedNFTs";
const NFTsCollection=[
    {
        id:1,
        price:"$195,4683",
        pricePlus:"+ 2.11%",
    },
    {
        id:2,
        price:"$295,4683",
        pricePlus:"+ 3.11%",
    },
    {
        id:3,
        price:"$395,4683",
        pricePlus:"+ 4.11%",
    },
    {
        id:4,
        price:"$495,4683",
        pricePlus:"+ 5.11%",
    },
]
function Collection(){
    return (
        <>
           <Head>
                <meta name="viewport" content="width=device-width"/>
                <meta name="next-head-count" content="2"/>
                <title>Collection</title>
                       </Head>
            <img src="/assets/creatorbackground-1.jpeg" alt="Collection" className="my-12 h-24 object-cover w-screen" />

        <section className="container mb-16">
            <article className="border border-icons rounded-3xl py-10 px-12" >
            <div className="lg:block flex flex-col-reverse">
            <div id="TEXTBox"  className="flex justify-end items-center lg:mt-0 mt-12">
            <div className="lg:w-[75%] ">
            <h3 className="text-5xl font-bold my-4">Awesome NFTs Collection</h3>
            <p className="text-lg lg:w-[85%]">Karafuru is home to 5,555 generative arts where colors reign supreme. Leave the drab reality and enter the world of Karafuru by Museum of Toys.</p>
            </div>
            </div>
                <div id="imageBox" className="lg:w-[20%]">
                    <img src="/assets/nft_1.png" alt="nft_1" className="rounded-3xl lg:mt-0 mt-10"/>
                    {/* icons */}
                    <div className="flex mt-10 lg:justify-between justify-center lg:w-[90%] ">
  {/* <!-- Telegram --> */}
  <div className="p-2 transitionAll  rounded-[50%] bg-icons hover:bg-shadowLight flex items-center justify-center lg:mr-3 mr-1">
  <svg xmlns="#" viewBox="0 0 496 512" className="w-5 h-5    hover:text-icons  text-shadowLight "><path fill="currentColor" d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"/></svg>

  </div>

        {/* <!-- Linkedin --> */}
        <div className="p-2 transitionAll  rounded-[50%] bg-icons hover:bg-shadowLight flex items-center justify-center lg:mr-3 mr-1">
  
  <svg xmlns="#" viewBox="0 0 448 512" className="w-5 h-5    hover:text-icons  text-shadowLight"><path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>
</div>
  {/* <!-- Youtube --> */}
  <div className="p-2 transitionAll  rounded-[50%] bg-icons hover:bg-shadowLight flex items-center justify-center lg:mr-3 mr-1">

  <svg xmlns="#" viewBox="0 0 576 512" className="w-5 h-5    hover:text-icons  text-shadowLight">
     <path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>
</div>
  {/* <!-- Instagram --> */}
  <div className="p-2 transitionAll  rounded-[50%] bg-icons hover:bg-shadowLight flex items-center justify-center lg:mr-3 mr-1">

  <svg xmlns="#" viewBox="0 0 448 512" className="w-5 h-5    hover:text-icons  text-shadowLight">
     <path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
</div>
  {/* <!-- Twitter --> */}
  <div className="p-2 transitionAll  rounded-[50%] bg-icons hover:bg-shadowLight flex items-center justify-center lg:mr-3 mr-1">

  <svg xmlns="#" viewBox="0 0 512 512" className="w-5 h-5    hover:text-icons  text-shadowLight">
     <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>
</div>
</div>

                </div>
            </div>
                <div className="flex justify-between items-center lg:flex-nowrap flex-wrap  lg:absolute lg:-mt-[12%] lg:ml-[19%]">

{NFTsCollection.map((item) => (
            

            <div className="flex flex-col justify-center items-center border border-icons rounded-3xl pb-7 pt-8 px-4 lg:w-[15rem] h-[12rem] md:w-[45%] lg:mt-0 mt-10 lg:mr-[1rem] z-[9899] bg-shadowLight">
                <p >Floor price</p>
              <p className="font-bold text-center text-3xl my-3">{item?.price}</p>
              <p className="text-gray text-center">{item?.pricePlus}</p>
              </div>
           
            ))}
 </div>
            </article>

        </section>
        <FeaturedNFTs />
        <ExploreVideo />
        <EarnFree />
        </>
    )
}

export default Collection;