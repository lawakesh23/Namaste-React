import { useRouteError, Link } from "react-router-dom";
const Error =()=>{
    const routeError= useRouteError();
    return(
        <div>
            <h1>Ops !!!!!! Something went wrong</h1>
            <h5> {routeError.data}</h5>
            <h6>Code: {routeError.status}</h6>
            <Link to="./">
                <h3>Click here to go to home page..</h3>
            </Link>
        </div>
    )
}

export default Error;