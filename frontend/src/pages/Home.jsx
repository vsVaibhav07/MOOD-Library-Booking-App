import React,{lazy,Suspense} from 'react'
// import DesktopCard from '../components/Home/DesktopCard'
const DesktopCard= lazy(()=>import('../components/Home/DesktopCard'))
const GetIntouch= lazy(()=>import('../components/Home/GetIntouch'))
import Herobar from '../components/Home/Herobar'
import Footer from '../components/common/Footer'
import Navbar from '../components/common/Navbar'



function Home() {
  return (
<>
<div style={{display : "flex" , gap : "50px" , flexDirection : "column" , overflow : "hidden"}}>
<div>
<Navbar/>
<Herobar/>
</div>

<Suspense fallback={<div>Loading...</div>}>
  <DesktopCard/>
</Suspense>
<Suspense fallback={<div>Loading...</div>}>
  <GetIntouch/>
</Suspense>

<Footer/>
</div>
</>
  )
}

export default Home