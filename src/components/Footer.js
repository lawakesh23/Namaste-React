import { Link } from "react-router-dom";
import linkedinIcon from '../assets/img/linkedin.png'
import instagramIcon from '../assets/img/instagram.png'
import facebookIcon from '../assets/img/facebook.png'
import tweeterIcon from '../assets/img/twitter.png'
const Footer =()=>{
    return(
        <>
            <div className="Footer  bg-gray-700 py-3 pt-5">
                <div className="text-white container mx-auto sm:flex block sm:justify-between justify-center items-center ">
                    <div className="sm:p-0 pb-4 flex justify-center">
                        <img alt="footerimage" className="sm:text-center text-center" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_284/Logo_f5xzza" />
                    </div>
                    <div className="sm:p-0 py-6 sm:text-center text-center sm:border-none border-y">
                     Made With 🧡 by Lawakesh !! ©  2023
                    </div>
                    <div className="sm:p-0 py-5 flex justify-center">
                            <ul className="flex">
                            <li className="pr-2"><Link><img alt="likdin" style={{width:"22px"}} src={linkedinIcon}/></Link></li>
                            <li className="px-2"><Link><img alt="instagramIcon" style={{width:"22px"}} src={instagramIcon}/></Link></li>
                            <li className="px-2"><Link><img alt="facebookIcon" style={{width:"22px"}} src={facebookIcon}/></Link></li>
                            <li className="pl-2"><Link><img alt="tweeterIcon" style={{width:"22px"}} src={tweeterIcon}/></Link></li>
                        </ul>
                    </div>

                </div>
                
            </div>
        </>
    )
}

export default Footer;