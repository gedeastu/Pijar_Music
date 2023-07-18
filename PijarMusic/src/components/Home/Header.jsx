import './Header.css'
import OurActivity from '../assets/OurActivity.svg'
// import { Dropdown } from 'react-nested-dropdown';
// import 'react-nested-dropdown/dist/styles.css';
export default function Header(){
    // const itemsWhoWeAre = [
    //     {
    //       label: 'Option 1',
    //       onSelect: () => console.log('Option 1 selected'),
    //     },
    //     // {
    //     //     label: <button>This We Are</button>,
    //     // },
    //     {
    //       label: 'Option 2',
    //       items: [
    //         {
    //           label: 'Option 2.1',
    //           onSelect: () => console.log('Option 2.1 selected'),
    //         },
    //         {
    //           label: 'Option 2.2',
    //           onSelect: () => console.log('Option 2.2 selected'),
    //         },
    //       ],
    //     },
    //   ];
    return(
        <>
        <header id='header' className='max-w-full h-[95rem] bg-cover bg-center relative md:h-screen'>
            <nav className='relative px-7 py-7 flex flex-row-reverse items-center justify-between md:flex-row md:px-28 md:py-7'>
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
            <ul className='hidden md:flex flex-row items-center gap-10 font-outfit font-[550] text-xl text-white'>
            <li className='relative'>
                <input id='dropdown' type="checkbox" className='peer z-50 absolute w-full right-0 bottom-0 top-0 left-0 opacity-0 transition-all duration-200'/>
                <label htmlFor='dropdown' className='flex flex-row items-center gap-2.5 relative'>
                <p>Who we are</p>
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" className='fill-white mb-2' viewBox="0 0 320 512"><path d="M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z"/></svg>
                </label>
                <ul className='opacity-0 absolute h-0 z-50 top-9 duration-200 bg-white rounded-md p-3 text-[#FF6002] w-full peer:transition peer-checked:flex peer-checked:h-52 peer-checked:opacity-100 peer-checked:flex-col peer-checked:gap-3 peer-checked:shadow-md'>
                    <li>This We are</li>
                    <li>This We are</li>
                    <li>This We are</li>
                </ul>
                {/* <Dropdown itemsWhoWeAre={itemsWhoWeAre} containerWidth="300px" className='relative z-30'>
                {({ isOpen, onClick }) => (
                    <button type="button" onClick={onClick}>
                    {isOpen ? 'Close dropdown' : 'Open dropdown'}
                    </button>
                )}
                </Dropdown> */}
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
            <button htmlFor="drawer" className='relative z-50 peer md:hidden'>
            <svg xmlns="http://www.w3.org/2000/svg" height="2em" className='fill-white relative z-30 peer-checked:fill-[#FF6002]' viewBox="0 0 512 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
            </button>
            {/* <svg xmlns="http://www.w3.org/2000/svg" height="1.7em" className='fill-[#FF6002] z-40 top-5 fixed invisible peer-checked:visible' viewBox="0 0 384 512"><path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg> */}
            <div className='z-40 fixed -top-96 left-0 w-screen h-72 bg-white shadow-2xl peer-focus:top-0 peer:transition-all duration-200'>  
            </div>
            <div className="z-30 fixed left-0 top-0 bg-gray-900 bg-opacity-30 h-screen w-screen opacity-0 peer-focus:opacity-100 peer:transition-all duration-200"></div>
            </div>
            </nav>
            <div className='flex flex-col px-7 items-center gap-14 md:flex-row md:items-center md:px-28 md:justify-between'>
            <article className='text-white flex flex-col items-start justify-center h-[43rem] gap-9 font-outfit'>
                <h1 className='font-semibold'>TRUSTED MUSIC COMPANY</h1>
                <h2 className='font-bold text-5xl md:text-7xl'>Let's Help And Make
                    <br />
                    People Smile By 
                    <span className='text-[#FF6002]'> Giving</span>
                    <br />
                    Of Yours
                </h2>
                <h3 className='font-semibold text-lg'>
                No matter how small the ticket you order it will mean a lot to them, let's join music 
                <br />
                charity concert  right now to help fellow humans in need
                </h3>
                <div className='flex flex-row items-center gap-10 md:gap-20'>
                <button className='font-semibold bg-[#FF6002] h-10 w-32 rounded-md'>Get Started</button>
                <button>
                <svg width="85" height="81" viewBox="0 0 85 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M36.921 29.8035V51.0915L54.8222 40.4475L36.921 29.8035Z" fill="white"/>
                <path d="M37.4517 71.3617C38.0234 71.4591 38.4872 71.626 38.8429 71.8624C39.1973 72.1053 39.4538 72.3823 39.6123 72.6933C39.7631 73.0097 39.8154 73.3262 39.7694 73.643C39.7595 73.6954 39.7312 73.7379 39.6843 73.7705C39.6297 73.8085 39.5728 73.8225 39.5137 73.8124L39.0109 73.7268C38.932 73.7134 38.8766 73.6836 38.8446 73.6376C38.8125 73.5916 38.7949 73.5412 38.7916 73.4866C38.7883 73.3237 38.739 73.1531 38.6438 72.9746C38.5407 72.8015 38.384 72.643 38.1737 72.499C37.9556 72.3604 37.6625 72.2598 37.2945 72.1971C36.7293 72.1008 36.2968 72.1286 35.9969 72.2804C35.6892 72.4376 35.5039 72.6832 35.4411 73.0174C35.3979 73.2467 35.4357 73.4425 35.5544 73.6047C35.6653 73.7723 35.8548 73.9364 36.123 74.0971C36.3913 74.2577 36.7431 74.4427 37.1784 74.6521C37.6323 74.8714 38.0016 75.0898 38.2862 75.3073C38.5708 75.5248 38.7692 75.7682 38.8813 76.0375C38.9869 76.3056 39.0045 76.6264 38.9342 76.9999C38.8677 77.3537 38.7132 77.6519 38.4708 77.8946C38.2272 78.1439 37.9126 78.3202 37.5269 78.4236C37.1346 78.5258 36.6821 78.5333 36.1695 78.446C35.762 78.3766 35.4176 78.2604 35.1363 78.0976C34.8471 77.9401 34.6179 77.7523 34.4487 77.5342C34.2783 77.3226 34.1602 77.103 34.0945 76.8755C34.0275 76.6545 34.0093 76.4451 34.0397 76.2474C34.0483 76.2016 34.0734 76.1585 34.1149 76.1183C34.1551 76.0845 34.2114 76.0738 34.2837 76.0862L34.8062 76.1751C34.8522 76.183 34.899 76.2045 34.9467 76.2396C34.9877 76.2737 35.0146 76.329 35.0274 76.4055C35.0162 76.6808 35.1249 76.9326 35.3532 77.1608C35.5816 77.3891 35.9061 77.539 36.3267 77.6106C36.7539 77.6834 37.1176 77.6608 37.4179 77.5429C37.7116 77.4239 37.8911 77.1907 37.9564 76.8435C37.9983 76.6207 37.9711 76.4234 37.8745 76.2514C37.7768 76.086 37.6037 75.9247 37.3552 75.7674C37.1067 75.6102 36.7773 75.4323 36.3669 75.234C35.8683 75.0003 35.4668 74.773 35.1624 74.5522C34.8569 74.3378 34.648 74.096 34.5359 73.8268C34.416 73.5629 34.3912 73.2443 34.4614 72.8708C34.5391 72.4581 34.7141 72.1227 34.9865 71.8649C35.2576 71.6135 35.6051 71.4428 36.029 71.3527C36.4451 71.2681 36.9193 71.2711 37.4517 71.3617Z" fill="white"/>
                <path d="M27.6263 68.6629C27.6898 68.6997 27.728 68.7449 27.741 68.7987C27.7504 68.8581 27.7371 68.9158 27.7011 68.9719L24.1767 74.4691C24.1371 74.5309 24.0893 74.5685 24.0331 74.5821C23.9733 74.6013 23.9117 74.5925 23.8482 74.5557L20.2761 72.4829C20.2127 72.4461 20.1762 72.398 20.1668 72.3387C20.1538 72.2849 20.1671 72.2272 20.2067 72.1654L20.4118 71.8455C20.4514 71.7838 20.4992 71.7461 20.5554 71.7325C20.6116 71.7189 20.6714 71.7305 20.7349 71.7674L23.6756 73.4738L24.8576 71.6302L22.1071 70.0341C22.0437 69.9973 22.0073 69.9492 21.9979 69.8899C21.9849 69.8361 21.9982 69.7784 22.0377 69.7167L22.2374 69.4052C22.2734 69.3491 22.3213 69.3114 22.3811 69.2922C22.4373 69.2786 22.4971 69.2902 22.5605 69.327L25.311 70.923L26.5362 69.012L23.5262 67.2654C23.4628 67.2286 23.4246 67.1834 23.4116 67.1296C23.3986 67.0759 23.4118 67.0181 23.4514 66.9564L23.6619 66.6281C23.6979 66.5719 23.7458 66.5343 23.8056 66.5151C23.8617 66.5015 23.9216 66.5131 23.985 66.5499L27.6263 68.6629Z" fill="white"/>
                <path d="M17.7491 61.6678C17.795 61.725 17.8143 61.7809 17.807 61.8356C17.7943 61.8943 17.761 61.9432 17.7071 61.9824L12.4255 65.8224C12.3662 65.8655 12.3078 65.8832 12.2504 65.8756C12.1876 65.8718 12.1332 65.8414 12.0873 65.7842L9.50086 62.5644C9.45494 62.5072 9.43832 62.4493 9.45102 62.3907C9.45832 62.336 9.49163 62.2871 9.55094 62.2439L9.85829 62.0205C9.9176 61.9774 9.97596 61.9596 10.0334 61.9673C10.0908 61.975 10.1424 62.0074 10.1884 62.0645L12.3177 64.7152L14.089 63.4274L12.0975 60.9482C12.0515 60.891 12.0349 60.8331 12.0476 60.7745C12.0549 60.7198 12.0882 60.6709 12.1475 60.6278L12.4468 60.4102C12.5007 60.371 12.5591 60.3533 12.6219 60.357C12.6793 60.3647 12.7309 60.3971 12.7769 60.4543L14.7684 62.9334L16.6044 61.5985L14.425 58.8855C14.3791 58.8283 14.3598 58.7724 14.3671 58.7177C14.3744 58.663 14.4077 58.614 14.467 58.5709L14.7824 58.3416C14.8364 58.3024 14.8947 58.2846 14.9575 58.2884C15.0149 58.296 15.0666 58.3285 15.1125 58.3856L17.7491 61.6678Z" fill="white"/>
                <path d="M9.2905 42.3552C9.31413 42.9214 9.23784 43.4113 9.06161 43.8249C8.87871 44.2388 8.58867 44.5633 8.19147 44.7985C7.78761 45.0339 7.27645 45.1766 6.65801 45.2267C6.36516 45.2444 6.0855 45.2583 5.81902 45.2684C5.54589 45.2787 5.26261 45.2861 4.96921 45.2905C4.3552 45.287 3.84028 45.1797 3.42445 44.9686C3.00168 44.7511 2.68188 44.4429 2.46506 44.0442C2.2413 43.639 2.11816 43.1667 2.09563 42.6271C2.07283 42.0809 2.1562 41.6008 2.34576 41.1867C2.52837 40.7661 2.82133 40.4315 3.22464 40.1828C3.62128 39.9343 4.12563 39.7885 4.7377 39.7453C5.03026 39.7209 5.31312 39.7036 5.58626 39.6932C5.85273 39.6832 6.13281 39.6793 6.42649 39.6815C7.04688 39.6781 7.56833 39.7818 7.99082 39.9927C8.40637 40.1971 8.72256 40.4987 8.93938 40.8975C9.14954 41.2965 9.26658 41.7824 9.2905 42.3552ZM8.4411 42.3873C8.41969 41.8745 8.24908 41.4639 7.92929 41.1558C7.60921 40.841 7.10553 40.6832 6.41824 40.6825C6.1179 40.6805 5.85114 40.6839 5.61798 40.6927C5.37815 40.7018 5.11195 40.7185 4.81938 40.7429C4.36027 40.7736 3.99081 40.8743 3.71103 41.045C3.43096 41.209 3.22973 41.4234 3.10734 41.6883C2.98495 41.9531 2.93084 42.2553 2.94503 42.595C2.95865 42.9214 3.03751 43.212 3.18159 43.4667C3.32568 43.7214 3.54429 43.9233 3.83742 44.0724C4.13028 44.2147 4.50696 44.2872 4.96747 44.2899C5.26087 44.2854 5.52749 44.2787 5.76732 44.2696C6.00048 44.2608 6.26682 44.2474 6.56633 44.2294C7.25139 44.1769 7.74034 43.9816 8.03316 43.6436C8.32598 43.3057 8.46196 42.8869 8.4411 42.3873Z" fill="white"/>
                <path d="M11.2091 29.8065C11.0035 30.3273 10.7318 30.7432 10.3941 31.0542C10.0588 31.3589 9.65934 31.5452 9.1956 31.6129C8.72802 31.6722 8.18976 31.5931 7.58082 31.3754L3.75766 30.009C3.6886 29.9844 3.64259 29.9467 3.61961 29.896C3.59036 29.8431 3.5892 29.7825 3.61613 29.7143L3.80345 29.24C3.83038 29.1718 3.87317 29.1269 3.9318 29.1054C3.98661 29.0755 4.04854 29.0728 4.1176 29.0975L7.95959 30.4707C8.57481 30.6905 9.08627 30.7106 9.49395 30.5308C9.90164 30.351 10.2034 30.0131 10.3993 29.517C10.5928 29.0272 10.5983 28.5869 10.4158 28.1962C10.2359 27.7993 9.83827 27.491 9.22304 27.2711L5.38105 25.8979C5.312 25.8733 5.26598 25.8356 5.24301 25.7849C5.2162 25.7258 5.21504 25.6653 5.23953 25.6033L5.43051 25.1196C5.455 25.0576 5.49656 25.0158 5.5552 24.9943C5.61 24.9644 5.67193 24.9618 5.74099 24.9864L9.56415 26.3528C10.1731 26.5705 10.6318 26.8512 10.9402 27.1949C11.2448 27.5302 11.4178 27.9175 11.4592 28.3569C11.5006 28.7962 11.4173 29.2794 11.2091 29.8065Z" fill="white"/>
                <path d="M16.3329 20.8471C16.2819 20.8998 16.2275 20.9274 16.1696 20.9298C16.1066 20.9278 16.0501 20.9048 16 20.8609L11.088 16.5581C11.0328 16.5098 11.0041 16.4581 11.0019 16.403C10.9946 16.3435 11.0164 16.2874 11.0674 16.2347L12.7644 14.4814C13.2883 13.9401 13.8361 13.6277 14.4079 13.5444C14.9797 13.461 15.5263 13.6478 16.0479 14.1046C16.434 14.4429 16.6595 14.8131 16.7244 15.2151C16.789 15.608 16.7159 16.0043 16.5051 16.4039L19.577 17.05C19.621 17.062 19.6556 17.079 19.6806 17.101C19.7208 17.1361 19.7396 17.1836 19.7373 17.2435C19.7395 17.2986 19.7221 17.3453 19.685 17.3837L19.3512 17.7286C19.2724 17.81 19.1919 17.8501 19.1096 17.8489C19.0274 17.8477 18.9498 17.8417 18.8769 17.8309L15.9579 17.1992L14.7408 18.4567L16.6815 20.1567C16.7317 20.2006 16.758 20.2547 16.7607 20.319C16.763 20.3741 16.7386 20.428 16.6876 20.4807L16.3329 20.8471ZM14.1014 17.8966L15.2489 16.7109C15.5967 16.3517 15.7786 16.0153 15.7947 15.7019C15.8057 15.3841 15.6558 15.089 15.3449 14.8166C15.039 14.5487 14.72 14.433 14.388 14.4697C14.0606 14.5016 13.7208 14.6996 13.3684 15.0636L12.2209 16.2493L14.1014 17.8966Z" fill="white"/>
                <path d="M31.8259 10.496C31.7736 10.5068 31.7235 10.4967 31.6754 10.4658C31.6273 10.4349 31.5974 10.3935 31.5855 10.3415C31.5781 10.309 31.5732 10.2726 31.5708 10.2322L32.5601 3.42274C32.5714 3.35235 32.5954 3.29294 32.6322 3.2445C32.669 3.19607 32.7331 3.16241 32.8245 3.14353L33.4905 3.00599C33.5754 2.98846 33.6451 2.99447 33.6997 3.02403C33.7608 3.05224 33.8119 3.09614 33.8528 3.15574L37.7112 8.96398C37.7332 9.00028 37.7479 9.03468 37.7553 9.06718C37.7671 9.11917 37.7579 9.16872 37.7277 9.2158C37.6974 9.26289 37.6561 9.29183 37.6039 9.30262L37.1044 9.40578C37.0261 9.42196 36.9629 9.4146 36.9148 9.38369C36.8733 9.35143 36.8423 9.32041 36.8218 9.29061L35.9672 8.01744L32.755 8.68089L32.5323 10.1766C32.5332 10.2104 32.5185 10.2509 32.4882 10.298C32.458 10.345 32.4037 10.3767 32.3253 10.3929L31.8259 10.496ZM32.8477 7.78379L35.4919 7.23766L33.38 4.04969L32.8477 7.78379Z" fill="white"/>
                <path d="M47.8202 9.5033C47.215 9.40385 46.732 9.20965 46.3712 8.92069C46.017 8.63282 45.7742 8.27206 45.6429 7.83843C45.5116 7.40479 45.4843 6.92069 45.5611 6.38614C45.6033 6.11612 45.6524 5.82696 45.7084 5.51867C45.7643 5.21037 45.8212 4.91574 45.879 4.63476C45.9952 4.10669 46.1916 3.65934 46.4682 3.29273C46.7447 2.92611 47.1006 2.66372 47.5358 2.50555C47.9776 2.34847 48.5011 2.31965 49.1063 2.41909C49.5602 2.49367 49.9469 2.62138 50.2663 2.80222C50.5858 2.98306 50.8383 3.1968 51.0239 3.44346C51.216 3.69119 51.3475 3.95598 51.4182 4.23781C51.4902 4.51309 51.5078 4.78955 51.4709 5.06721C51.4668 5.12733 51.4381 5.17328 51.3849 5.20507C51.3383 5.23794 51.2854 5.24951 51.2262 5.23979L50.6835 5.15061C50.6243 5.14088 50.5746 5.11584 50.5345 5.07547C50.501 5.03619 50.4821 4.97229 50.4779 4.88377C50.4589 4.35376 50.3121 3.96824 50.0374 3.72722C49.7694 3.48727 49.4051 3.32946 48.9446 3.2538C48.4183 3.16733 47.9732 3.24955 47.6092 3.50049C47.2465 3.74486 46.9924 4.19285 46.847 4.84448C46.7296 5.37911 46.6296 5.9301 46.5469 6.49746C46.4541 7.15773 46.5349 7.66413 46.7894 8.01667C47.045 8.36264 47.4359 8.57887 47.9622 8.66534C48.4227 8.74101 48.8215 8.70859 49.1586 8.56809C49.5023 8.42867 49.7766 8.11233 49.9813 7.61907C50.0165 7.53704 50.0568 7.48286 50.1022 7.45655C50.1542 7.43132 50.2098 7.42357 50.2691 7.4333L50.8118 7.52247C50.871 7.5322 50.9167 7.55999 50.9491 7.60583C50.988 7.65275 50.9988 7.70519 50.9815 7.76315C50.9183 8.03648 50.8037 8.29461 50.6377 8.53753C50.4728 8.77389 50.2562 8.97811 49.9878 9.15018C49.7261 9.32333 49.4128 9.44412 49.0481 9.51254C48.6834 9.58096 48.2741 9.57788 47.8202 9.5033Z" fill="white"/>
                <path d="M58.7132 12.8772C58.6548 12.8448 58.6157 12.8003 58.5958 12.7436C58.5852 12.6844 58.5972 12.6264 58.6321 12.5695L61.7018 7.55446L60.0223 6.62401C59.964 6.59171 59.9249 6.54719 59.905 6.49046C59.8943 6.43127 59.9064 6.37325 59.9412 6.31639L60.1605 5.95817C60.1988 5.89562 60.2459 5.85698 60.3017 5.84225C60.3669 5.82506 60.4287 5.83262 60.487 5.86493L64.7032 8.20075C64.7673 8.23629 64.8047 8.28365 64.8153 8.34284C64.8353 8.39957 64.8261 8.45921 64.7878 8.52175L64.5686 8.87997C64.5338 8.93683 64.4838 8.97386 64.4186 8.99104C64.3627 9.00577 64.3027 8.99537 64.2385 8.95983L62.5678 8.03423L59.498 13.0493C59.4632 13.1062 59.4132 13.1432 59.3481 13.1604C59.2922 13.1751 59.2322 13.1647 59.168 13.1292L58.7132 12.8772Z" fill="white"/>
                <path d="M66.5568 18.4546C66.5058 18.4019 66.4815 18.348 66.4837 18.2929C66.491 18.2334 66.5197 18.1817 66.5699 18.1378L71.4894 13.8284C71.5395 13.7845 71.5935 13.7637 71.6514 13.7661C71.7144 13.7641 71.7713 13.7895 71.8223 13.8422L72.1909 14.223C72.2373 14.2709 72.2568 14.3246 72.2495 14.3841C72.2519 14.444 72.228 14.4959 72.1779 14.5398L67.2584 18.8492C67.2082 18.8931 67.1494 18.9137 67.0818 18.9109C67.0239 18.9085 66.9718 18.8833 66.9254 18.8354L66.5568 18.4546Z" fill="white"/>
                <path d="M72.6482 26.5482C72.6047 26.4582 72.5913 26.3768 72.608 26.3041C72.6275 26.2374 72.6667 26.173 72.7255 26.1109L77.6478 21.5278C77.6787 21.4998 77.7094 21.4791 77.7399 21.4658C77.7888 21.4444 77.8402 21.4437 77.8943 21.4637C77.9483 21.4837 77.9869 21.5178 78.0101 21.5658L78.2362 22.0341C78.271 22.1061 78.2757 22.1695 78.2504 22.2242C78.234 22.2822 78.212 22.3209 78.1843 22.3403L73.8411 26.3759L79.8889 25.8703C79.9252 25.8689 79.9704 25.8783 80.0244 25.8983C80.0846 25.9156 80.1321 25.9603 80.1669 26.0323L80.393 26.5006C80.4162 26.5486 80.4181 26.5987 80.3989 26.6507C80.3825 26.7087 80.3499 26.7485 80.301 26.7698C80.2705 26.7832 80.234 26.7918 80.1915 26.7958L73.3256 27.3536C73.2407 27.3617 73.1638 27.348 73.095 27.3127C73.029 27.2833 72.9743 27.2236 72.9308 27.1336L72.6482 26.5482Z" fill="white"/>
                <path d="M75.7487 36.0099C75.7397 35.9372 75.7527 35.8787 75.7875 35.8346C75.829 35.7897 75.8828 35.7635 75.9491 35.7561L82.4485 35.0289C82.5148 35.0215 82.5702 35.0354 82.6149 35.0706C82.6662 35.1051 82.6963 35.1588 82.7053 35.2316L82.7704 35.7576C82.7785 35.8237 82.7619 35.8792 82.7204 35.9241C82.6864 35.9749 82.6363 36.004 82.57 36.0114L76.0706 36.7386C76.0043 36.746 75.9451 36.7292 75.893 36.6881C75.8484 36.6528 75.822 36.6021 75.8138 36.5359L75.7487 36.0099Z" fill="white"/>
                <path d="M75.6017 45.6757C75.6144 45.6102 75.6448 45.5581 75.6931 45.5192C75.7467 45.4879 75.8063 45.4781 75.872 45.4896L81.6636 46.5049L82.0287 44.6199C82.0414 44.5545 82.0719 44.5023 82.1202 44.4634C82.1737 44.4322 82.2333 44.4223 82.299 44.4338L82.7127 44.5064C82.7849 44.519 82.837 44.5484 82.8687 44.5946C82.9058 44.6485 82.918 44.7082 82.9054 44.7736L81.9888 49.5057C81.9749 49.5777 81.9411 49.6293 81.8876 49.6605C81.8393 49.6994 81.779 49.7125 81.7068 49.6998L81.2931 49.6273C81.2274 49.6158 81.1761 49.5831 81.139 49.5292C81.1072 49.4831 81.0983 49.424 81.1122 49.352L81.4754 47.4768L75.6837 46.4615C75.618 46.45 75.5667 46.4173 75.5296 46.3635C75.4978 46.3173 75.4889 46.2582 75.5028 46.1862L75.6017 45.6757Z" fill="white"/>
                <path d="M72.5282 54.4978C72.5635 54.4335 72.6086 54.3928 72.6637 54.3755C72.7248 54.3612 72.7851 54.3689 72.8448 54.3986L78.7011 57.3099C78.7608 57.3396 78.7989 57.3808 78.8155 57.4337C78.838 57.4895 78.8316 57.5496 78.7963 57.6139L78.5412 58.0784C78.5091 58.1368 78.4625 58.1732 78.4015 58.1875C78.3432 58.2106 78.2842 58.2073 78.2245 58.1776L72.3682 55.2663C72.3085 55.2367 72.269 55.191 72.2497 55.1293C72.2331 55.0764 72.2409 55.0208 72.273 54.9624L72.5282 54.4978Z" fill="white"/>
                <path d="M67.7768 61.231C67.8304 61.1809 67.8862 61.1562 67.9442 61.1568C68.0069 61.162 68.0622 61.1878 68.1101 61.2342L72.7974 65.7806C72.85 65.8316 72.8761 65.8847 72.8756 65.9399C72.8798 65.9996 72.8551 66.0546 72.8015 66.1046L69.782 68.9222C69.7284 68.9723 69.6702 68.9947 69.6074 68.9895C69.5495 68.9889 69.4942 68.9631 69.4415 68.9121L69.1688 68.6475C69.1161 68.5964 69.0901 68.5433 69.0906 68.4882C69.0911 68.4331 69.1182 68.3805 69.1718 68.3305L71.6577 66.0108L70.0856 64.4861L67.7607 66.6556C67.707 66.7056 67.6489 66.7281 67.5861 66.7229C67.5282 66.7223 67.4729 66.6965 67.4202 66.6454L67.1546 66.3878C67.1068 66.3414 67.0807 66.2883 67.0765 66.2285C67.077 66.1734 67.1041 66.1208 67.1577 66.0708L69.4827 63.9012L67.8532 62.3208L65.3089 64.695C65.2553 64.745 65.1995 64.7698 65.1416 64.7692C65.0836 64.7686 65.0283 64.7428 64.9757 64.6918L64.6957 64.4203C64.6479 64.3738 64.6218 64.3207 64.6175 64.261C64.6181 64.2058 64.6452 64.1532 64.6988 64.1032L67.7768 61.231Z" fill="white"/>
                <path d="M56.1918 69.0184C56.7288 68.7992 57.215 68.6944 57.6504 68.7038C58.0886 68.7193 58.464 68.8144 58.7766 68.989C59.0857 69.1723 59.3123 69.4072 59.4561 69.6939C59.478 69.7426 59.4787 69.7927 59.4581 69.8442C59.4341 69.9044 59.3943 69.9458 59.3387 69.9685L58.8665 70.1612C58.7925 70.1914 58.7287 70.1958 58.6752 70.1745C58.6217 70.1531 58.5779 70.1207 58.5436 70.0771C58.447 69.9438 58.3072 69.8282 58.1241 69.7302C57.9376 69.6407 57.7145 69.5915 57.4546 69.5824C57.1913 69.5819 56.8868 69.6522 56.5411 69.7932C56.0103 70.0099 55.6625 70.2597 55.4978 70.5428C55.3297 70.8344 55.3155 71.1353 55.4552 71.4452C55.5511 71.6579 55.6957 71.8004 55.8891 71.8726C56.079 71.9534 56.333 71.9901 56.6512 71.9826C56.9694 71.9751 57.3719 71.9439 57.8588 71.8892C58.3669 71.8329 58.8034 71.8204 59.1681 71.8514C59.5329 71.8824 59.8401 71.9802 60.0896 72.1446C60.333 72.3115 60.5327 72.5682 60.6889 72.9146C60.8369 73.2428 60.8789 73.5711 60.8149 73.8994C60.7538 74.2337 60.5908 74.5449 60.3259 74.8329C60.055 75.1233 59.6787 75.3668 59.1973 75.5632C58.8146 75.7194 58.458 75.8038 58.1274 75.8163C57.7935 75.8374 57.4925 75.802 57.2244 75.7099C56.9591 75.6238 56.7332 75.5037 56.5467 75.3496C56.363 75.2015 56.227 75.0375 56.1386 74.8577C56.1195 74.8151 56.1157 74.7663 56.1274 74.7112C56.1418 74.6621 56.183 74.6237 56.2509 74.596L56.7416 74.3958C56.7848 74.3782 56.8366 74.3714 56.8969 74.3756C56.9511 74.3823 57.0056 74.414 57.0604 74.4708C57.2098 74.7048 57.4463 74.8566 57.7699 74.926C58.0935 74.9954 58.4529 74.9495 58.8479 74.7884C59.2491 74.6246 59.542 74.4152 59.7266 74.16C59.905 73.9073 59.9216 73.6199 59.7764 73.2978C59.6832 73.0911 59.5465 72.9419 59.3662 72.8499C59.1886 72.7641 58.95 72.7211 58.6504 72.7211C58.3507 72.721 57.9712 72.7464 57.5117 72.7971C56.9576 72.8649 56.4889 72.8871 56.1056 72.8636C55.7251 72.8462 55.41 72.7553 55.1605 72.5908C54.9076 72.435 54.703 72.1839 54.5468 71.8375C54.3742 71.4546 54.3281 71.0848 54.4085 70.7282C54.4916 70.3777 54.6855 70.0539 54.9901 69.757C55.2912 69.4686 55.6918 69.2224 56.1918 69.0184Z" fill="white"/>
                </svg>
                </button>
                </div>
            </article>
            <aside className='relative'>
                <article className='bg-white shadow-xl relative z-20 gap-4 flex flex-col rounded-xl font-outfit p-5 md:w-[40rem]'>
                <svg id='IconCharity' className='absolute -right-5 -top-5' width="94" height="80" viewBox="0 0 94 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="47" cy="48.0058" rx="47" ry="47.8981" fill="#FF6002"/>
                <g clip-path="url(#clip0_1_101)">
                <path d="M62.0134 24.2049C60.7141 22.9587 59.0514 22.3604 57.3756 22.3604C55.4892 22.3604 53.5842 23.1183 52.1638 24.5678C51.8292 24.9088 51.2788 24.9074 50.9447 24.5659C49.5243 23.1183 47.6193 22.3604 45.7328 22.3604C44.0571 22.3604 42.3944 22.9587 41.0951 24.2049C38.2375 26.9461 38.1872 31.5319 40.9423 34.3396L50.1267 43.6996C50.9107 44.4985 52.1978 44.4985 52.9818 43.6996L62.1662 34.3396C64.9213 31.5319 64.8709 26.9461 62.0134 24.2049Z" fill="white"/>
                <path d="M72.4296 50.6615C70.7986 49.535 68.8767 49.8541 67.1749 50.8552C65.7194 51.7114 58.3622 58.0625 56.2622 59.8837C55.8973 60.2001 55.4357 60.3707 54.9528 60.3708L46.0833 60.3725C45.6359 60.3725 45.1513 59.8596 45.1513 59.4056C45.1513 58.8718 45.6079 58.4558 46.0833 58.4558H51.968C54.0278 58.4558 56.3336 57.088 56.3336 54.6564C56.3336 52.0729 54.0278 50.8571 51.968 50.8571C48.7412 50.8571 47.8613 50.8695 47.721 50.8719C47.7064 50.8722 47.6921 50.8723 47.6775 50.8723C46.253 50.8714 44.81 50.7818 43.6973 50.1751C42.2061 49.3963 40.4874 48.9556 38.6532 48.9556C35.5738 48.9556 32.8169 50.2074 30.9268 52.1812L22.2851 60.8523C21.5115 61.6285 21.5066 62.8827 22.2741 63.6649L30.6456 72.1963C31.4296 72.9953 32.7167 72.9953 33.5007 72.1963L35.2132 70.4511C35.5893 70.0678 36.1038 69.8518 36.6408 69.8518H54.6784C56.5573 69.8518 58.371 69.1489 59.7746 67.8781L72.5564 53.2659C73.3374 52.5592 73.2927 51.2599 72.4296 50.6615Z" fill="white"/>
                </g>
                <defs>
                <clipPath id="clip0_1_101">
                <rect x="20.8889" y="21.3958" width="52.2222" height="53.2201" fill="white"/>
                </clipPath>
                </defs>
                </svg>
                <button className='bg-[#FF6002] text-white p-2.5 rounded-lg w-28 font-semibold'>Information</button>
                <h1 className='font-bold text-3xl text-[#213430]'>Your support brings hope and relief 
                <br />
                to natural disaster victims.
                </h1>
                <p className='text-[#6F7775]'>"Join the rhythm of compassion and make a lasting impact. Donate to our music concert charity and help rebuild lives affected by natural disasters."</p>
                <div id="stats" className='bg-[#F5F5F5] w-full py-10 px-5 rounded-md'>
                <div id='statistik' className='bg-white w-full h-4 rounded-full'>
                    <div id="parameter" className='bg-[#FF6002] relative w-[29%] h-full rounded-full'>
                    <p className='absolute -top-5 right-0 text-sm text-[#FF6002] font-semibold'>29%</p>
                    </div>
                    <div className='flex flex-row justify-between text-sm pt-2'>
                    <p className='text-[#213430]'>
                    <span className='font-semibold text-[#213430]'>IDR.200K </span>
                    Raised</p>
                    <p className='text-[#213430]'>
                    <span className='font-semibold text-[#213430]'>IDR.20.000K </span> 
                        Goal</p>
                    </div>
                </div>
                </div>
                <button className='uppercase w-full flex flex-row items-center justify-center rounded-md bg-transparent gap-3 px-5 py-2 border border-[#FF6002] text-[#FF6002]'>
                <p className='font-semibold'>Order Ticket Now</p>
                <svg xmlns="http://www.w3.org/2000/svg" className='fill-[#FF6002]' height="1em" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
                </button>
                </article>
                <div className='w-[25rem] bg-[#FF6002] h-96 absolute -right-3 -bottom-5 rounded-lg md:w-[35rem] md:-right-7 md:-bottom-7'></div>
            </aside>
            </div>
            {/* <div className='grid grid-cols-1 gap-1.5 place-content-center w-full h-max bg-[#FF6002] absolute bottom-0 z-10 px-7 md:px-14 md:py-1 md:grid-cols-3 md:h-8 md:gap-0'>
             <div id="copyright" className=''>
             <p className='font-poppins font-semibold'>Pijar Music © 2023 Jakarta Inc. All Rights Reserved.</p>
             </div>
             <div id='sosmed' className='place-self-center flex flex-row items-center gap-5'>
             <svg width="10" height="25" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M6.54128 6.75L6.90427 4.57828H4.63467V3.16898C4.63467 2.57484 4.95172 1.9957 5.9682 1.9957H7V0.146719C7 0.146719 6.06367 0 5.16844 0C3.29936 0 2.07764 1.04016 2.07764 2.92313V4.57828H0V6.75H2.07764V12H4.63467V6.75H6.54128Z" fill="white"/>
             </svg>
             <svg width="20" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M13.7075 1.4082C13.5464 0.853898 13.072 0.417352 12.4697 0.269203C11.3779 0 7 0 7 0C7 0 2.6221 0 1.53029 0.269203C0.927952 0.417375 0.453555 0.853898 0.292544 1.4082C0 2.41289 0 4.50909 0 4.50909C0 4.50909 0 6.6053 0.292544 7.60999C0.453555 8.16429 0.927952 8.58265 1.53029 8.7308C2.6221 9 7 9 7 9C7 9 11.3779 9 12.4697 8.7308C13.072 8.58265 13.5464 8.16429 13.7075 7.60999C14 6.6053 14 4.50909 14 4.50909C14 4.50909 14 2.41289 13.7075 1.4082ZM5.56817 6.41229V2.6059L9.22725 4.50914L5.56817 6.41229Z" fill="white"/>
             </svg>
             <svg width="20" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M13.4582 2.99061C13.4677 3.12186 13.4677 3.25313 13.4677 3.38437C13.4677 7.38748 10.3744 12 4.72083 12C2.97906 12 1.36105 11.5031 0 10.6406C0.247472 10.6687 0.485393 10.6781 0.742386 10.6781C2.17955 10.6781 3.50254 10.2 4.55902 9.38439C3.20749 9.35625 2.07487 8.48438 1.68464 7.28437C1.87501 7.31248 2.06535 7.33124 2.26524 7.33124C2.54125 7.33124 2.81729 7.29372 3.07425 7.22813C1.66562 6.94686 0.609114 5.72812 0.609114 4.25624V4.21876C1.01836 4.44376 1.49429 4.58438 1.9987 4.60311C1.17065 4.05935 0.628157 3.13124 0.628157 2.08123C0.628157 1.51874 0.780413 1.00311 1.04693 0.553111C2.56026 2.39061 4.83503 3.59059 7.38577 3.72186C7.33819 3.49686 7.30963 3.26251 7.30963 3.02813C7.30963 1.35936 8.6802 0 10.3839 0C11.269 0 12.0685 0.365624 12.6301 0.95625C13.3249 0.825006 13.9911 0.571868 14.5812 0.225002C14.3528 0.928143 13.8674 1.51877 13.2297 1.89374C13.8484 1.82815 14.448 1.65936 15 1.42501C14.5813 2.02499 14.0578 2.55934 13.4582 2.99061Z" fill="white"/>
             </svg>
             <svg width="20" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M6.50145 2.92335C4.65694 2.92335 3.16916 4.297 3.16916 6C3.16916 7.703 4.65694 9.07665 6.50145 9.07665C8.34596 9.07665 9.83374 7.703 9.83374 6C9.83374 4.297 8.34596 2.92335 6.50145 2.92335ZM6.50145 8.00022C5.30948 8.00022 4.33502 7.1032 4.33502 6C4.33502 4.8968 5.30658 3.99978 6.50145 3.99978C7.69632 3.99978 8.66788 4.8968 8.66788 6C8.66788 7.1032 7.69342 8.00022 6.50145 8.00022ZM10.7473 2.7975C10.7473 3.19647 10.3993 3.51512 9.97005 3.51512C9.53793 3.51512 9.19281 3.1938 9.19281 2.7975C9.19281 2.40121 9.54083 2.07988 9.97005 2.07988C10.3993 2.07988 10.7473 2.40121 10.7473 2.7975ZM12.9543 3.52583C12.905 2.56454 12.6672 1.71304 11.9045 1.01149C11.1446 0.309941 10.2224 0.0903715 9.1812 0.0421734C8.10814 -0.0140578 4.89186 -0.0140578 3.8188 0.0421734C2.78054 0.0876939 1.85828 0.307263 1.09554 1.00881C0.332794 1.71036 0.0978806 2.56187 0.0456776 3.52315C-0.0152259 4.51389 -0.0152259 7.48343 0.0456776 8.47417C0.0949805 9.43546 0.332794 10.287 1.09554 10.9885C1.85828 11.6901 2.77764 11.9096 3.8188 11.9578C4.89186 12.0141 8.10814 12.0141 9.1812 11.9578C10.2224 11.9123 11.1446 11.6927 11.9045 10.9885C12.6643 10.287 12.9021 9.43546 12.9543 8.47417C13.0152 7.48343 13.0152 4.51657 12.9543 3.52583ZM11.568 9.53721C11.3418 10.062 10.9039 10.4664 10.3326 10.6779C9.47702 10.9912 7.4469 10.9189 6.50145 10.9189C5.556 10.9189 3.52298 10.9885 2.67033 10.6779C2.1019 10.469 1.66397 10.0647 1.43486 9.53721C1.09554 8.74729 1.17384 6.87292 1.17384 6C1.17384 5.12708 1.09844 3.25003 1.43486 2.46279C1.66107 1.93797 2.099 1.53364 2.67033 1.3221C3.52588 1.00881 5.556 1.08111 6.50145 1.08111C7.4469 1.08111 9.47992 1.01149 10.3326 1.3221C10.901 1.53096 11.3389 1.93529 11.568 2.46279C11.9074 3.25271 11.8291 5.12708 11.8291 6C11.8291 6.87292 11.9074 8.74997 11.568 9.53721Z" fill="white"/>
             </svg>
             </div>
             <div id="contact" className='place-self-end flex flex-row items-center gap-10'>
                <div id="telephone" className='flex flex-row items-center gap-2'>
                <svg width="25" height="20" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.9766 11.8378L14.2954 14.7909C14.1997 15.2084 13.8328 15.5005 13.403 15.5005C6.01172 15.4999 0 9.48821 0 2.09661C0 1.66712 0.292061 1.29973 0.70957 1.20452L3.6627 0.523366C4.09277 0.423698 4.53223 0.64694 4.71094 1.05423L6.07383 4.23294C6.23314 4.60735 6.12568 5.04358 5.81074 5.30081L4.2334 6.56731C5.22891 8.59524 6.87773 10.2441 8.90625 11.2402L10.1977 9.66399C10.4522 9.34817 10.8917 9.23889 11.2661 9.40105L14.4448 10.7636C14.8271 10.9648 15.0762 11.4101 14.9766 11.8378Z" fill="white"/>
                </svg>
                <p>+62-897-0557- 659</p>
                </div>
                <div id="messages" className='flex flex-row items-center gap-2'>
                <svg width="25" height="20" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.00597 6.8525C7.54191 6.8525 7.07785 6.73035 6.68201 6.48281L0.819092 2.82438V7.93387C0.819092 8.53088 1.4224 9.01525 2.16663 9.01525H13.8453C14.5895 9.01525 15.1928 8.53111 15.1928 7.93387V2.82438L9.33105 6.48528C8.93521 6.73085 8.46919 6.8525 8.00597 6.8525ZM1.27641 2.19583L7.23366 5.91531C7.68818 6.19917 8.32489 6.19917 8.7794 5.91531L14.7367 2.19583C14.9991 2.01561 15.1928 1.7385 15.1928 1.44563C15.1928 0.848398 14.5893 0.364258 13.8453 0.364258H2.16663C1.4224 0.364258 0.819092 0.848398 0.819092 1.44563C0.819092 1.7385 0.987815 2.01561 1.27641 2.19583Z" fill="white"/>
                </svg> 
                <p>+62-897-0557- 659</p>
                </div>
             </div>
            </div> */}
            <div id='gradient' className='bg-gradient-to-t from-white to-transparent h-40 opacity-25 absolute bottom-0 w-full md:h-96'></div>
        </header>
        </>
    )
}