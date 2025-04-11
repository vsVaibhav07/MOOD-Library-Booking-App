import React from 'react'
import DesktopCard from '../components/Home/DesktopCard'
import GetIntouch from '../components/Home/GetIntouch'
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
<DesktopCard/>
<GetIntouch/>
<Footer/>
</div>
</>
  )
}

export default Home