
import { useEffect, useState } from "react";

const useOnline=()=>{
    const [status, setStatus] =useState(true);

    useEffect(()=>{
        const isOnline=()=>{
            setStatus(true)
        }

        const isOffline=()=>{
            setStatus(false);
        }

        window.addEventListener('online', isOnline)
        window.addEventListener('offline', isOffline)

        return()=>{
            window.removeEventListener('online', isOnline)
            window.removeEventListener('online', isOffline)
        }
    },[])

    return status

}

export default useOnline;