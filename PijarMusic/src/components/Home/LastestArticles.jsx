import './LastestArticles.css'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { LastestArticlesGetPosts } from '../../../api/api';
export default function LastestArticles(){
    const [dataArticles,setDataArticles] = useState([]);
    const fetchData = async () => {
        try{
            const data = await LastestArticlesGetPosts();
            setDataArticles(data);
        } catch (error) {
            console.error('Error fetching data : ', error);
        }
    }
    useEffect(()=>{
        fetchData();
    },[]);
    //Fetch LatestArticles data
    // const fetchLatestArticles = async ()=>{
    //     const rest = await fetch ('http://localhost:5000/LastestArticles');
    //     const data = rest.json();
    //     return data;
    // }
    //Get LatestArticles data
    // useEffect(()=>{
    //     const getLatestArticles = async () => {
    //         const latestArticlesFromServer = await fetchLatestArticles()
    //         setDataArticles(latestArticlesFromServer)
    //     }
    //     getLatestArticles()
    // },[]);
    return(
        <>
        <div className='w-full flex relative z-40 flex-col px-7 py-8 md:px-28 md:py-14'>
        <div className='flex flex-row items-end justify-between gap-3 md:gap-1 md:pb-16'>
        <div id='title' className='flex flex-col gap-3'>
        <h1 className='text-[#FF6002] font-outfit font-semibold text-2xl md:text-4xl'>Latest News</h1>
        <h2 className='text-black font-outfit font-semibold text-3xl md:text-6xl'>Latest Articles</h2>
        </div>
        <button className='uppercase text-[#FF6002] border-2 border-[#FF6002] rounded-xl px-5 py-1.5 font-normal font-outfit transition-all duration-200 hover:border-none hover:bg-[#FF6002] hover:text-white md:px-10 md:py-2.5 md:font-bold'>
        All News
        </button>
        </div>
        <div className='w-full h-[80rem] grid grid-cols-1 place-items-center place-content-evenly md:grid-cols-3 md:place-items-stretch md:h-full md:pb-10 md:gap-10'>
        {dataArticles.length > 0 ? (dataArticles.map(itemsArticles=>(
           <div key={itemsArticles.id} className='text-black flex flex-col rounded-lg overflow-hidden bg-[#FAFAFA] w-max md:w-full md:h-[25rem]'>
            <div className='w-96 relative h-56 md:w-full'>
            <img src={itemsArticles.image} alt="" className='h-full w-full object-cover'/>
            </div>
            <div className='flex flex-col justify-center h-full px-5 gap-4'>
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
        ))) : (<p className='text-black'>No Arcticle here!</p>)}
        </div>

        <div className='bg-[#FAFAFA] px-5 py-8 flex flex-col rounded-xl gap-5 md:px-14 md:py-12 md:flex md:flex-row md:justify-between'>
        <div id="title" className='font-outfit text-black text-center flex flex-col gap-3 md:text-left'>
        <h1 className='font-bold text-4xl text-[#1D1D1D]'>Newsletter</h1>
        <h2 className='text-[#404040] text-opacity-50'>Update charity events and have musical experience together</h2>
        </div>
        <div id="input" className='flex flex-row items-center gap-5 font-outfit md:gap-7'>
        <input type="email" className='bg-white text-black w-80 rounded-xl h-12 pl-4 border boder-[#DADADA] placeholder:text-[#20003A] placeholder:opacity-50 focus:outline-[#FF6002]' placeholder='Your Email'/>
        <button className='bg-[#FF6002] h-12 w-32 rounded-xl font-semibold'>Subcribe</button>
        </div>
        </div>
        </div>
        </>
    )
}