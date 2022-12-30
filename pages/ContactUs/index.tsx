import Button from "../../components/Button";

function ContactUs(){
    return(
        <>
         <section className="container">
            
          
            <div className="container  mt-20 mb-32 lg:w-[80%] ">
            <h1 className="text-5xl font-bold text-center mb-20">Contact</h1>
                <article className="flex lg:flex-row flex-col lg:justify-between justify-center lg:items-start items-center">
              
                    <div id="section1" className="mb-20 lg:mb-0">
                        <h3 className="text-xl my-2">🗺 ADDRESS</h3>
                        <p className="lg:text-lg text-xl w-[90%]">Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</p>
                        <p className="text-xl my-2">💌 EMAIL</p>
                        <p>nc.example@example.com</p>
                        <p className="text-xl my-2">☎ PHONE</p>
                        <p>000-123-456-7890</p>
                        <p className="text-xl my-2">🌏 SOCIALS</p>
                        <div id="icons" className="flex">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg"><path d="M13 10h3v3h-3v7h-3v-7h-3v-3h3v-1.255c0-1.189.374-2.691 1.118-3.512.744-.823 1.673-1.233 2.786-1.233h2.096v3h-2.1c-.498 0-.9.402-.9.899v2.101z"></path></svg>
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg"><path d="M8 19h-3v-10h3v10zm11 0h-3v-5.342c0-1.392-.496-2.085-1.479-2.085-.779 0-1.273.388-1.521 1.165v6.262h-3s.04-9 0-10h2.368l.183 2h.062c.615-1 1.598-1.678 2.946-1.678 1.025 0 1.854.285 2.487 1.001.637.717.954 1.679.954 3.03v5.647z"></path><ellipse cx="6.5" cy="6.5" rx="1.55" ry="1.5"></ellipse></svg>
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg"><path d="M18 3h-12c-1.7 0-3 1.3-3 3v12c0 1.7 1.3 3 3 3h12c1.7 0 3-1.3 3-3v-12c0-1.7-1.3-3-3-3zm-6 6c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3zm3.8-2c0-.7.6-1.2 1.2-1.2s1.2.6 1.2 1.2-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2zm2.2 12h-12c-.6 0-1-.4-1-1v-6h2c0 2.8 2.2 5 5 5s5-2.2 5-5h2v6c0 .6-.4 1-1 1z"></path></svg>
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg"><path d="M22.8 8.6c-.2-1.5-.4-2.6-1-3-.6-.5-5.8-.6-9.8-.6s-9.2.1-9.8.6c-.6.4-.8 1.5-1 3s-.2 2.4-.2 3.4 0 1.9.2 3.4.4 2.6 1 3c.6.5 5.8.6 9.8.6 4 0 9.2-.1 9.8-.6.6-.4.8-1.5 1-3s.2-2.4.2-3.4 0-1.9-.2-3.4zm-12.8 7v-7.2l6 3.6-6 3.6z"></path></svg>
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg"><path d="M18.89 7.012c.808-.496 1.343-1.173 1.605-2.034-.786.417-1.569.703-2.351.861-.703-.756-1.593-1.14-2.66-1.14-1.043 0-1.924.366-2.643 1.078-.715.717-1.076 1.588-1.076 2.605 0 .309.039.585.117.819-3.076-.105-5.622-1.381-7.628-3.837-.34.601-.51 1.213-.51 1.846 0 1.301.549 2.332 1.645 3.089-.625-.053-1.176-.211-1.645-.47 0 .929.273 1.705.82 2.388.549.676 1.254 1.107 2.115 1.291-.312.08-.641.118-.979.118-.312 0-.533-.026-.664-.083.23.757.664 1.371 1.291 1.841.625.472 1.344.721 2.152.743-1.332 1.045-2.855 1.562-4.578 1.562-.422 0-.721-.006-.902-.038 1.697 1.102 3.586 1.649 5.676 1.649 2.139 0 4.029-.542 5.674-1.626 1.645-1.078 2.859-2.408 3.639-3.974.784-1.564 1.172-3.192 1.172-4.892v-.468c.758-.57 1.371-1.212 1.84-1.921-.68.293-1.383.492-2.11.593z"></path></svg>
                        </div>
                        </div>
                <form className="lg:w-[90%] w-full">
                  
                <div className="flex-col flex" >
                    <label className="text-xl mt-3 font-bold" htmlFor="name">Full Name</label>
                    <input
                    className="border border-icons w-full outline-none bg-shadowLight rounded-2xl px-5 py-2 "
                    
                    type="text" placeholder="shoaib bhai" />
                </div>
     {/* ///email */}
                <div className="flex-col flex" >
                    <label className="text-xl mt-3 font-bold" htmlFor="email">Email</label>
                    <div className="flex items-center"><div className="bg-icons rounded-l-2xl flex justify-center items-center h-12 w-12" >
                     <svg 
                     className="bg-icons text-shadowLight w-6 h-6"
                     stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                     </div><input
                    className="border border-icons w-full outline-none bg-shadowLight rounded-r-2xl h-12 px-5 py-2 "                
                     type="text" placeholder="Email*"/>
                </div></div>
                {/* Message */}
                <div className="flex-col flex"><label className="text-xl mt-3" htmlFor="Message">Message</label>
                <textarea name="" id="" 
                aria-placeholder="something about yourself in few words"
                    className=" mb-10 border border-icons w-full outline-none bg-shadowLight rounded-2xl px-5 py-2 "                
                
                rows={6}  placeholder="something about yourself in few words"></textarea></div>
            
     
            <Button title="Send Message" type="yellow" />
     
                </form>
                </article>
          
            </div>
             </section>
        </>
    )
}

export default ContactUs;