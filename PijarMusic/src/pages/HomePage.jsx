import './HomePage.css'
import Header from '../components/Home/Header'
import TopBar from '../components/Home/topBar'
import WhoWeAre from '../components/Home/WhoWeAre'
import OurCampaign from '../components/Home/OurCampaign'
import LastestArticles from '../components/Home/LastestArticles'
import WhatPeopleSay from '../components/Home/WhatPeopleSay'
import NeedHelp from '../components/Home/NeedHelp'
import Footer from '../components/Home/Footer'
import { Parallax,ParallaxLayer } from '@react-spring/parallax'
export default function HomePage(){
    return(
        <>
        <div id='bg' className='container mx-auto bg-cover bg-fixed bg-center max-w-full relative flex flex-col h-max'>
        <Header 
        TopBar={<TopBar/>}
        />
        <main className='flex flex-col h-full'>
        <article className='flex flex-col gap-10 bg-white'>
        <WhoWeAre/>
        <OurCampaign/>
        <LastestArticles/>
        <WhatPeopleSay/>
        </article>
        <article className='bg-white'>
        <NeedHelp/>
        </article>
        </main>
        <footer>
        <Footer/>
        </footer>
        {/* <Swiper
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
        </Swiper> */}
        </div>
        </>
    )
}