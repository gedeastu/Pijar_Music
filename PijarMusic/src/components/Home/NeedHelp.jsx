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
  return (
    <>
    <div className='bg-[#F5F5F5] h-screen w-full'>
    <div id="accordion">
      {dataAccordion.map(item=>(
        <div key={item.id}>
          <h1 className='text-black'>{item.Title}</h1>
        </div>
      ))}
    </div>
    </div>
    </>
  )
}

export default NeedHelp;