import Head from "next/head";
function AccountSetting(){
    return(
        <>
           <Head>
                <meta name="viewport" content="width=device-width"/>
                <meta name="next-head-count" content="2"/>
                <title>Account Setting</title>
                       </Head>
        <section className="container">
            
       <div className=" my-12 container lg:w-[70%]">
       <h1 className="text-5xl font-bold">Profile settings</h1>
        <p className="text-xl my-6">You can set preferred display name, create your profile URL and manage other personal settings.</p>
        <div className="bg-shadowDark h-[1px] w-full"></div>
       </div>
       <div className="container  mt-20 mb-32 lg:w-[70%] ">
           <article className="flex lg:flex-row flex-col lg:justify-between justify-center lg:items-start items-center">
               <div>
                   <img src="/assets/user-1.png" alt="profile" className="w-24 h-24 rounded-[50%]"/>
                   <button className="text-xl">Change Image</button>
                   </div>
           <form className="lg:w-[75%] w-full">
           <div className="flex-col flex" >
               <label className="text-xl mt-3" htmlFor="name">Username</label>
               <input
               className="border border-icons w-full outline-none bg-shadowLight rounded-2xl px-5 py-2 "
               
               type="text" placeholder="shoaib bhai" />
           </div>
{/* ///email */}
           <div className="flex-col flex" >
               <label className="text-xl mt-3" htmlFor="email">Email</label>
               <div className="flex items-center"><div className="bg-icons rounded-l-2xl flex justify-center items-center h-12 w-12" >
                <svg 
                className="bg-icons text-shadowLight w-6 h-6"
                stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div><input
               className="border border-icons w-full outline-none bg-shadowLight rounded-r-2xl h-12 px-5 py-2 "                
                type="text" placeholder="Email*"/>
           </div></div>
           {/* description */}
           <div className="flex-col flex"><label className="text-xl mt-3" htmlFor="description">Description</label>
           <textarea name="" id="" 
               className="border border-icons w-full outline-none bg-shadowLight rounded-2xl px-5 py-2 "                
           
           rows={6}  placeholder="something about yourself in few words"></textarea></div>
           {/* Website */}

           <div className="flex-col flex"><label className="text-xl mt-3" htmlFor="website">Website</label>
           <div className="flex items-center"><div className="bg-icons rounded-l-2xl flex justify-center items-center h-12 w-12" >
               <svg  className="bg-icons text-shadowLight w-6 h-6" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M24 24H0V0h24v24z" opacity=".87"></path><path d="M4.5 11h-2V9H1v6h1.5v-2.5h2V15H6V9H4.5v2zm2.5-.5h1.5V15H10v-4.5h1.5V9H7v1.5zm5.5 0H14V15h1.5v-4.5H17V9h-4.5v1.5zm9-1.5H18v6h1.5v-2h2c.8 0 1.5-.7 1.5-1.5v-1c0-.8-.7-1.5-1.5-1.5zm0 2.5h-2v-1h2v1z"></path></svg></div>
           <input
               className="border border-icons w-full outline-none bg-shadowLight rounded-r-2xl h-12 px-5 py-2 "                           
           type="text" placeholder="website"/>
               </div></div>
               <section className="grid lg:grid-cols-3 lg:grid-rows-1  gap-1 ">
                   
                 {/* Facebook */}

           <div className="col-span-1 row-span-1 flex-col flex"><label className="text-xl mt-3" htmlFor="Facebook">Facebook</label>
           <div className="flex items-center"><div className="bg-icons rounded-l-2xl flex justify-center items-center h-12 w-12" >
               <svg className="bg-icons text-shadowLight w-6 h-6" stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M13 10h3v3h-3v7h-3v-7h-3v-3h3v-1.255c0-1.189.374-2.691 1.118-3.512.744-.823 1.673-1.233 2.786-1.233h2.096v3h-2.1c-.498 0-.9.402-.9.899v2.101z"></path></svg>
        
               </div>
           <input
               className="border border-icons w-full outline-none bg-shadowLight rounded-r-2xl h-12 px-5 py-2 "                           
           type="text" placeholder="Facebook"/>
               </div></div>


    {/* Twitter */}

    <div className="col-span-1 row-span-1 flex-col flex"><label className="text-xl mt-3" htmlFor="Twitter">Twitter</label>
           <div className="flex items-center"><div className="bg-icons rounded-l-2xl flex justify-center items-center h-12 w-12" >
               <svg className="bg-icons text-shadowLight w-6 h-6" stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18.89 7.012c.808-.496 1.343-1.173 1.605-2.034-.786.417-1.569.703-2.351.861-.703-.756-1.593-1.14-2.66-1.14-1.043 0-1.924.366-2.643 1.078-.715.717-1.076 1.588-1.076 2.605 0 .309.039.585.117.819-3.076-.105-5.622-1.381-7.628-3.837-.34.601-.51 1.213-.51 1.846 0 1.301.549 2.332 1.645 3.089-.625-.053-1.176-.211-1.645-.47 0 .929.273 1.705.82 2.388.549.676 1.254 1.107 2.115 1.291-.312.08-.641.118-.979.118-.312 0-.533-.026-.664-.083.23.757.664 1.371 1.291 1.841.625.472 1.344.721 2.152.743-1.332 1.045-2.855 1.562-4.578 1.562-.422 0-.721-.006-.902-.038 1.697 1.102 3.586 1.649 5.676 1.649 2.139 0 4.029-.542 5.674-1.626 1.645-1.078 2.859-2.408 3.639-3.974.784-1.564 1.172-3.192 1.172-4.892v-.468c.758-.57 1.371-1.212 1.84-1.921-.68.293-1.383.492-2.11.593z"></path></svg>
               </div>
           <input
               className="border border-icons w-full outline-none bg-shadowLight rounded-r-2xl h-12 px-5 py-2 "                           
           type="text" placeholder="Twitter"/>
               </div></div>





               {/* Instragram */}

    <div className="col-span-1 row-span-1 flex-col flex"><label className="text-xl mt-3" htmlFor="Instragram">Instragram</label>
           <div className="flex items-center"><div className="bg-icons rounded-l-2xl flex justify-center items-center h-12 w-12" >
               <svg className="bg-icons text-shadowLight w-6 h-6" stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18 3h-12c-1.7 0-3 1.3-3 3v12c0 1.7 1.3 3 3 3h12c1.7 0 3-1.3 3-3v-12c0-1.7-1.3-3-3-3zm-6 6c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3zm3.8-2c0-.7.6-1.2 1.2-1.2s1.2.6 1.2 1.2-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2zm2.2 12h-12c-.6 0-1-.4-1-1v-6h2c0 2.8 2.2 5 5 5s5-2.2 5-5h2v6c0 .6-.4 1-1 1z"></path></svg>
               </div>
           <input
               className="border border-icons w-full outline-none bg-shadowLight rounded-r-2xl h-12 px-5 py-2 "                           
           type="text" placeholder="Instragram"/>
               </div></div>
               </section>
                 {/* Wallet address */}

                 <div className=" flex-col flex"><label className="text-xl mt-3" htmlFor="Wallet address">Wallet address</label>
           <div className="flex items-center"><div className="bg-icons rounded-l-2xl flex justify-center items-center h-12 w-12" >
           <svg className="bg-icons text-shadowLight w-6 h-6" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M24 24H0V0h24v24z" opacity=".87"></path><path d="M4.5 11h-2V9H1v6h1.5v-2.5h2V15H6V9H4.5v2zm2.5-.5h1.5V15H10v-4.5h1.5V9H7v1.5zm5.5 0H14V15h1.5v-4.5H17V9h-4.5v1.5zm9-1.5H18v6h1.5v-2h2c.8 0 1.5-.7 1.5-1.5v-1c0-.8-.7-1.5-1.5-1.5zm0 2.5h-2v-1h2v1z"></path></svg>
               </div>
           <input
               className="border border-icons w-full outline-none bg-shadowLight  h-12 px-5 py-2 "                           
           type="text" placeholder="Wallet address"/>

<div className="bg-icons rounded-r-2xl flex justify-center items-center h-12 w-12" >
           <svg className="bg-icons text-shadowLight w-6 h-6" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"></path></svg>
               </div>
               </div></div>


        <button className="my-16 w-full text-xl ButtonQHarr rounded-full shadow-icons border-icons px-8 py-4 border   hover:bg-shadowLight bg-icons text-shadowLight hover:text-icons ">Upload profile</button>

           </form>
           </article>
     
       </div>
        </section>
        </>
    )
}

export default AccountSetting;