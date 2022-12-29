
function AccountSetting(){
    return(
        <>
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
        <button className="my-16 w-full text-xl ButtonQHarr rounded-full shadow-icons border-icons px-8 py-4 border   hover:bg-shadowLight bg-icons text-shadowLight hover:text-icons ">Upload profile</button>

           </form>
           </article>
     
       </div>
        </section>
        </>
    )
}

export default AccountSetting;