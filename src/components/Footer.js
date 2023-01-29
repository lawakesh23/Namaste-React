import { Link } from "react-router-dom";
import linkedinIcon from '../assets/img/linkedin.png'
import instagramIcon from '../assets/img/instagram.png'
import facebookIcon from '../assets/img/facebook.png'
import tweeterIcon from '../assets/img/twitter.png'
const Footer =()=>{
    return(
        <>
            <div className="Footer bg-dark py-3">
                <div className="container d-flex justify-content-between align-items-center text-white">
                    <div>
                        <img alt="footerimage" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_284/Logo_f5xzza" />
                    </div>
                    <div>
                     Made With 🧡 by Lawakesh !! ©  2023
                    </div>
                    <div className="d-flex f-list-none">
                        <li className="pr-2"><Link><img alt="likdin" style={{width:"22px"}} src={linkedinIcon}/></Link></li>
                        <li className="px-2"><Link><img alt="instagramIcon" style={{width:"22px"}} src={instagramIcon}/></Link></li>
                        <li className="px-2"><Link><img alt="facebookIcon" style={{width:"22px"}} src={facebookIcon}/></Link></li>
                        <li className="pl-2"><Link><img alt="tweeterIcon" style={{width:"22px"}} src={tweeterIcon}/></Link></li>
                    </div>

                </div>
                
            </div>
        </>
    )
}

export default Footer;