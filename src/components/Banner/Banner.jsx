import banner from 'images/banner.jpg'
import { IoClose } from "react-icons/io5";
import './Banner.css'
import { useContext } from 'react';
import { BannerContext } from 'context/BannerContext/BannerContext';
function Banner() {
    const {setIsBannerOpen} = useContext(BannerContext)
    return (  
        <div className="banner">
            <div className='container'> 
                <button className='close-btn' onClick={()=>setIsBannerOpen(false)}><IoClose /></button>
                <img src={banner} alt="" className='banner-image' />
            </div>
        </div>
    );
}

export default Banner;