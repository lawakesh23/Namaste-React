import { Link } from "react-router-dom"
const Contact =() =>{
    return(
            <>  
                <div className="bg-light-secondary">
                    <div className="container py-4">
                        <div className="row">
                            <div className="col-lg-6">
                                <h3>Contact Us</h3>
                                <p>101 Cyril Magnin St, San Francisco, CA 94102, USA</p>
                                <span>TEL: </span> <span className="font-theme-color">1.555.836.6767</span>
                                <p className="font-theme-color">duval@demolink.org</p>

                                <h5>Want to join the team?</h5>
                                <Link className="font-theme-color">Apply today</Link>
                            </div>
                            <div className="col-lg-6">
                                <h3>Opening Hours</h3>
                                <p>Mo-Fr 11:00-00:00</p>
                                <p>Sa-Su 15:00-00:00</p>

                                <h5>Call us at:</h5>
                                <Link className="font-theme-color">555.329.0632</Link>
                            </div>  
                        </div>
                        <hr className=" my-5"/>
                        
                        <div className="row ">
                                <div className="col-lg-4">
                                    <h3 className="font-theme-color">Burger Palace</h3>
                                    <article>Visiting our restaurant feels just like paying a visit to your grandpa’s farm… Having a sip of a creamy milkshake, having a bite of a juicy meaty burger… Eating at our place always feels like good old times!</article>

                                </div>
                                <div className="col-lg-8">
                                    <form>
                                        <div className="row">
                                            <div className="col">
                                            <input type="text" className="form-control" placeholder="Your name"/>
                                            </div>
                                            <div className="col">
                                            <input type="text" className="form-control" placeholder="Phone"/>
                                            </div>
                                            <div className="col">
                                            <input type="text" className="form-control" placeholder="Email"/>
                                            </div>
                                        </div>
                                        <div className="form-group pt-4">
                                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Your Message"></textarea>
                                        </div>
                                        <button type="submit" className="button-theme my-2">Submit</button>
                                    </form>
                                </div>  
                        </div>
                    </div>
                </div>
            </>
    )
}

export default Contact;