import './WhoWeAre.css'
import IwanFals from '../assets/iwanFals.jpeg'
export default function Main(){  
    return(
        <>
        <main className='flex flex-col px-7 md:flex-row md:px-28'>
            <aside>
                <div className='w-96 h-96'>
                <img src={IwanFals} alt="" className='w-full h-full object-cover'/>
                </div>
            </aside>
            <article></article>
        </main>
        </>
    )
}