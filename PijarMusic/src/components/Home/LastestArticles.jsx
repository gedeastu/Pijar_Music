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
        <div className='w-full flex flex-col mx-auto px-7 gap-10 md:px-28 md:justify-between md:flex-row md:items-center'>
        {dataArticles.map(itemsArticles=>(
           <div key={itemsArticles.id} className='text-black flex flex-col gap-5 rounded-lg overflow-hidden bg-[#FAFAFA] w-max md:w-[26rem]'>
            <div className='w-full relative h-56'>
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
        </>
    )
}