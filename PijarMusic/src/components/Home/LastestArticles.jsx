import './LastestArticles.css'
import mcr from '../assets/mcr.jpeg'
export default function LastestArticles(){    
    const dataArticles = [
        {
            id: 1,
            image: mcr,
            article: 'Massive Earthquakes destroying villages',
            date: '15 Feb, 2023'
        },
        {
            id: 2,
            image: {mcr},
            article: 'Massive Earthquakes destroying villages',
            date: '15 Feb, 2023'
        },
        {
            id: 3,
            image: {mcr},
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
        <div></div>
        {dataArticles.map(itemsArticles=>(
           <div key={itemsArticles.id} className='text-black'>
            <img src={itemsArticles.image} alt="" className='w-10'/>
            <p>{itemsArticles.article}</p>
            <p>{itemsArticles.date}</p>
           </div> 
        ))}
        </>
    )
}