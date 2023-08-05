import './WhatPeopleSay.css'
import { Swiper,SwiperSlide  } from 'swiper/react';
import { EffectFade,Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { WhatsPeopleSayGetPosts } from '../../../api/api';
import { CTAGetPosts } from '../../../api/api';
import { useState,useEffect } from 'react';

export default function WhatPeopleSay(){

    const [DataWhatPeopleSay,setDataWhatPeopleSay] = useState([]);
    const fetchData = async () => {
        try{
            const data = await WhatsPeopleSayGetPosts();
            setDataWhatPeopleSay(data);
        } catch (error) {
            console.error('Error fetching data : ', error);
        }
    }
    useEffect(()=>{
        fetchData();
    },[]);


    const [DataCTA, setDataCTA] = useState([]);
    const fetchDataCTA = async () => {
        try {
            const data = await CTAGetPosts();
            setDataCTA(data);
        } catch (error) {
            console.error('Error fecthing data : ', error);
        }
    }
    useEffect(()=>{
        fetchDataCTA();
    },[])
    return(
        <>
         <article className='relative bg-[#FAFAFA]'>
         <Swiper
         modules={[EffectFade, Autoplay]}
         loop = {true}
         autoplay = {
            { delay: 8000 }
        }
         effect="fade"
         className='flex flex-row h-[80rem] md:h-[110vh] relative z-20'
         >
         {DataWhatPeopleSay.length > 0 ? (
         (DataWhatPeopleSay.map(data => (
            <SwiperSlide key={data.id} className='flex  h-full relative flex-col items-center'>
                <div className='h-full flex relative flex-col md:w-[72rem] md:flex md:flex-row md:pt-36 md:justify-between md:my-auto'>
                <div id='banner' className='scale-90 flex flex-col items-center h-[40rem] relative md:scale-100'>
                <div className='bg-[#FF6002] w-[28rem] flex flex-col bottom-0 rounded-t-[5rem] items-center h-[30rem] absolute'></div>
                <img src={data.image} alt="" className='w-96 relative h-full grayscale rounded-tl-2xl rounded-tr-2xl  object-cover'/>
                </div>
                <div id='desc' className='flex flex-col gap-5 mb-5 md:gap-14 md:mb-0'>
                <div id='title' className='text-black flex text-[2.5rem] font-outfit font-bold flex-col md:gap-[1.5rem] md:text-6xl'>
                <h1 className='text-[#FF6002] text-xl md:text-3xl'>Testimonials</h1>
                <h1>What People Say about</h1>
                <h2 className='text-[#FF6002] '>Our Organization</h2>
                </div>
                <div id="desc" className='w-[28rem] h-72 font-outfit flex flex-col gap-5 border-2 border-[#FF6002]/20 bg-[#FAFAFA] py-6 text-left px-6 rounded-xl shadow-sm md:w-[40rem] md:h-max'>
                <p className='text-black text-xl'>"{data.desc}"</p>
                <div id='name' className='flex flex-col text-left'>
                <p className='text-black font-semibold text-lg'>{data.name}</p>
                <p className='text-black'>{data.profession}</p>
                </div>
                </div>
                </div>
                </div>
            </SwiperSlide>
         )))
         ):(<div className='text-black'><p>No more Tetimonal happens</p></div>)}
         </Swiper>
         <div id='donateStatistic' className='w-full flex flex-col items-center relative z-20'>
            <div id="donateNow" className=' w-[28rem] md:w-[70%] md:h-64 overflow-hidden border border-black border-opacity-10 shadow-md rounded-xl absolute -top-[5rem] z-10 md:-top-[7.5rem]'>
            <div id='donate' className='w-full h-full relative bg-white'>
            <div id='content' className='w-full h-full relative z-10 flex flex-col items-center py-5 md:flex-row md:items-center md:justify-between md:px-10'>
            <div id='title' className='flex flex-col py-5 gap-3 md:gap-5'>
            <h1 className='text-[#FF6002] font-outfit text-xl font-bold md:text-2xl'>Act Now for a Better World</h1>
            <h2 className='text-[#1D1D1D] font-outfit text-2xl font-bold md:text-4xl'>Solutions to Help People in Need 
            <br />
            and Build a Better Habit</h2>
            <div className='bg-[#FF6002] w-20 h-0.5 rounded-full'></div>
            </div>
            <div id='btn' className=''>
            <button className='bg-[#FF6002] flex flex-row items-center rounded-lg font-outfit gap-3 px-5 py-2 md:px-8 md:py-5'><p className='text-white font-bold md:text-xl'>Donate Now</p><svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 4.96575V4.7845C0 2.60012 1.57875 0.736998 3.73125 0.378248C5.12813 0.14106 6.60625 0.605435 7.625 1.62575L8 2.00012L8.34688 1.62575C9.39375 0.605435 10.8438 0.14106 12.2688 0.378248C14.4219 0.736998 16 2.60012 16 4.7845V4.96575C16 6.26262 15.4625 7.50325 14.5125 8.38762L8.86563 13.6595C8.63125 13.8782 8.32187 14.0001 8 14.0001C7.67812 14.0001 7.36875 13.8782 7.13438 13.6595L1.48719 8.38762C0.538437 7.50325 9.375e-06 6.26262 9.375e-06 4.96575H0Z" fill="white"/>
            </svg>
            </button>
            </div>
            </div>
            <svg  className='absolute top-[0.1rem]'  viewBox="0 0 1290 320" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-328.393 361.962C-252.515 336.061 -174.016 309.261 -75.4016 309.261C23.2125 309.261 101.679 336.042 177.556 361.962L180.079 359.497C103.604 333.404 24.5402 306.413 -75.4348 306.413C-175.41 306.413 -254.474 333.404 -330.949 359.497L-328.426 361.962H-328.393Z" fill="#F5F5F5"/>
            <path d="M688.585 361.963C764.495 336.062 842.962 309.262 941.543 309.262C1040.12 309.262 1118.62 336.043 1194.5 361.944L1197.02 359.478C1120.55 333.385 1041.48 306.395 941.51 306.395C841.535 306.395 762.471 333.385 686.029 359.478L688.551 361.944L688.585 361.963Z" fill="#F5F5F5"/>
            <path d="M-386.313 362.001C-366.763 355.846 -347.279 349.194 -328.393 342.752C-252.482 316.85 -174.015 290.051 -75.4012 290.051C23.2129 290.051 101.679 316.831 177.557 342.752C196.41 349.194 215.927 355.846 235.477 362.001L237.867 359.478C218.417 353.342 198.933 346.689 180.079 340.267C103.605 314.155 24.5406 287.164 -75.4344 287.164C-175.409 287.164 -254.473 314.155 -330.948 340.267C-349.768 346.689 -369.252 353.342 -388.703 359.478L-386.313 362.001Z" fill="#F5F5F5"/>
            <path d="M630.664 362.001C650.214 355.846 669.731 349.194 688.584 342.733C764.461 316.831 842.961 290.031 941.542 290.031C1040.12 290.031 1118.62 316.812 1194.53 342.733C1213.42 349.174 1232.9 355.827 1252.45 362.001L1254.84 359.478C1235.36 353.342 1215.91 346.689 1197.06 340.267C1120.58 314.155 1041.52 287.164 941.542 287.164C841.567 287.164 762.503 314.155 686.028 340.248C667.208 346.67 647.724 353.322 628.241 359.459L630.63 361.982L630.664 362.001Z" fill="#F5F5F5"/>
            <path d="M-456.747 362.077C-411.639 351.927 -369.319 337.476 -328.393 323.522C-252.482 297.62 -174.016 270.821 -75.4017 270.821C23.2124 270.821 101.679 297.601 177.556 323.503C218.482 337.476 260.836 351.927 305.911 362.077L307.736 359.401C263.026 349.347 220.872 334.953 180.079 321.037C103.604 294.925 24.5401 267.953 -75.435 267.953C-175.41 267.953 -254.474 294.944 -330.949 321.056C-371.709 334.972 -413.863 349.347 -458.573 359.42L-456.747 362.097V362.077Z" fill="#F5F5F5"/>
            <path d="M560.197 362.078C605.305 351.927 647.625 337.476 688.551 323.503C764.429 297.601 842.928 270.802 941.542 270.802C1040.16 270.802 1118.62 297.582 1194.5 323.484C1235.16 337.361 1277.22 351.717 1321.99 361.848L1323.82 359.172C1279.44 349.117 1237.55 334.838 1197.06 320.999C1120.58 294.906 1041.52 267.915 941.542 267.915C841.567 267.915 762.503 294.906 686.028 320.999C645.268 334.915 603.114 349.309 558.404 359.363L560.23 362.039L560.197 362.078Z" fill="#F5F5F5"/>
            <path d="M433.07 357.356C533.045 357.356 612.109 330.365 688.584 304.272C764.462 278.371 842.961 251.571 941.542 251.571C1040.12 251.571 1118.62 278.352 1194.5 304.253C1235.16 318.131 1277.22 332.487 1321.99 342.618L1323.82 339.941C1279.44 329.887 1237.55 315.608 1197.06 301.768C1120.58 275.676 1041.52 248.685 941.542 248.685C841.567 248.685 762.503 275.676 686.028 301.768C610.151 327.669 531.651 354.469 433.07 354.469C334.489 354.469 255.99 327.689 180.112 301.768C103.637 275.676 24.5735 248.685 -75.4016 248.685V251.552C23.2125 251.552 101.679 278.333 177.556 304.253C254.031 330.346 333.095 357.336 433.07 357.336V357.356Z" fill="#F5F5F5"/>
            <path d="M433.07 338.126C533.045 338.126 612.109 311.135 688.584 285.023C764.462 259.122 842.961 232.322 941.542 232.322C1040.12 232.322 1118.62 259.103 1194.5 285.023C1235.16 298.901 1277.22 313.257 1321.99 323.388L1323.82 320.712C1279.44 310.657 1237.55 296.359 1197.06 282.538C1120.58 256.427 1041.52 229.436 941.542 229.436C841.567 229.436 762.503 256.427 686.028 282.538C610.151 308.44 531.651 335.239 433.07 335.239C334.489 335.239 255.99 308.459 180.112 282.538C103.637 256.427 24.5735 229.436 -75.4016 229.436V232.303C23.2125 232.303 101.679 259.084 177.556 285.004C254.031 311.116 333.095 338.107 433.07 338.107V338.126Z" fill="#F5F5F5"/>
            <path d="M433.07 318.896C533.045 318.896 612.109 291.905 688.584 265.812C764.462 239.911 842.961 213.111 941.542 213.111C1040.12 213.111 1118.62 239.892 1194.5 265.793C1235.16 279.671 1277.22 294.027 1321.99 304.158L1323.82 301.482C1279.44 291.427 1237.55 277.148 1197.06 263.308C1120.58 237.216 1041.52 210.225 941.542 210.225C841.567 210.225 762.503 237.216 686.028 263.308C610.151 289.209 531.651 316.009 433.07 316.009C334.489 316.009 255.99 289.229 180.112 263.308C103.637 237.216 24.5735 210.225 -75.4016 210.225V213.092C23.2125 213.092 101.679 239.873 177.556 265.793C254.031 291.886 333.095 318.877 433.07 318.877V318.896Z" fill="#F5F5F5"/>
            <path d="M433.07 299.666C533.045 299.666 612.109 272.675 688.584 246.583C764.462 220.681 842.961 193.882 941.542 193.882C1040.12 193.882 1118.62 220.662 1194.5 246.564C1235.16 260.441 1277.22 274.797 1321.99 284.928L1323.82 282.252C1279.44 272.197 1237.55 257.918 1197.06 244.079C1120.58 217.986 1041.52 190.995 941.542 190.995C841.567 190.995 762.503 217.986 686.028 244.079C610.151 269.98 531.651 296.78 433.07 296.78C334.489 296.78 255.99 269.999 180.112 244.079C103.637 217.986 24.5735 190.995 -75.4016 190.995V193.862C23.2125 193.862 101.679 220.643 177.556 246.564C254.031 272.656 333.095 299.647 433.07 299.647V299.666Z" fill="#F5F5F5"/>
            <path d="M433.07 280.436C533.045 280.436 612.109 253.445 688.584 227.353C764.462 201.451 842.961 174.671 941.542 174.671C1040.12 174.671 1118.62 201.451 1194.5 227.353C1235.16 241.23 1277.22 255.586 1321.99 265.717L1323.82 263.041C1279.44 252.986 1237.55 238.707 1197.06 224.868C1120.58 198.775 1041.52 171.784 941.542 171.784C841.567 171.784 762.503 198.775 686.028 224.868C610.151 250.769 531.651 277.55 433.07 277.55C334.489 277.55 255.99 250.769 180.112 224.868C103.637 198.756 24.5735 171.784 -75.4016 171.784V174.651C23.2125 174.651 101.679 201.432 177.556 227.334C254.031 253.426 333.095 280.417 433.07 280.417V280.436Z" fill="#F5F5F5"/>
            <path d="M433.07 261.187C533.045 261.187 612.109 234.196 688.584 208.103C764.462 182.202 842.961 155.402 941.542 155.402C1040.12 155.402 1118.62 182.183 1194.5 208.084C1235.16 221.962 1277.22 236.318 1321.99 246.449L1323.82 243.773C1279.44 233.718 1237.55 219.439 1197.06 205.599C1120.58 179.507 1041.52 152.516 941.542 152.516C841.567 152.516 762.503 179.507 686.028 205.599C610.151 231.5 531.651 258.3 433.07 258.3C334.489 258.3 255.99 231.52 180.112 205.599C103.637 179.507 24.5735 152.516 -75.4016 152.516V155.383C23.2125 155.383 101.679 182.164 177.556 208.084C254.031 234.177 333.095 261.168 433.07 261.168V261.187Z" fill="#F5F5F5"/>
            <path d="M433.07 241.956C533.045 241.956 612.109 214.965 688.584 188.873C764.462 162.972 842.961 136.191 941.542 136.191C1040.12 136.191 1118.62 162.972 1194.5 188.873C1235.16 202.751 1277.22 217.106 1321.99 227.238L1323.82 224.561C1279.44 214.507 1237.55 200.227 1197.06 186.388C1120.58 160.295 1041.52 133.304 941.542 133.304C841.567 133.304 762.503 160.295 686.028 186.388C610.151 212.289 531.651 239.07 433.07 239.07C334.489 239.07 255.99 212.289 180.112 186.388C103.637 160.276 24.5735 133.304 -75.4016 133.304V136.172C23.2125 136.172 101.679 162.952 177.556 188.854C254.031 214.946 333.095 241.937 433.07 241.937V241.956Z" fill="#F5F5F5"/>
            <path d="M433.07 222.726C533.045 222.726 612.109 195.735 688.584 169.643C764.462 143.741 842.961 116.961 941.542 116.961C1040.12 116.961 1118.62 143.741 1194.5 169.643C1235.16 183.52 1277.22 197.876 1321.99 208.007L1323.82 205.331C1279.44 195.276 1237.55 180.997 1197.06 167.158C1120.58 141.065 1041.52 114.074 941.542 114.074C841.567 114.074 762.503 141.065 686.028 167.158C610.151 193.059 531.651 219.859 433.07 219.859C334.489 219.859 255.99 193.078 180.112 167.158C103.637 141.065 24.5735 114.074 -75.4016 114.074V116.942C23.2125 116.942 101.679 143.722 177.556 169.624C254.031 195.716 333.095 222.707 433.07 222.707V222.726Z" fill="#F5F5F5"/>
            <path d="M433.07 203.497C533.045 203.497 612.109 176.506 688.584 150.413C764.462 124.512 842.961 97.7311 941.542 97.7311C1040.12 97.7311 1118.62 124.512 1194.5 150.413C1235.16 164.291 1277.22 178.647 1321.99 188.778L1323.82 186.102C1279.44 176.047 1237.55 161.768 1197.06 147.928C1120.58 121.836 1041.52 94.8447 941.542 94.8447C841.567 94.8447 762.503 121.836 686.028 147.928C610.151 173.83 531.651 200.629 433.07 200.629C334.489 200.629 255.99 173.849 180.112 147.928C103.637 121.836 24.5735 94.8447 -75.4016 94.8447V97.712C23.2125 97.712 101.679 124.493 177.556 150.394C254.031 176.487 333.095 203.478 433.07 203.478V203.497Z" fill="#F5F5F5"/>
            </svg>
            </div>
            </div>
            <div id='statistik' className='w-full bg-[#FF6002] h-max flex justify-center items-center md:h-96'>
            <div className='w-[28rem] pt-60 pb-20 grid grid-cols-2 place-items-center gap-y-10 md:grid-cols-4 md:w-[70%] md:pt-44 md:pb-0'>
            {DataCTA.length > 0 ? ((DataCTA.map(data=>(
            <div key={data.id} className='flex flex-col items-center gap-2 text-center'>
             <h1 className='font-bold text-4xl font-outfit md:text-6xl'>{data.number}</h1>
             <div className='bg-white h-1 w-14 mx-auto rounded-full md:w-20'></div>
             <p className='font-outfit font-semibold'>{data.desc}</p>
            </div>
            )))) : ( <p>No Statistic over here</p> )}
            </div>
            </div>
         </div>
         <svg className='right-0 absolute bottom-96 z-10' width="205" height="367" viewBox="0 0 205 367" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.6603 142.046C9.59975 142.064 7.57096 141.537 5.77995 140.518C4.46629 139.78 3.31308 138.787 2.38781 137.598C1.46253 136.408 0.783765 135.046 0.391229 133.591C-0.00130671 132.136 -0.0997316 130.618 0.101714 129.124C0.30316 127.631 0.800431 126.192 1.56443 124.893C16.2882 100.318 61.0858 42.958 158.837 42.958C201.198 42.958 238.352 54.0849 269.212 76.0178C294.612 94.0178 308.847 114.393 315.628 124.206C316.489 125.443 317.092 126.84 317.405 128.313C317.717 129.787 317.731 131.309 317.447 132.788C317.162 134.268 316.584 135.675 315.747 136.928C314.91 138.181 313.831 139.254 312.574 140.083C310.003 141.782 306.872 142.414 303.844 141.843C300.816 141.273 298.129 139.546 296.353 137.028C284.081 119.38 246.66 65.6775 158.837 65.6775C73.1138 65.6775 34.3569 115.095 21.7333 136.288C20.719 138.057 19.2505 139.524 17.4797 140.536C15.7089 141.549 13.6999 142.07 11.6603 142.046Z" fill="#EAEAEA" fill-opacity="0.44"/>
            <path d="M208.087 366.568C207.112 366.58 206.14 366.469 205.193 366.24C134.285 348.675 107.808 277.79 106.731 274.842L106.563 274.193C105.983 272.146 91.7553 223.538 113.597 195.068C123.608 182.085 138.836 175.426 158.944 175.426C177.639 175.426 191.126 181.238 200.397 193.266C208.033 203.087 211.088 215.199 214.044 226.868C220.252 251.168 224.735 263.929 250.54 265.243C261.873 265.816 269.319 259.187 273.542 253.543C284.959 238.155 286.945 213.068 278.338 190.921C267.28 162.337 228.034 108.444 158.837 108.444C129.298 108.444 102.157 117.936 80.3917 135.776C62.3764 150.553 48.1032 171.417 41.2301 192.861C28.4843 232.786 45.2013 295.546 45.3616 296.118C45.7519 297.579 45.8459 299.103 45.6378 300.601C45.4298 302.098 44.924 303.539 44.1504 304.838C43.3767 306.137 42.3508 307.268 41.1331 308.164C39.9154 309.06 38.5306 309.703 37.0604 310.056C34.0902 310.845 30.9287 310.44 28.2535 308.927C25.5784 307.414 23.6024 304.913 22.749 301.961C21.9853 299.097 4.13044 232.16 18.8542 186.018C34.8915 136.02 84.3857 85.6172 158.86 85.6172C193.279 85.6172 225.797 97.3168 252.938 119.41C273.954 136.593 291.122 159.671 300.103 182.742C311.52 212.197 308.458 245.257 292.321 266.854C281.568 281.257 266.257 288.787 249.295 287.97C205.109 285.755 197.166 254.91 191.378 232.412C185.421 209.334 181.61 198.207 158.86 198.207C146.366 198.207 137.591 201.643 132.131 208.761C124.685 218.498 124.105 233.718 124.93 244.761C125.471 252.454 126.776 260.075 128.824 267.511C130.642 272.093 154.308 330.133 210.989 344.177C212.454 344.524 213.835 345.159 215.053 346.044C216.271 346.93 217.3 348.048 218.082 349.335C218.863 350.622 219.381 352.051 219.606 353.54C219.83 355.029 219.757 356.547 219.389 358.007C218.698 360.472 217.219 362.643 215.178 364.189C213.137 365.734 210.647 366.57 208.087 366.568Z" fill="#EAEAEA" fill-opacity="0.44"/>
            <path d="M117.071 361.328C115.482 361.332 113.908 361.015 112.444 360.397C110.979 359.779 109.655 358.872 108.548 357.731C80.1699 327.948 64.1173 294.644 58.0766 253V252.779C54.6858 225.21 59.6498 186.178 83.973 159.342C101.927 139.54 127.167 129.475 158.86 129.475C196.341 129.475 225.796 146.902 244.163 179.794C257.489 203.689 260.131 227.501 260.2 228.478C260.34 229.985 260.181 231.505 259.732 232.951C259.284 234.397 258.555 235.74 257.586 236.903C256.618 238.066 255.43 239.027 254.089 239.731C252.749 240.434 251.283 240.866 249.776 241.003C246.734 241.333 243.685 240.453 241.286 238.555C238.887 236.656 237.331 233.89 236.954 230.853C234.942 216.566 230.319 202.771 223.314 190.157C209.079 165.039 187.421 152.27 158.776 152.27C134.032 152.27 114.673 159.716 101.354 174.417C82.1554 195.609 78.444 228.257 81.0787 249.854C86.371 286.678 100.522 315.973 125.51 342.152C126.553 343.237 127.367 344.521 127.904 345.927C128.441 347.332 128.689 348.832 128.635 350.336C128.581 351.84 128.225 353.317 127.588 354.681C126.952 356.045 126.047 357.266 124.929 358.274C122.776 360.226 119.977 361.313 117.071 361.328Z" fill="#EAEAEA" fill-opacity="0.44"/>
            <path d="M247.806 328.521C222.986 328.521 201.886 321.648 185.001 307.985C151.078 280.653 147.275 236.138 147.107 234.259C146.868 231.176 147.864 228.123 149.875 225.774C151.887 223.424 154.749 221.97 157.833 221.731C160.916 221.492 163.969 222.488 166.318 224.5C168.668 226.511 170.122 229.374 170.361 232.457C170.445 233.114 173.836 269.526 199.984 290.497C215.456 302.853 236.137 307.756 261.621 304.892C264.667 304.523 267.735 305.374 270.155 307.26C272.574 309.147 274.149 311.914 274.535 314.958C274.701 316.461 274.567 317.983 274.14 319.434C273.712 320.885 273 322.237 272.044 323.41C271.089 324.583 269.909 325.554 268.575 326.266C267.24 326.978 265.777 327.418 264.271 327.558C258.806 328.196 253.308 328.517 247.806 328.521ZM267.417 25.0412C257.734 18.7409 223.399 0.00012207 158.837 0.00012207C91.0678 0.00012207 56.6486 20.7035 49.0347 25.9653C48.5319 26.274 48.0611 26.6321 47.6295 27.0345C47.584 27.0785 47.5247 27.1055 47.4615 27.1108C46.2457 28.1724 45.2701 29.4809 44.5998 30.9492C43.9296 32.4175 43.58 34.0118 43.5744 35.6259C43.5953 37.1389 43.9145 38.6329 44.5138 40.0223C45.1131 41.4117 45.9807 42.6691 47.0669 43.7226C48.153 44.7762 49.4363 45.605 50.8434 46.1616C52.2504 46.7183 53.7534 46.9918 55.2664 46.9665C57.6913 46.9649 60.0577 46.2214 62.0479 44.8359C62.3762 44.5915 91.9994 22.8266 158.86 22.8266C225.72 22.8266 255.504 44.5151 255.824 44.6755C257.858 46.1832 260.327 46.9875 262.858 46.9665C264.372 46.9898 265.876 46.7137 267.283 46.1543C268.69 45.5948 269.973 44.7629 271.058 43.7064C272.143 42.6498 273.009 41.3894 273.605 39.9975C274.202 38.6056 274.518 37.1096 274.535 35.5953C274.535 33.3271 273.858 31.1104 272.59 29.2299C271.322 27.3493 269.52 25.8907 267.417 25.0412Z" fill="#EAEAEA" fill-opacity="0.44"/>
         </svg>
         <svg className='left-0 rotate-180 absolute top-32 z-10' width="205" height="367" viewBox="0 0 205 367" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.6603 142.046C9.59975 142.064 7.57096 141.537 5.77995 140.518C4.46629 139.78 3.31308 138.787 2.38781 137.598C1.46253 136.408 0.783765 135.046 0.391229 133.591C-0.00130671 132.136 -0.0997316 130.618 0.101714 129.124C0.30316 127.631 0.800431 126.192 1.56443 124.893C16.2882 100.318 61.0858 42.958 158.837 42.958C201.198 42.958 238.352 54.0849 269.212 76.0178C294.612 94.0178 308.847 114.393 315.628 124.206C316.489 125.443 317.092 126.84 317.405 128.313C317.717 129.787 317.731 131.309 317.447 132.788C317.162 134.268 316.584 135.675 315.747 136.928C314.91 138.181 313.831 139.254 312.574 140.083C310.003 141.782 306.872 142.414 303.844 141.843C300.816 141.273 298.129 139.546 296.353 137.028C284.081 119.38 246.66 65.6775 158.837 65.6775C73.1138 65.6775 34.3569 115.095 21.7333 136.288C20.719 138.057 19.2505 139.524 17.4797 140.536C15.7089 141.549 13.6999 142.07 11.6603 142.046Z" fill="#EAEAEA" fill-opacity="0.44"/>
            <path d="M208.087 366.568C207.112 366.58 206.14 366.469 205.193 366.24C134.285 348.675 107.808 277.79 106.731 274.842L106.563 274.193C105.983 272.146 91.7553 223.538 113.597 195.068C123.608 182.085 138.836 175.426 158.944 175.426C177.639 175.426 191.126 181.238 200.397 193.266C208.033 203.087 211.088 215.199 214.044 226.868C220.252 251.168 224.735 263.929 250.54 265.243C261.873 265.816 269.319 259.187 273.542 253.543C284.959 238.155 286.945 213.068 278.338 190.921C267.28 162.337 228.034 108.444 158.837 108.444C129.298 108.444 102.157 117.936 80.3917 135.776C62.3764 150.553 48.1032 171.417 41.2301 192.861C28.4843 232.786 45.2013 295.546 45.3616 296.118C45.7519 297.579 45.8459 299.103 45.6378 300.601C45.4298 302.098 44.924 303.539 44.1504 304.838C43.3767 306.137 42.3508 307.268 41.1331 308.164C39.9154 309.06 38.5306 309.703 37.0604 310.056C34.0902 310.845 30.9287 310.44 28.2535 308.927C25.5784 307.414 23.6024 304.913 22.749 301.961C21.9853 299.097 4.13044 232.16 18.8542 186.018C34.8915 136.02 84.3857 85.6172 158.86 85.6172C193.279 85.6172 225.797 97.3168 252.938 119.41C273.954 136.593 291.122 159.671 300.103 182.742C311.52 212.197 308.458 245.257 292.321 266.854C281.568 281.257 266.257 288.787 249.295 287.97C205.109 285.755 197.166 254.91 191.378 232.412C185.421 209.334 181.61 198.207 158.86 198.207C146.366 198.207 137.591 201.643 132.131 208.761C124.685 218.498 124.105 233.718 124.93 244.761C125.471 252.454 126.776 260.075 128.824 267.511C130.642 272.093 154.308 330.133 210.989 344.177C212.454 344.524 213.835 345.159 215.053 346.044C216.271 346.93 217.3 348.048 218.082 349.335C218.863 350.622 219.381 352.051 219.606 353.54C219.83 355.029 219.757 356.547 219.389 358.007C218.698 360.472 217.219 362.643 215.178 364.189C213.137 365.734 210.647 366.57 208.087 366.568Z" fill="#EAEAEA" fill-opacity="0.44"/>
            <path d="M117.071 361.328C115.482 361.332 113.908 361.015 112.444 360.397C110.979 359.779 109.655 358.872 108.548 357.731C80.1699 327.948 64.1173 294.644 58.0766 253V252.779C54.6858 225.21 59.6498 186.178 83.973 159.342C101.927 139.54 127.167 129.475 158.86 129.475C196.341 129.475 225.796 146.902 244.163 179.794C257.489 203.689 260.131 227.501 260.2 228.478C260.34 229.985 260.181 231.505 259.732 232.951C259.284 234.397 258.555 235.74 257.586 236.903C256.618 238.066 255.43 239.027 254.089 239.731C252.749 240.434 251.283 240.866 249.776 241.003C246.734 241.333 243.685 240.453 241.286 238.555C238.887 236.656 237.331 233.89 236.954 230.853C234.942 216.566 230.319 202.771 223.314 190.157C209.079 165.039 187.421 152.27 158.776 152.27C134.032 152.27 114.673 159.716 101.354 174.417C82.1554 195.609 78.444 228.257 81.0787 249.854C86.371 286.678 100.522 315.973 125.51 342.152C126.553 343.237 127.367 344.521 127.904 345.927C128.441 347.332 128.689 348.832 128.635 350.336C128.581 351.84 128.225 353.317 127.588 354.681C126.952 356.045 126.047 357.266 124.929 358.274C122.776 360.226 119.977 361.313 117.071 361.328Z" fill="#EAEAEA" fill-opacity="0.44"/>
            <path d="M247.806 328.521C222.986 328.521 201.886 321.648 185.001 307.985C151.078 280.653 147.275 236.138 147.107 234.259C146.868 231.176 147.864 228.123 149.875 225.774C151.887 223.424 154.749 221.97 157.833 221.731C160.916 221.492 163.969 222.488 166.318 224.5C168.668 226.511 170.122 229.374 170.361 232.457C170.445 233.114 173.836 269.526 199.984 290.497C215.456 302.853 236.137 307.756 261.621 304.892C264.667 304.523 267.735 305.374 270.155 307.26C272.574 309.147 274.149 311.914 274.535 314.958C274.701 316.461 274.567 317.983 274.14 319.434C273.712 320.885 273 322.237 272.044 323.41C271.089 324.583 269.909 325.554 268.575 326.266C267.24 326.978 265.777 327.418 264.271 327.558C258.806 328.196 253.308 328.517 247.806 328.521ZM267.417 25.0412C257.734 18.7409 223.399 0.00012207 158.837 0.00012207C91.0678 0.00012207 56.6486 20.7035 49.0347 25.9653C48.5319 26.274 48.0611 26.6321 47.6295 27.0345C47.584 27.0785 47.5247 27.1055 47.4615 27.1108C46.2457 28.1724 45.2701 29.4809 44.5998 30.9492C43.9296 32.4175 43.58 34.0118 43.5744 35.6259C43.5953 37.1389 43.9145 38.6329 44.5138 40.0223C45.1131 41.4117 45.9807 42.6691 47.0669 43.7226C48.153 44.7762 49.4363 45.605 50.8434 46.1616C52.2504 46.7183 53.7534 46.9918 55.2664 46.9665C57.6913 46.9649 60.0577 46.2214 62.0479 44.8359C62.3762 44.5915 91.9994 22.8266 158.86 22.8266C225.72 22.8266 255.504 44.5151 255.824 44.6755C257.858 46.1832 260.327 46.9875 262.858 46.9665C264.372 46.9898 265.876 46.7137 267.283 46.1543C268.69 45.5948 269.973 44.7629 271.058 43.7064C272.143 42.6498 273.009 41.3894 273.605 39.9975C274.202 38.6056 274.518 37.1096 274.535 35.5953C274.535 33.3271 273.858 31.1104 272.59 29.2299C271.322 27.3493 269.52 25.8907 267.417 25.0412Z" fill="#EAEAEA" fill-opacity="0.44"/>
         </svg>
         </article>
        </>
    )
}