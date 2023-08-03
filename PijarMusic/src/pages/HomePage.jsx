import './HomePage.css'
import Header from '../components/Home/Header'
import WhoWeAre from '../components/Home/WhoWeAre'
import OurCampaign from '../components/Home/OurCampaign'
import LastestArticles from '../components/Home/LastestArticles'
import WhatPeopleSay from '../components/Home/WhatPeopleSay'
import { Parallax,ParallaxLayer } from '@react-spring/parallax'
export default function HomePage(){
    return(
        <>
        <Parallax pages={4} className='container bg-white mx-auto max-w-full flex flex-col h-max'>
        <ParallaxLayer speed={1}>
        <Header/>
        </ParallaxLayer>
        {/* <ParallaxLayer speed={0.3} offset={1}>
        <svg className='absolute mx-auto' width="649" height="649" viewBox="0 0 649 649" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M383.471 592.257C391.597 576.288 396.533 557.281 397.72 537.387C398.908 517.493 396.298 497.505 390.188 479.686C384.078 461.866 374.711 446.927 363.147 436.556C351.582 426.186 338.282 420.799 324.751 421.006C311.22 421.212 297.998 427.003 286.581 437.724C275.164 448.445 266.008 463.668 260.149 481.669C254.29 499.671 251.961 519.734 253.426 539.588C254.892 559.442 260.093 578.294 268.441 594.011L284.296 575.669C278.267 564.319 274.511 550.705 273.453 536.368C272.395 522.031 274.076 507.543 278.307 494.543C282.539 481.543 289.15 470.55 297.395 462.808C305.639 455.066 315.188 450.884 324.959 450.735C334.73 450.586 344.335 454.476 352.686 461.965C361.037 469.454 367.802 480.242 372.214 493.11C376.626 505.978 378.51 520.412 377.653 534.779C376.796 549.145 373.232 562.87 367.363 574.402L383.471 592.257Z" fill="orange"/>
        <path d="M258 493V194M392 194V493" stroke="orange" stroke-width="20"/>
        <path d="M392 332.01V332.01C391.669 310.684 361.438 306.82 355.754 327.378L346.409 361.174C340.045 384.188 306.934 382.735 302.611 359.251L296.943 328.456C292.617 304.953 258 308.113 258 332.01V332.01" stroke="orange" stroke-width="20"/>
        <path d="M328.106 165.253L324.406 163.826L320.734 165.321L260.132 190.003L321.521 61.2042L389.556 188.964L328.106 165.253ZM255.351 191.95C255.352 191.95 255.353 191.95 255.354 191.949L255.351 191.95Z" fill="none" stroke="orange" stroke-width="20"/>
        <path d="M392 234C392 198.654 362.003 170 325 170C287.997 170 258 198.654 258 234" stroke="orange" stroke-width="20"/>
        <path d="M390.985 359.573L484.771 420.513C485.055 420.698 485.226 421.013 485.226 421.352V627.209C485.226 628.244 483.847 628.598 483.349 627.69L390.985 459.159" stroke="orange" stroke-width="20"/>
        <path d="M485.226 634.672C465.273 580.103 371.94 265.921 394.469 387.184" stroke="orange" stroke-width="10"/>
        <path d="M261.719 359.573L167.932 420.513C167.648 420.698 167.477 421.013 167.477 421.352V627.209C167.477 628.244 168.857 628.598 169.354 627.69L261.719 459.159" stroke="orange" stroke-width="20"/>
        <path d="M167.477 634.672C187.431 580.103 280.763 265.921 258.235 387.184" stroke="orange" stroke-width="10"/>
        </svg>
        </ParallaxLayer> */}
        
        <main className='flex flex-col gap-10'>
        <ParallaxLayer offset={0.9} speed={0.1}><WhoWeAre/></ParallaxLayer>
        <ParallaxLayer offset={1.9} speed={0.5}><OurCampaign/></ParallaxLayer>
        <ParallaxLayer offset={2.7} speed={0.7} className='relative z-50'><LastestArticles/></ParallaxLayer>
        {/* <ParallaxLayer offset={3.95}>
        <svg className='absolute  mx-auto' width="649" height="649" viewBox="0 0 649 649" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M383.471 592.257C391.597 576.288 396.533 557.281 397.72 537.387C398.908 517.493 396.298 497.505 390.188 479.686C384.078 461.866 374.711 446.927 363.147 436.556C351.582 426.186 338.282 420.799 324.751 421.006C311.22 421.212 297.998 427.003 286.581 437.724C275.164 448.445 266.008 463.668 260.149 481.669C254.29 499.671 251.961 519.734 253.426 539.588C254.892 559.442 260.093 578.294 268.441 594.011L284.296 575.669C278.267 564.319 274.511 550.705 273.453 536.368C272.395 522.031 274.076 507.543 278.307 494.543C282.539 481.543 289.15 470.55 297.395 462.808C305.639 455.066 315.188 450.884 324.959 450.735C334.73 450.586 344.335 454.476 352.686 461.965C361.037 469.454 367.802 480.242 372.214 493.11C376.626 505.978 378.51 520.412 377.653 534.779C376.796 549.145 373.232 562.87 367.363 574.402L383.471 592.257Z" fill="orange"/>
        <path d="M258 493V194M392 194V493" stroke="orange" stroke-width="20"/>
        <path d="M392 332.01V332.01C391.669 310.684 361.438 306.82 355.754 327.378L346.409 361.174C340.045 384.188 306.934 382.735 302.611 359.251L296.943 328.456C292.617 304.953 258 308.113 258 332.01V332.01" stroke="orange" stroke-width="20"/>
        <path d="M328.106 165.253L324.406 163.826L320.734 165.321L260.132 190.003L321.521 61.2042L389.556 188.964L328.106 165.253ZM255.351 191.95C255.352 191.95 255.353 191.95 255.354 191.949L255.351 191.95Z" fill="none" stroke="orange" stroke-width="20"/>
        <path d="M392 234C392 198.654 362.003 170 325 170C287.997 170 258 198.654 258 234" stroke="orange" stroke-width="20"/>
        <path d="M390.985 359.573L484.771 420.513C485.055 420.698 485.226 421.013 485.226 421.352V627.209C485.226 628.244 483.847 628.598 483.349 627.69L390.985 459.159" stroke="orange" stroke-width="20"/>
        <path d="M485.226 634.672C465.273 580.103 371.94 265.921 394.469 387.184" stroke="orange" stroke-width="10"/>
        <path d="M261.719 359.573L167.932 420.513C167.648 420.698 167.477 421.013 167.477 421.352V627.209C167.477 628.244 168.857 628.598 169.354 627.69L261.719 459.159" stroke="orange" stroke-width="20"/>
        <path d="M167.477 634.672C187.431 580.103 280.763 265.921 258.235 387.184" stroke="orange" stroke-width="10"/>
        </svg></ParallaxLayer> */}
        <ParallaxLayer offset={3} speed={0.9}><WhatPeopleSay/></ParallaxLayer>
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
        </Parallax>
        </>
    )
}