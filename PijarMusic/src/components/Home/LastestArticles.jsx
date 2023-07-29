import './LastestArticles.css'
import bali from '../assets/baliEarthquake.jpeg'
import cianjur from '../assets/cianjurEarthquake.jpeg';
export default function LastestArticles(){    
    const dataArticles = [
        {
            id: 1,
            image: bali,
            article1: 'Massive Earthquakes',
            article2: 'destroying villages',
            date: '15 Feb, 2023'
        },
        {
            id: 2,
            image:cianjur,
            article1: 'Massive Earthquakes',
            article2: 'destroying villages',
            article: 'Massive Earthquakes destroying villages',
            date: '15 Feb, 2023'
        },
        {
            id: 3,
            image:bali,
            article1: 'Massive Earthquakes',
            article2: 'destroying villages',
            article: 'Massive Earthquakes destroying villages',
            date: '15 Feb, 2023'
        },
        // {
        //     id: 4,
        //     image: '../assets',
        //     article: 'Massive Earthquakes destroying villages',
        //     date: '15 Feb, 2023'
        // },
        // {
        //     id: 5,
        //     image: '../assets',
        //     article: 'Massive Earthquakes destroying villages',
        //     date: '15 Feb, 2023'
        // },
        // {
        //     id: 6,
        //     image: '../assets',
        //     article: 'Massive Earthquakes destroying villages',
        //     date: '15 Feb, 2023'
        // },
    ]
    return(
        <>
        <div className='w-full flex flex-col px-7 md:px-28 md:gap-10'>
        <div className='flex flex-col gap-3 md:gap-1'>
        <h1 className='text-[#FF6002] font-outfit font-semibold text-2xl md:text-4xl'>Latest News</h1>
        <h2 className='text-black font-outfit font-semibold text-3xl md:text-6xl'>Latest Articles</h2>
        <div className='bg-[#FF6002] h-1.5 rounded-full w-72 my-auto md:hidden'></div>
        <div className='bg-black h-1.5 rounded-full w-60 my-auto md:hidden'></div>
        </div>
        <div className='w-full h-[80rem] grid grid-cols-1 place-items-center place-content-evenly md:grid-cols-3 md:place-items-stretch md:h-full md:pb-10'>
        {dataArticles.map(itemsArticles=>(
           <div key={itemsArticles.id} className='text-black flex flex-col rounded-lg overflow-hidden bg-[#FAFAFA] w-max md:w-[30rem]'>
            <div className='w-96 relative h-56 md:w-full'>
            <img src={itemsArticles.image} alt="" className='h-full w-full object-cover'/>
            </div>
            <div className='flex flex-col px-5 gap-4'>
            <h1 className='font-outfit font-semibold text-2xl'>{itemsArticles.article1}
            <br />
            <span>
            {itemsArticles.article2}
            </span>
            </h1>
            <div className='bg-[#DEDDCD] w-full h-1 relative'>
            <div className='bg-[#333333] w-40 h-[0.4rem]'></div>
            </div>
            <p className='font-plusJakartaSans'>{itemsArticles.date}</p>
            </div>
           </div> 
        ))}
        </div>
        </div>
        </>
    )
}