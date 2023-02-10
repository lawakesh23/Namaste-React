import React from 'react'

const Shimmer = () => {
  return (
    <div className="shimmer-restolist grid sm:grid-cols-4 grid-cols-1 px-8 pt-6" data-testid="shimmer-ui">
      {Array(10).fill("").map((item, i)=>{ 
        return(
          <>
              <div key={i} className="h-100 bg-white-300 p-1 m-4 animate-pulse" >
                <div className="h-48 bg-gray-200 mb-1"></div>
                <div className="h-8 bg-gray-200 mb-1"></div>
                <div className="h-8 bg-gray-200 mb-1"></div>
                <div className="h-8 bg-gray-200"></div>
              </div>
          </>
        )
         })}
    </div>
  )
}

export default Shimmer
