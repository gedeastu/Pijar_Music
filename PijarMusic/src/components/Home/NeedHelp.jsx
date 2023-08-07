import React from 'react'
import './NeedHelp.css'
import { useState,useEffect } from 'react';
import { AccordionGetPosts } from '../../../api/api';
const NeedHelp = () => {
  const [dataAccordion,setDataAccordion] = useState([]);
    const fetchData = async () => {
        try{
            const data = await AccordionGetPosts();
            setDataAccordion(data);
        } catch (error) {
            console.error('Error fetching data : ', error);
        }
    }
    useEffect(()=>{
        fetchData();
    },[]);

    const [accordionSelected,setDataAccordionSelected] = useState(null);
    const toggleSelected = (index) => {
      if(accordionSelected == index){
        setDataAccordionSelected(null);
      }else{
        setDataAccordionSelected(index);
      }
    }
  return (
    <>
    <div className='bg-white h-full w-full'>
    <h1 className='text-[#FF6002] font-outfit text-center font-bold'>Need Help?</h1>
    <h2 className='text-black font-outfit text-center font-bold text-2xl'>The Answers to All Your Questions</h2>
    <div className='bg-[#FF6002] w-20 h-1 mx-auto rounded-full'></div>
    <p className='text-center text-black font-outfit'>Here’s you can find frequently ask questions in
      <br />
     this section</p>

    <div id="accordion" className='flex flex-col items-center'>
      {dataAccordion.map((item, index)=>(
        <div key={item.id} className='w-[30rem]'>
          <div id='title' onClick={()=>toggleSelected(index)} className={accordionSelected == index ? ('bg-[#FF6002] flex flex-row items-center justify-between px-5 py-5'):('bg-[#F5F5F5] flex flex-row items-center justify-between px-5 py-5')}>
          <h1 className='text-black font-bold'>{item.Title}</h1>
          <button>
          {accordionSelected == index ? (<svg width="30" height="4" viewBox="0 0 30 4" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M29.4309 2C29.4309 2.64941 28.699 3.17188 27.7892 3.17188H2.61724C1.71091 3.17188 0.975586 2.64746 0.975586 2.00049C0.975586 1.35547 1.71091 0.828125 2.61724 0.828125H27.7892C28.699 0.828125 29.4309 1.35547 29.4309 2Z" fill="white"/>
          </svg>) : (<svg id='plus' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 10C20 10.8505 19.3111 11.5389 18.4615 11.5389H11.5385V18.462C11.5385 19.3125 10.8495 20 10 20C9.15048 20 8.46154 19.3125 8.46154 18.462V11.5389H1.53846C0.688942 11.5389 0 10.8505 0 10C0 9.14952 0.688942 8.46202 1.53846 8.46202H8.46154V1.53894C8.46154 0.688462 9.15048 0 10 0C10.8495 0 11.5385 0.688462 11.5385 1.53894V8.46202H18.4615C19.3125 8.46154 20 9.14904 20 10Z" fill="#FF6002"/>
          </svg>)}
          </button>
          </div>
          {accordionSelected == index ? (
          <div id="content" className='text-black '>
            <p>{item.Content}</p>
          </div>
          ):(
          <div id="content" className='text-black hidden'>
            <p>{item.Content}</p>
          </div>
          )};
          {/* <div id="content" className='text-black'>
            <p>{item.Content}</p>
          </div> */}
        </div>
      ))}
    </div>
    </div>
    </>
  )
}

export default NeedHelp;