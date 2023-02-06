import { useState } from "react";

 const Section =({title, description,isvisible, setIsvisible})=>{
    return(
        <>
            <div className="bg-blue-200 p-2 m-2 sm:px-10 px-2">
                
                <h1 className="text-xl font-bold text-orange-400">{title}</h1>

                {isvisible ? <> 
                                <button className="" onClick={()=>setIsvisible(false)}>Hide </button>
                                 <p className="border-2 border-gray-400 p-2 rounded pt-3 my-3">{description}</p>
                             </> 
                            : <button className=" " onClick={()=>setIsvisible(true)} >Show </button>
                  }
                
            </div> 
        </>
    )
 }
 
 const InstaMart=()=>{
    const [visibleSection, setVisibleSection]= useState("about");
    return(
        <>   
            <h1 className="text-3xl text-center font-bold py-2">InstaMart</h1>
            <Section 
            title={"About Us"} 
            description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"}
            isvisible={visibleSection==="about"}
            setIsvisible={(display)=> {
                if(display){
                    setVisibleSection("about")}
                 else{
                    setVisibleSection("")
                 } } }
            />

            <Section 
            title={"Product"} 
            description={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making"} 
            isvisible={visibleSection==="product"}
            setIsvisible={(display)=> {
                if(display){
                    setVisibleSection("product")}
                 else{
                    setVisibleSection("")
                 } } }
            />

            <Section 
            title={"Careers"} 
            description={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making"} 
            isvisible={visibleSection==="career"}
            setIsvisible={(display)=> {
                if(display){
                    setVisibleSection("career")}
                 else{
                    setVisibleSection("")
                 } } }
            />

            <Section 
            title={"Teams"} 
            description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"} 
            isvisible={visibleSection==="team"}
            setIsvisible={(display)=> {
                if(display){
                    setVisibleSection("team")}
                 else{
                    setVisibleSection("")
                 } } }
            />

        </>
    );
 }

 export default InstaMart;