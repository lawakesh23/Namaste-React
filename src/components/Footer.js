import { Link } from "react-router-dom";
import linkedinIcon from '../assets/img/linkedin.png'
import instagramIcon from '../assets/img/instagram.png'
import facebookIcon from '../assets/img/facebook.png'
import tweeterIcon from '../assets/img/twitter.png'
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const Footer =()=>{
    const {user}= useContext(UserContext);
    return(
        <>
            <div className="Footer  bg-gray-700 py-3 pt-5">
                <div className="text-white container mx-auto sm:flex block sm:justify-between justify-center items-center ">
                    <div className="sm:p-0 pb-4 flex justify-center">
                        <img alt="footerimage" className="sm:text-center text-center rounded-full w-48" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrXZYHpGaHJ2LysDWPJE-2L-i3r7BXNFasNFWhdFbKGULdVZX2uGtoVhyozjLW2g3jHqc&usqp=CAU" />
                    </div>
                    <div className="sm:p-0 py-6 sm:text-center text-center sm:border-none border-y">
                     Made With 🧡 by Lawakesh !! ©  2023
                    </div>
                    <span>{user.name}</span>
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