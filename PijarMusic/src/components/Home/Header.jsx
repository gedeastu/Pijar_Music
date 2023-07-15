import './Header.css'
export default function Header(){
    return(
        <>
        <header id='header' className='max-w-full h-screen bg-cover bg-center relative'>
        <nav className='relative px-7 py-5 flex flex-row-reverse items-center justify-between md:flex-row md:px-28 md:py-7'>
        <div id="logo" className='flex flex-row-reverse items-center gap-2 md:flex-row md:scale-125'>
        <svg className='' width="36" height="48" viewBox="0 0 36 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M23.7678 41.0164H12.2801C11.3627 41.0164 10.1952 40.9054 9.42376 40.0621C8.67319 39.2411 8.69404 38.2202 8.71489 37.5323V35.5572C3.46094 31.829 0 25.349 0 19.1797C0 13.3433 2.46019 7.88409 6.73424 4.22245C11.0083 0.560813 16.6166 -0.81507 22.0999 0.472045C27.3122 1.69259 31.8156 5.39862 34.1507 10.3918C38.6749 20.0896 34.3175 30.5863 27.3539 35.5794V37.2438C27.3747 37.8874 27.3956 39.0635 26.5408 39.9956C25.8944 40.6613 24.9771 41.0164 23.7678 41.0164ZM12.2592 37.6876C12.0716 37.6876 11.9256 37.6654 11.8214 37.6654C11.8214 37.6432 11.8214 37.6432 11.8005 37.6432V34.6474C11.8005 34.0704 11.5295 33.5378 11.05 33.2271C7.08867 30.675 3.08566 25.349 3.08566 19.1797C3.08566 14.3419 5.10801 9.83697 8.65235 6.7967C12.1967 3.75643 16.846 2.62465 21.3911 3.68985C25.686 4.68848 29.3971 7.72875 31.3152 11.8342C35.214 20.1561 31.1276 29.2326 24.9562 33.2049C24.4976 33.4934 24.2057 34.0482 24.2057 34.6252V37.4213V37.6432C24.1223 37.6654 23.9763 37.6876 23.7678 37.6876H12.2592Z" fill="#FF6002"/>
        <path d="M11.8214 37.6654C11.9256 37.6654 12.0716 37.6876 12.2592 37.6876H23.7678C23.9763 37.6876 24.1223 37.6654 24.2057 37.6432V37.4213V34.6252C24.2057 34.0482 24.4976 33.4934 24.9562 33.2049C31.1276 29.2326 35.214 20.1561 31.3152 11.8342C29.3971 7.72875 25.686 4.68848 21.3911 3.68985C16.846 2.62465 12.1967 3.75643 8.65235 6.7967C5.10801 9.83697 3.08566 14.3419 3.08566 19.1797C3.08566 25.349 7.08867 30.675 11.05 33.2271C11.5295 33.5378 11.8005 34.0704 11.8005 34.6474V37.6432C11.8214 37.6432 11.8214 37.6432 11.8214 37.6654Z" fill="#FF6002"/>
        <path d="M25.0829 23.1751V12.0169C25.0822 11.8646 25.0475 11.7143 24.9813 11.5774C24.915 11.4404 24.8191 11.3202 24.7005 11.2257C24.5835 11.1304 24.4469 11.0627 24.3006 11.0276C24.1543 10.9925 24.002 10.9909 23.855 11.0229L14.797 13.0516C14.5734 13.1024 14.3737 13.2287 14.231 13.4094C14.0882 13.5902 14.011 13.8147 14.012 14.0457V22.5057C13.3249 22.1787 12.5512 22.0852 11.8069 22.239C11.0626 22.3928 10.3879 22.7857 9.88392 23.3588C9.37995 23.9319 9.07394 24.6542 9.01178 25.4174C8.94962 26.1806 9.13467 26.9436 9.53917 27.5918C9.94367 28.24 10.5458 28.7386 11.2553 29.0127C11.9647 29.2868 12.7432 29.3216 13.474 29.112C14.2047 28.9024 14.8484 28.4596 15.3083 27.8501C15.7682 27.2405 16.0197 26.4971 16.0249 25.7314C16.0353 25.5557 16.0353 25.3796 16.0249 25.2039V14.8572L23.07 13.2849V20.4769C22.3826 20.1498 21.6084 20.0563 20.8637 20.2104C20.119 20.3646 19.4441 20.7581 18.9402 21.3319C18.4364 21.9056 18.1308 22.6286 18.0694 23.3924C18.008 24.1561 18.1941 24.9192 18.5998 25.5673C19.0054 26.2153 19.6087 26.7132 20.319 26.9861C21.0294 27.2591 21.8084 27.2924 22.5391 27.0811C23.2699 26.8698 23.9129 26.4253 24.3716 25.8142C24.8302 25.2032 25.0798 24.4587 25.0829 23.6925C25.0925 23.5202 25.0925 23.3475 25.0829 23.1751Z" fill="white"/>
        <path d="M25.2902 47.6745C25.1442 47.6745 24.9983 47.6523 24.8523 47.6079C20.3489 46.232 15.6162 46.232 11.1127 47.6079C10.2788 47.852 9.42394 47.3416 9.17376 46.454C8.92357 45.5663 9.42394 44.6564 10.2579 44.3901C15.3035 42.8589 20.6617 42.8589 25.7071 44.3901C26.5411 44.6342 27.0206 45.5663 26.7913 46.454C26.6036 47.2085 25.9782 47.6745 25.2902 47.6745Z" fill="#FF6002"/>
        </svg>
        
        <h1 className='font-outfit font-semibold text-white'>Pijar Music</h1>
        </div>
        <div id='menu'>
        {/* <button className='relative z-30 peer'>
        <svg xmlns="http://www.w3.org/2000/svg" height="2em" className='fill-white' viewBox="0 0 512 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
        </button> */}
        <ul className='hidden md:flex flex-row items-center gap-10 font-outfit font-[550] text-xl'>
           <li className='relative'>
            {/* <input id='dropdown' type="checkbox" className='peer z-30 absolute w-full right-0 bottom-0 top-0 left-0 opacity-0 transition-all duration-200'/>
            <label htmlFor='dropdown' className='flex flex-row items-center gap-2'>
            <p>Who we are</p>
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" className='fill-white peer-checked:translate-y-full' viewBox="0 0 448 512"><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
            </label>
            <ul className='hidden absolute top-10 duration-200 bg-white rounded-md p-3 text-[#FF6002] w-full peer:transition-all peer-checked:flex peer-checked:flex-col'>
                <li>This We are</li>
                <li>This We are</li>
                <li>This We are</li>
            </ul> */}
           </li>
           <li>Our Campaign</li>
           <li>News</li>
           <li>Contact Us</li>
           <li>
            <button className='flex flex-row items-center gap-2 bg-white h-16 px-4 rounded-lg'>
            <p className='text-[#FF6002]'>Donate Now</p>
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" className="fill-[#FF6002]" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
            </button>
           </li>
        </ul>
        <button htmlFor="drawer" className='relative z-30 peer md:hidden'>
        <svg xmlns="http://www.w3.org/2000/svg" height="2em" className='fill-white relative z-30 peer-checked:fill-[#FF6002]' viewBox="0 0 512 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
        </button>
        {/* <svg xmlns="http://www.w3.org/2000/svg" height="1.7em" className='fill-[#FF6002] z-40 top-5 fixed invisible peer-checked:visible' viewBox="0 0 384 512"><path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg> */}
        <div className='z-20 fixed -top-96 left-0 w-screen h-72 bg-white shadow-2xl peer-focus:top-0 peer:transition-all duration-200'>  
        </div>
        <div className="z-10 fixed left-0 top-0 bg-gray-900 bg-opacity-30 h-screen w-screen opacity-0 peer-focus:opacity-100 peer:transition-all duration-200"></div>
        </div>
        </nav>
        <div id='gradient' className='bg-gradient-to-t from-white to-transparent h-96 opacity-25 absolute bottom-0 w-full'></div>
        </header>
        </>
    )
}