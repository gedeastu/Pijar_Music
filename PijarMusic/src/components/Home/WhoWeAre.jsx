import './WhoWeAre.css'
import theWeeknd from '../assets/theWeeknd.jpeg'
import mcr from '../assets/mcr.jpeg'
export default function Main(){  
    return(
        <>
        <main className='h-max py-20 gap-40 flex flex-col px-7 relative md:flex-row md:items-center md:h-max md:gap-0 md:justify-between md:px-28 md:py-[10.5rem]'>
        {/* <div id='gradient' className='bg-gradient-to-t from-white to-transparent h-40 z-20 absolute -top-52 w-full md:h-96'></div> */}
            <aside className='relative pl-8 flex flex-row items-center'>
                <div className='w-[20rem] h-[25rem] relative md:w-[30rem] md:h-[35rem]'>
                <svg className='absolute top-10 z-20 -left-7 h-16 md:h-24 md:-left-10' viewBox="0 0 85 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="42.418" cy="42.5491" r="42.418" fill="#FF6002"/>
                <g clip-path="url(#clip0_1_249)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M32.8985 31.1554C34.8822 33.9176 37.4159 36.2216 40.3337 37.9166C40.9604 38.3075 41.6809 38.5144 42.4156 38.5144C43.1503 38.5144 43.8708 38.3075 44.4975 37.9166C47.4153 36.2216 49.949 33.9175 51.9327 31.1554C55.0448 26.6751 54.4238 20.9768 49.5121 19.258C48.2453 18.8815 46.8978 18.8931 45.6375 19.2914C44.3771 19.6896 43.2595 20.4569 42.4239 21.4978C38.7531 17.0361 31.6742 18.8314 31.0232 24.6049C30.691 25.7553 31.4707 29.3185 32.8985 31.1554ZM26.2573 43.9456C25.6573 44.3031 25.1165 44.7549 24.6547 45.2844C24.5082 42.552 24.9812 39.822 26.0371 37.3061C27.093 34.7902 28.7034 32.556 30.7433 30.7768C30.983 31.229 31.2852 31.7331 31.6107 32.2251C29.9832 33.7049 28.669 35.5076 27.7485 37.5229C26.8281 39.5381 26.3207 41.7236 26.2573 43.9456ZM28.8281 55.2313C28.0091 55.0777 27.2378 54.7272 26.5783 54.209C22.6519 51.2423 24.8118 44.5897 29.7754 44.644C30.6082 44.6439 31.429 44.8463 32.1697 45.2342C32.9104 45.6222 33.5496 46.1846 34.0344 46.8748C34.5191 47.565 34.8354 48.363 34.9569 49.2027C35.0785 50.0424 35.0018 50.8995 34.7332 51.7029C34.4647 52.5064 34.012 53.233 33.4128 53.8224C32.8135 54.4118 32.085 54.8471 31.2877 55.0921C30.4904 55.3372 29.6472 55.3849 28.8281 55.2313ZM55.0562 44.6441C48.1123 44.9018 48.1396 55.0719 55.0563 55.3206C61.9742 55.1043 61.9983 44.8763 55.0562 44.6441ZM37.1773 51.7842C37.4107 58.8407 47.4208 58.8378 47.6527 51.7841C47.4085 44.7082 37.421 44.7087 37.1773 51.7842ZM47.2491 56.7773C45.9558 58.0645 44.2198 58.7852 42.4121 58.7852C40.6043 58.7852 38.8683 58.0645 37.5751 56.7772C35.2272 58.2246 32.1418 61.4788 33.8986 64.4562C34.2106 64.9661 34.6454 65.3862 35.1617 65.6766C35.6779 65.9669 36.2584 66.1179 36.8481 66.115H47.9843C48.5739 66.1179 49.1545 65.9669 49.6707 65.6766C50.1869 65.3862 50.6217 64.9661 50.9336 64.4562C52.6941 61.4737 49.5975 58.2262 47.2491 56.7773ZM63.7796 59.261C62.9418 57.4641 61.5876 55.9694 59.8968 54.9752C59.2612 55.6225 58.5062 56.135 57.6753 56.4833C56.8444 56.8316 55.9541 57.0087 55.0556 57.0045C53.2475 57.0003 51.5128 56.2749 50.2228 54.9837C49.5018 55.3278 49.8765 55.6053 50.3315 55.9424C50.5558 56.1085 50.7997 56.2891 50.9415 56.4993C52.506 58.1226 53.9854 60.2883 53.9569 62.6458C54.0035 62.8675 53.9348 63.1774 53.8697 63.4705C53.763 63.951 53.6664 64.3862 54.1055 64.3129H60.632C61.2156 64.3074 61.7886 64.1531 62.2988 63.8642C62.8089 63.5753 63.2401 63.1609 63.5529 62.6588C63.8658 62.1566 64.0504 61.5827 64.09 60.9893C64.1296 60.3958 64.0229 59.8017 63.7796 59.261ZM33.8903 56.4993C34.2614 56.1196 34.6589 55.7679 35.0799 55.4468C34.7559 54.8337 34.5492 55.0255 34.2339 55.3181C34.1572 55.3893 34.074 55.4665 33.9812 55.5395C32.6579 56.5717 31.0139 57.0829 29.3507 56.9792C27.6875 56.8756 26.1167 56.164 24.9268 54.9752C22.5799 56.4318 19.4962 59.689 21.2586 62.6626C21.5714 63.1693 22.0054 63.5866 22.5199 63.8753C23.0344 64.1639 23.6124 64.3146 24.1997 64.313H30.7262C31.1654 64.3892 31.0683 63.95 30.9617 63.4677C30.8968 63.1743 30.8285 62.865 30.875 62.6459C30.8411 60.2826 32.3252 58.1224 33.8903 56.4993ZM57.0804 37.5175C56.1585 35.5008 54.8425 33.697 53.2129 32.2165C53.5328 31.7532 53.8279 31.2726 54.0969 30.7768C58.1374 34.176 60.6637 40.3 60.1772 45.2254C59.6871 44.7443 59.15 44.3155 58.5745 43.9455C58.5107 41.7215 58.0023 39.5343 57.0804 37.5175Z" fill="white"/>
                </g>
                <defs>
                <clipPath id="clip0_1_249">
                <rect width="47.1311" height="47.1311" fill="white" transform="translate(18.8525 18.9836)"/>
                </clipPath>
                </defs>
                </svg>
                <img src={theWeeknd} alt="" className='w-full h-full object-cover rounded-lg'/>
                <img src={mcr} alt="" className='w-52 h-60 object-center rounded-lg object-cover absolute z-20 -right-20 -bottom-16 md:w-60 md:h-80 md:-bottom-12'/>
                </div>
            </aside>
            <article className='flex flex-col justify-center items-start gap-8 md:pb-0'>
               <div id="titleDesc" className='flex flex-col gap-3'>
                <h1 className='text-[#FF6002] font-semibold font-outfit text-2xl md:text-4xl'>Who we are</h1>
                <h2 className='text-black font-outfit font-semibold text-3xl md:text-6xl'>We’re Volunteers Community 
                <br />
                & Artist </h2>
                <div className='bg-[#FF6002] w-20 h-2 rounded-full md:w-32'></div>
                <p className='text-black font-outfit text-md md:text-2xl'>Join us and make your life more valuable and useful, be a part of us 
                <br />
                and contribute to the nation and state and the 
                simplest for the 
                <br />
                environment and yourself</p>
               </div>
               <ul className='flex flex-col gap-4'>
                <li className='flex flex-row items-center text-black font-outfit gap-2 font-semibold text-lg md:text-2xl'>
                <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1_235)">
                <path d="M0.991699 9C0.991699 4.02891 5.02061 0 9.9917 0C14.9628 0 18.9917 4.02891 18.9917 9C18.9917 13.9711 14.9628 18 9.9917 18C5.02061 18 0.991699 13.9711 0.991699 9ZM14.0628 7.44609C14.446 7.06289 14.446 6.43711 14.0628 6.05391C13.6796 5.6707 13.0538 5.6707 12.6706 6.05391L8.8667 9.85781L7.31279 8.30391C6.92959 7.9207 6.30381 7.9207 5.92061 8.30391C5.5374 8.68711 5.5374 9.31289 5.92061 9.69609L8.17061 11.9461C8.55381 12.3293 9.17959 12.3293 9.56279 11.9461L14.0628 7.44609Z" fill="#FF6002"/>
                </g>
                <defs>
                <clipPath id="clip0_1_235">
                <rect width="18" height="18" fill="white" transform="translate(0.991699)"/>
                </clipPath>
                </defs>
                </svg>  
                <p>Support people in extreme need</p>
                </li>
                <li className='flex flex-row items-center text-black font-outfit gap-2 font-semibold text-lg md:text-2xl'>
                <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1_235)">
                <path d="M0.991699 9C0.991699 4.02891 5.02061 0 9.9917 0C14.9628 0 18.9917 4.02891 18.9917 9C18.9917 13.9711 14.9628 18 9.9917 18C5.02061 18 0.991699 13.9711 0.991699 9ZM14.0628 7.44609C14.446 7.06289 14.446 6.43711 14.0628 6.05391C13.6796 5.6707 13.0538 5.6707 12.6706 6.05391L8.8667 9.85781L7.31279 8.30391C6.92959 7.9207 6.30381 7.9207 5.92061 8.30391C5.5374 8.68711 5.5374 9.31289 5.92061 9.69609L8.17061 11.9461C8.55381 12.3293 9.17959 12.3293 9.56279 11.9461L14.0628 7.44609Z" fill="#FF6002"/>
                </g>
                <defs>
                <clipPath id="clip0_1_235">
                <rect width="18" height="18" fill="white" transform="translate(0.991699)"/>
                </clipPath>
                </defs>
                </svg>  
                <p>Largest global crowdfunding community</p>
                </li>
                <li className='flex flex-row items-center text-black font-outfit gap-2 font-semibold text-lg md:text-2xl'>
                <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1_235)">
                <path d="M0.991699 9C0.991699 4.02891 5.02061 0 9.9917 0C14.9628 0 18.9917 4.02891 18.9917 9C18.9917 13.9711 14.9628 18 9.9917 18C5.02061 18 0.991699 13.9711 0.991699 9ZM14.0628 7.44609C14.446 7.06289 14.446 6.43711 14.0628 6.05391C13.6796 5.6707 13.0538 5.6707 12.6706 6.05391L8.8667 9.85781L7.31279 8.30391C6.92959 7.9207 6.30381 7.9207 5.92061 8.30391C5.5374 8.68711 5.5374 9.31289 5.92061 9.69609L8.17061 11.9461C8.55381 12.3293 9.17959 12.3293 9.56279 11.9461L14.0628 7.44609Z" fill="#FF6002"/>
                </g>
                <defs>
                <clipPath id="clip0_1_235">
                <rect width="18" height="18" fill="white" transform="translate(0.991699)"/>
                </clipPath>
                </defs>
                </svg>  
                <p>Make the world a better place</p>
                </li>
                <li className='flex flex-row items-center text-black font-outfit gap-2 font-semibold text-lg md:text-2xl'>
                <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1_235)">
                <path d="M0.991699 9C0.991699 4.02891 5.02061 0 9.9917 0C14.9628 0 18.9917 4.02891 18.9917 9C18.9917 13.9711 14.9628 18 9.9917 18C5.02061 18 0.991699 13.9711 0.991699 9ZM14.0628 7.44609C14.446 7.06289 14.446 6.43711 14.0628 6.05391C13.6796 5.6707 13.0538 5.6707 12.6706 6.05391L8.8667 9.85781L7.31279 8.30391C6.92959 7.9207 6.30381 7.9207 5.92061 8.30391C5.5374 8.68711 5.5374 9.31289 5.92061 9.69609L8.17061 11.9461C8.55381 12.3293 9.17959 12.3293 9.56279 11.9461L14.0628 7.44609Z" fill="#FF6002"/>
                </g>
                <defs>
                <clipPath id="clip0_1_235">
                <rect width="18" height="18" fill="white" transform="translate(0.991699)"/>
                </clipPath>
                </defs>
                </svg>  
                <p>Share your love for community</p>
                </li>
               </ul>
               <button className='font-outfit bg-[#FF6002] font-semibold h-14 w-32 flex items-center justify-center rounded-lg text-white md:w-52 md:h-16'>About Us</button>
            </article>
        </main>
        </>
    )
}