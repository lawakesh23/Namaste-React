import { Link } from "react-router-dom";
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
                        <li className="px-2"><Link>Facebook</Link></li>
                        <li className="px-2"><Link>Pinterest</Link></li>
                        <li className="px-2"><Link>Instagram</Link></li>
                        <li className="px-2"><Link>Twitter</Link></li>
                    </div>

                </div>
                
            </div>
        </>
    )
}

export default Footer;