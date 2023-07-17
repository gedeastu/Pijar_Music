import './HomePage.css'
import Header from '../components/Home/Header'
import Main from '../components/Home/Main'
export default function HomePage(){
    return(
        <>
        <div className='container bg-white mx-auto max-w-full h-max'>
        <Header/>
        <Main/>
        </div>
        </>
    )
}