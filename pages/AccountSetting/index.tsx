
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
           <form>
           <div >
               <label htmlFor="name">Username</label>
               <input type="text" placeholder="shoaib bhai" />
           </div>
{/* ///email */}
           <div >
               <label htmlFor="email">Email</label>
               <div ><div >
                <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div><input type="text" placeholder="Email*"/>
           </div></div>
           {/* description */}
           <div ><label htmlFor="description">Description</label>
           <textarea name="" id=""  rows={6}  placeholder="something about yourself in few words"></textarea></div>
           {/* Website */}

           <div ><label htmlFor="website">Website</label>
           <div ><div><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M24 24H0V0h24v24z" opacity=".87"></path><path d="M4.5 11h-2V9H1v6h1.5v-2.5h2V15H6V9H4.5v2zm2.5-.5h1.5V15H10v-4.5h1.5V9H7v1.5zm5.5 0H14V15h1.5v-4.5H17V9h-4.5v1.5zm9-1.5H18v6h1.5v-2h2c.8 0 1.5-.7 1.5-1.5v-1c0-.8-.7-1.5-1.5-1.5zm0 2.5h-2v-1h2v1z"></path></svg></div>
           <input type="text" placeholder="website"/>
               </div></div>
        <button className="w-full text-xl ButtonQHarr rounded-full shadow-icons border-icons px-8 py-4 border   hover:bg-shadowLight bg-icons text-shadowLight hover:text-icons ">Upload profile</button>

           </form>
     
       </div>
        </section>
        </>
    )
}

export default AccountSetting;