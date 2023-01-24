import { useEffect } from "react";


const ProfileFunctionBased = ()=>{

    useEffect(()=>{
       timer= setInterval(()=>{
            console.log("This is SetInterval");
        },1000)

        return(
            clearInterval(timer)
        )
    },[])

    return(
        <>
        <h2> This is Profile</h2>
        </>
    )
}

export default ProfileFunctionBased;