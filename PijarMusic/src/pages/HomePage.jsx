import './HomePage.css'
import Header from '../components/Home/Header'
import WhoWeAre from '../components/Home/WhoWeAre'
import OurCampaign from '../components/Home/OurCampaign'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export default function HomePage(){
    return(
        <>
        <div className='container bg-white mx-auto max-w-full flex flex-col h-max'>
        <Header/>
        <main className='h-max py-20 gap-40 flex flex-col px-7 relative md:flex-row md:items-center md:h-max md:gap-0 md:justify-between md:px-28 md:py-[11.5rem]'>
        <WhoWeAre/>
        <OurCampaign/>
        </main>
        <Swiper
        // install Swiper modules
        loop={true}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={2}
        navigation
        pagination={
            { clickable: true }
        }
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        className='text-black w-full relative z-50 h-96'
        >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
        </div>
        </>
    )
}