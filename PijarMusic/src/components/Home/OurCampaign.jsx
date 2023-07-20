import './OurCampaign.css'
import RichBrian from '../assets/RichBrian.jpeg'
// import Swipper and modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
export default function OurCampaign(){  
    return(
        <>
        <article className='bg-[#FAFAFA] py-16 flex flex-col justify-center px-7 md:px-28 md:py-[5rem] md:gap-0'>
        <article className='flex flex-col gap-5'>
        <h1 className='text-[#FF6002] font-semibold font-outfit text-2xl md:text-4xl'>Our Campaign</h1>
        <h2 className='text-black font-outfit font-semibold text-3xl md:text-6xl'>Charity To Help To Those 
        <br />
        Who Need It</h2>
        </article>
        <article>
        <Swiper
        // install Swiper modules
        autoplay = {{
            delay: 10000,
            disableOnInteraction: false,
        }}
        effect="fade"
        freeMode={true}
        loop={true}
        loopedSlides={4}
        modules={[Navigation, Pagination, Scrollbar, A11y, FreeMode, Autoplay]}
        breakpoints={{
            360:{
                slidesPerView: 1,
                spaceBetween: 20,
                slidesPerGroup: 1,
            },
            768:{
                slidesPerView: 3,
                spaceBetween: 20,
                slidesPerGroup: 2,
            }
        }}
        // spaceBetween={100}
        // slidesPerView={3}
        // slidesPerGroup={2}
        // navigation
        pagination={
            { clickable: true }
        }
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        className='text-black bg-transparent rounded-lg w-full pb-14 relative z-50 mt-10 flex flex-row items-start md:mt-20'
        >
        
        <SwiperSlide className='flex flex-col justify-center items-center'>
        <div className='bg-white w-full h-full shadow-md rounded-lg p-5 flex flex-col gap-2.5'>
            <div className='w-full h-52 mx-auto rounded-lg overflow-hidden'>
            <img src={RichBrian} alt="" className='w-full h-full object-cover object-top'/>
            </div>
            <div>
            <p className='text-black font-outfit font-semibold text-2xl'>Rich Brian Concert Charity Fundraising
            <br />
            For rising from Natural Disasters</p>
            </div>
            <div id="stats" className='bg-transparent w-full py-10 rounded-md'>
                <div id='statistik' className='bg-[#E0E0E0] w-full h-3 rounded-full'>
                    <div id="parameter" className='bg-[#FF6002] relative w-[29%] h-full rounded-full'>
                    <p className='absolute -top-5 right-0 text-sm text-[#FF6002] font-semibold'>29%</p>
                    </div>
                    <div className='flex flex-row justify-between text-sm pt-2'>
                    <p className='text-[#213430] text-lg'>
                    <span className='font-semibold text-[#213430]'>IDR.200K </span></p>
                    <p className='text-[#213430] text-lg'>
                    <span className='font-semibold text-[#213430]'>IDR.20.000K </span></p>
                    </div>
                </div>
            </div>
            <div id="btn" className='flex flex-row gap-10 font-outfit font-semibold'>
                <button className='bg-[#FF6002] text-white px-6 py-4 rounded-lg'>Order now</button>
                <button className='text-[#FF6002]'>See detail</button>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide className='flex flex-col justify-center items-center'>
        <div className='bg-white w-full h-full shadow-md rounded-lg p-5 flex flex-col gap-2.5'>
            <div className='w-full h-52 mx-auto rounded-lg overflow-hidden'>
            <img src={RichBrian} alt="" className='w-full h-full object-cover object-top'/>
            </div>
            <div>
            <p className='text-black font-outfit font-semibold text-2xl'>Rich Brian Concert Charity Fundraising
            <br />
            For rising from Natural Disasters</p>
            </div>
            <div id="stats" className='bg-transparent w-full py-10 rounded-md'>
                <div id='statistik' className='bg-[#E0E0E0] w-full h-3 rounded-full'>
                    <div id="parameter" className='bg-[#FF6002] relative w-[29%] h-full rounded-full'>
                    <p className='absolute -top-5 right-0 text-sm text-[#FF6002] font-semibold'>29%</p>
                    </div>
                    <div className='flex flex-row justify-between text-sm pt-2'>
                    <p className='text-[#213430] text-lg'>
                    <span className='font-semibold text-[#213430]'>IDR.200K </span></p>
                    <p className='text-[#213430] text-lg'>
                    <span className='font-semibold text-[#213430]'>IDR.20.000K </span></p>
                    </div>
                </div>
            </div>
            <div id="btn" className='flex flex-row gap-10 font-outfit font-semibold'>
                <button className='bg-[#FF6002] text-white px-6 py-4 rounded-lg'>Order now</button>
                <button className='text-[#FF6002]'>See detail</button>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide className='flex flex-col justify-center items-center'>
        <div className='bg-white w-full h-full shadow-md rounded-lg p-5 flex flex-col gap-2.5'>
            <div className='w-full h-52 mx-auto rounded-lg overflow-hidden'>
            <img src={RichBrian} alt="" className='w-full h-full object-cover object-top'/>
            </div>
            <div>
            <p className='text-black font-outfit font-semibold text-2xl'>Rich Brian Concert Charity Fundraising
            <br />
            For rising from Natural Disasters</p>
            </div>
            <div id="stats" className='bg-transparent w-full py-10 rounded-md'>
                <div id='statistik' className='bg-[#E0E0E0] w-full h-3 rounded-full'>
                    <div id="parameter" className='bg-[#FF6002] relative w-[29%] h-full rounded-full'>
                    <p className='absolute -top-5 right-0 text-sm text-[#FF6002] font-semibold'>29%</p>
                    </div>
                    <div className='flex flex-row justify-between text-sm pt-2'>
                    <p className='text-[#213430] text-lg'>
                    <span className='font-semibold text-[#213430]'>IDR.200K </span></p>
                    <p className='text-[#213430] text-lg'>
                    <span className='font-semibold text-[#213430]'>IDR.20.000K </span></p>
                    </div>
                </div>
            </div>
            <div id="btn" className='flex flex-row gap-10 font-outfit font-semibold'>
                <button className='bg-[#FF6002] text-white px-6 py-4 rounded-lg'>Order now</button>
                <button className='text-[#FF6002]'>See detail</button>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide className='flex flex-col justify-center items-center'>
        <div className='bg-white w-full h-full shadow-md rounded-lg p-5 flex flex-col gap-2.5'>
            <div className='w-full h-52 mx-auto rounded-lg overflow-hidden'>
            <img src={RichBrian} alt="" className='w-full h-full object-cover object-top'/>
            </div>
            <div>
            <p className='text-black font-outfit font-semibold text-2xl'>Rich Brian Concert Charity Fundraising
            <br />
            For rising from Natural Disasters</p>
            </div>
            <div id="stats" className='bg-transparent w-full py-10 rounded-md'>
                <div id='statistik' className='bg-[#E0E0E0] w-full h-3 rounded-full'>
                    <div id="parameter" className='bg-[#FF6002] relative w-[29%] h-full rounded-full'>
                    <p className='absolute -top-5 right-0 text-sm text-[#FF6002] font-semibold'>29%</p>
                    </div>
                    <div className='flex flex-row justify-between text-sm pt-2'>
                    <p className='text-[#213430] text-lg'>
                    <span className='font-semibold text-[#213430]'>IDR.200K </span></p>
                    <p className='text-[#213430] text-lg'>
                    <span className='font-semibold text-[#213430]'>IDR.20.000K </span></p>
                    </div>
                </div>
            </div>
            <div id="btn" className='flex flex-row gap-10 font-outfit font-semibold'>
                <button className='bg-[#FF6002] text-white px-6 py-4 rounded-lg'>Order now</button>
                <button className='text-[#FF6002]'>See detail</button>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide className='flex flex-col justify-center items-center'>
        <div className='bg-white w-full h-full shadow-md rounded-lg p-5 flex flex-col gap-2.5'>
            <div className='w-full h-52 mx-auto rounded-lg overflow-hidden'>
            <img src={RichBrian} alt="" className='w-full h-full object-cover object-top'/>
            </div>
            <div>
            <p className='text-black font-outfit font-semibold text-2xl'>Rich Brian Concert Charity Fundraising
            <br />
            For rising from Natural Disasters</p>
            </div>
            <div id="stats" className='bg-transparent w-full py-10 rounded-md'>
                <div id='statistik' className='bg-[#E0E0E0] w-full h-3 rounded-full'>
                    <div id="parameter" className='bg-[#FF6002] relative w-[29%] h-full rounded-full'>
                    <p className='absolute -top-5 right-0 text-sm text-[#FF6002] font-semibold'>29%</p>
                    </div>
                    <div className='flex flex-row justify-between text-sm pt-2'>
                    <p className='text-[#213430] text-lg'>
                    <span className='font-semibold text-[#213430]'>IDR.200K </span></p>
                    <p className='text-[#213430] text-lg'>
                    <span className='font-semibold text-[#213430]'>IDR.20.000K </span></p>
                    </div>
                </div>
            </div>
            <div id="btn" className='flex flex-row gap-10 font-outfit font-semibold'>
                <button className='bg-[#FF6002] text-white px-6 py-4 rounded-lg'>Order now</button>
                <button className='text-[#FF6002]'>See detail</button>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide className='flex flex-col justify-center items-center'>
        <div className='bg-white w-full h-full shadow-md rounded-lg p-5 flex flex-col gap-2.5'>
            <div className='w-full h-52 mx-auto rounded-lg overflow-hidden'>
            <img src={RichBrian} alt="" className='w-full h-full object-cover object-top'/>
            </div>
            <div>
            <p className='text-black font-outfit font-semibold text-2xl'>Rich Brian Concert Charity Fundraising
            <br />
            For rising from Natural Disasters</p>
            </div>
            <div id="stats" className='bg-transparent w-full py-10 rounded-md'>
                <div id='statistik' className='bg-[#E0E0E0] w-full h-3 rounded-full'>
                    <div id="parameter" className='bg-[#FF6002] relative w-[29%] h-full rounded-full'>
                    <p className='absolute -top-5 right-0 text-sm text-[#FF6002] font-semibold'>29%</p>
                    </div>
                    <div className='flex flex-row justify-between text-sm pt-2'>
                    <p className='text-[#213430] text-lg'>
                    <span className='font-semibold text-[#213430]'>IDR.200K </span></p>
                    <p className='text-[#213430] text-lg'>
                    <span className='font-semibold text-[#213430]'>IDR.20.000K </span></p>
                    </div>
                </div>
            </div>
            <div id="btn" className='flex flex-row gap-10 font-outfit font-semibold'>
                <button className='bg-[#FF6002] text-white px-6 py-4 rounded-lg'>Order now</button>
                <button className='text-[#FF6002]'>See detail</button>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide className='flex flex-col justify-center items-center'>
        <div className='bg-white w-full h-full shadow-md rounded-lg p-5 flex flex-col gap-2.5'>
            <div className='w-full h-52 mx-auto rounded-lg overflow-hidden'>
            <img src={RichBrian} alt="" className='w-full h-full object-cover object-top'/>
            </div>
            <div>
            <p className='text-black font-outfit font-semibold text-2xl'>Rich Brian Concert Charity Fundraising
            <br />
            For rising from Natural Disasters</p>
            </div>
            <div id="stats" className='bg-transparent w-full py-10 rounded-md'>
                <div id='statistik' className='bg-[#E0E0E0] w-full h-3 rounded-full'>
                    <div id="parameter" className='bg-[#FF6002] relative w-[29%] h-full rounded-full'>
                    <p className='absolute -top-5 right-0 text-sm text-[#FF6002] font-semibold'>29%</p>
                    </div>
                    <div className='flex flex-row justify-between text-sm pt-2'>
                    <p className='text-[#213430] text-lg'>
                    <span className='font-semibold text-[#213430]'>IDR.200K </span></p>
                    <p className='text-[#213430] text-lg'>
                    <span className='font-semibold text-[#213430]'>IDR.20.000K </span></p>
                    </div>
                </div>
            </div>
            <div id="btn" className='flex flex-row gap-10 font-outfit font-semibold'>
                <button className='bg-[#FF6002] text-white px-6 py-4 rounded-lg'>Order now</button>
                <button className='text-[#FF6002]'>See detail</button>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide className='flex flex-col justify-center items-center'>
        <div className='bg-white w-full h-full shadow-md rounded-lg p-5 flex flex-col gap-2.5'>
            <div className='w-full h-52 mx-auto rounded-lg overflow-hidden'>
            <img src={RichBrian} alt="" className='w-full h-full object-cover object-top'/>
            </div>
            <div>
            <p className='text-black font-outfit font-semibold text-2xl'>Rich Brian Concert Charity Fundraising
            <br />
            For rising from Natural Disasters</p>
            </div>
            <div id="stats" className='bg-transparent w-full py-10 rounded-md'>
                <div id='statistik' className='bg-[#E0E0E0] w-full h-3 rounded-full'>
                    <div id="parameter" className='bg-[#FF6002] relative w-[29%] h-full rounded-full'>
                    <p className='absolute -top-5 right-0 text-sm text-[#FF6002] font-semibold'>29%</p>
                    </div>
                    <div className='flex flex-row justify-between text-sm pt-2'>
                    <p className='text-[#213430] text-lg'>
                    <span className='font-semibold text-[#213430]'>IDR.200K </span></p>
                    <p className='text-[#213430] text-lg'>
                    <span className='font-semibold text-[#213430]'>IDR.20.000K </span></p>
                    </div>
                </div>
            </div>
            <div id="btn" className='flex flex-row gap-10 font-outfit font-semibold'>
                <button className='bg-[#FF6002] text-white px-6 py-4 rounded-lg'>Order now</button>
                <button className='text-[#FF6002]'>See detail</button>
            </div>
        </div>
        </SwiperSlide>
        </Swiper>
        </article>
        </article>
        </>
    )
}