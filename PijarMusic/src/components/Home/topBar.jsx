import './topBar.css'
import * as React from "react"; 
function TopBar() {
  const [topBar, setTopBar] = React.useState(false);
  const showTopBar = () => {
    setTopBar(!topBar);
  }
//   if (topBar){
//     document.body.classList.add("disableScroll");
//   } else{
//     document.body.classList.remove("disableScroll")
//   }
  return (
    <>
    <div className='md:hidden overflow-y-auto'>
    <button onClick={showTopBar} className='md:hidden text-black duration-500 transition-all'>{topBar ? (<svg xmlns="http://www.w3.org/2000/svg" id='close' className='fixed z-[99] top-8 fill-[#FF6002] transition-all duration-500' height="2em" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>):(<svg xmlns="http://www.w3.org/2000/svg" id='bars' className='transition-all fill-white duration-500 focus:rotate-180' height="2em" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>)}</button>
    {topBar ? 
    (<>
    <div className='transition-all duration-500 left-0 fixed z-[60] top-0'>
    <div className='h-96 bg-white shadow-xl opacity-100 w-screen ease-in-out transition-all duration-500'>
    </div>
    </div>
    <div id='disableScroll' className='bg-black fixed opacity-20 z-[55] top-0 left-0 w-full transition duration-500 ease-in-out h-screen overflow-y-auto'>
    </div>
    </>)
    :
    (<>
    <div className='transition-all -top-96 left-0 fixed ease-in-out duration-500'>
    <div className='opacity-0 fixed bg-white h-0 w-screen transition-all ease-in-out duration-500'></div>
    </div>
    <div className='bg-black opacity-0 top-0 left-0 transition duration-500 w-full ease-in-out h-screen fixed -z-10'></div>
    </>)}
    </div>
    </>
  )
}

export default TopBar;