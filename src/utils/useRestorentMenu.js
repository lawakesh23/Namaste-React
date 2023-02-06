import {useState, useEffect} from 'react';
import {URL_Menu}  from '../contants';

const useRestorentMenu=(refID)=>{

    const [RestoMenu, setRestoMenu] = useState(null);

    async function fetchData(){ 
        const getdata= await fetch(URL_Menu + refID)
        const data = await getdata?.json();
        setRestoMenu(data)

    }
    useEffect(()=>{
        fetchData();
    },[])

    return RestoMenu;

}

export default useRestorentMenu;