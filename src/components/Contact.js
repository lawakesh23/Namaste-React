import { Link } from "react-router-dom"
import { useFormik } from 'formik';
const Contact =() =>{
    const formik = useFormik({
        initialValues: {
          email: '',
        },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });

    return(
            <>  
                <div className="bg-gray-200">
                    <div className="container py-4 mx-auto">
                        <div className="grid grid-cols-2">
                            <div className="">
                                <h3 className="text-3xl font-medium">Contact Us</h3>
                                <p className="py-2">101 Cyril Magnin St, San Francisco, CA 94102, USA</p>
                                <span>TEL: </span> <span className="font-theme-color">1.555.836.6767</span>
                                <p className="py-2 text-orange-600">duval@demolink.org</p>

                                <h5 className="text-xl">Want to join the team?</h5>
                                <Link className="text-orange-600 py-3">Apply today</Link>
                            </div>
                            <div className="">
                                <h3 className="text-3xl font-medium pb-3">Opening Hours</h3>
                                <p>Mo-Fr 11:00-00:00</p>
                                <p>Sa-Su 15:00-00:00</p>

                                <h5 className="pt-3 text-xl">Call us at:</h5>
                                <Link className="text-orange-600">555.329.0632</Link>
                            </div>  
                        </div>
                        <hr className=" my-5"/>
                        
                        <div className="grid-cols-2">
                                <div className="">
                                    <h3 className="text-3xl font-medium">Burger Palace</h3>
                                    <article className="pt-4 mr-5">Visiting our restaurant feels just like paying a visit to your grandpa’s farm… Having a sip of a creamy milkshake, having a bite of a juicy meaty burger… Eating at our place always feels like good old times!</article>

                                </div>
                                <div className="pt-3">
                                       <form onSubmit={formik.handleSubmit} className="block">
                                        <input
                                            id="email"
                                            className="mr-2 pl-2"
                                            Placeholder="Your Name"
                                            name="email"
                                            type="email"
                                            onChange={formik.handleChange}
                                            value={formik.values.email}
                                        />
                                        <input
                                            id="email"
                                            placeholder="Phone"
                                            className="mx-2 pl-2"
                                            name="email"
                                            type="email"
                                            onChange={formik.handleChange}
                                            value={formik.values.email}
                                        />
                                        <input
                                            id="email"
                                            placeholder="Email"
                                            className="mx-2 pl-2"
                                            name="email"
                                            type="email"
                                            onChange={formik.handleChange}
                                            value={formik.values.email}
                                        />
                                        <button className="w-20 bg-orange-400 rounded-sm" type="submit">Submit</button>
                                    </form>                                 
                                </div>  
                        </div>
                    </div>
                </div>
            </>
    )
}

export default Contact;