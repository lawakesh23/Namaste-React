import useOnline from "../utils/useOnline"

const OnlineStatus =()=>{
    const isOnline = useOnline(true) // Custom Hooks

    return(
        <>
         {!isOnline ? <div className="d-flex justify-content-center">
                        <div className="onlinestatus p-2 text-white">
                            <div><h5>Connection Error</h5> 
                                <span className="font-12">Please check your internet connection and try again.</span>
                            </div>
                        </div>
                     </div> 
            :  <span data-testid="connection">Online{isOnline}</span>
            }
        </>
    )
}

export default OnlineStatus;