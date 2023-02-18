import useOnline from "../utils/useOnline"

const OnlineStatus =()=>{
    const isOnline = useOnline(true) // Custom Hooks

    return(
        <>
         {!isOnline ? <div className="d-flex justify-content-center ">
                        <div className="onlinestatus p-2 text-white absolute top-40 left-10 bg-red-500 rounded">
                            <div><h5>Connection Error</h5> 
                                <span className="font-12">Please check your internet connection and try again.</span>
                            </div>
                        </div>
                     </div> 
            :  <span data-testid="connection">
                {/* <img alt="online" className="w-5" src="https://icon-library.com/images/online-status-icon/online-status-icon-12.jpg"/> */}
                </span>
            }
        </>
    )
}

export default OnlineStatus;