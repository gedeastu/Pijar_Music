import './HomePage.css'
import Header from '../components/Home/Header'
import WhoWeAre from '../components/Home/WhoWeAre'
import OurCampaign from '../components/Home/OurCampaign'
export default function HomePage(){
    return(
        <>
        <div className='container bg-white mx-auto max-w-full flex flex-col h-max'>
        <Header/>
        <main className='flex flex-col'>
        <WhoWeAre/>
        <OurCampaign/>
        </main>
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