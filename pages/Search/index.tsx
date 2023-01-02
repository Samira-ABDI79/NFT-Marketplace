import Head from "next/head";
import EarnFree from "../../components/EarnFree";
import ExploreVideo from "../../components/ExploreVideo";
import FeaturedNFTs from "../../components/FeaturedNFTs";
function Search(){
  return(
    <>
       <Head>
                <meta name="viewport" content="width=device-width"/>
                <meta name="next-head-count" content="2"/>
                <title>Search</title>
                       </Head>
   <section className="container">
  <div className="flex justify-center items-center my-20">
  <div className="flex justify-between items-center border-[1px] px-6 py-10 border-icons  h-10 rounded-full w-[60%]" >
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="h-7 w-7 lg:flex md:flex hidden"  xmlns="http://www.w3.org/2000/svg"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path></svg>
      <input type="text" placeholder="Type yout keyword..." className="outline-none text-icons bg-shadowLight"/>
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="h-7 w-7 lg:flex md:flex hidden" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path></svg>
        </div>
  </div>
   </section>
    <FeaturedNFTs />
    <ExploreVideo />
    <EarnFree />
    </>
  )
}

export default Search;