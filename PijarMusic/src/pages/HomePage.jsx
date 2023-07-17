import './HomePage.css'
import Header from '../components/Home/Header'
import WhoWeAre from '../components/Home/WhoWeAre'
export default function HomePage(){
    return(
        <>
        <div className='container bg-white mx-auto max-w-full h-max'>
        <Header/>
        <WhoWeAre/>
        </div>
        </>
    )
}