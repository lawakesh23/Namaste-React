import React from 'react'

const Shimmer = () => {
  return (
    <div className="shimmer-restolist">
      {Array(10).fill("").map(()=>{ return <div className="shimmer-card"> </div>})}
 

   
    </div>
  )
}

export default Shimmer
