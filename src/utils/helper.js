 export function FilterData(inputValue, filteredRestorents){
    return filteredRestorents?.filter((restorent)=>
           restorent?.data?.name?.toLowerCase().includes(inputValue?.toLowerCase())
          
      );
  }