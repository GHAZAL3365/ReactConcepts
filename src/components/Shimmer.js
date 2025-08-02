import React from "react";

const Shimmer = () => {
    
    return (
     
        <div className=" h-full w-70  m-2 flex flex-col gap-3">
            <div className="bg-gray-200 w-full h-50 rounded-md"></div>
            <div className="w-2/3 bg-gray-200 h-5 rounded-md"></div>
            <div className="w-60 h-5  rounded-md bg-gray-200"></div>
            <div className="w-40 h-5 rounded-md bg-gray-200"></div>
            <div className="w-50 h-5 rounded-md bg-gray-200"></div>
            <div className="w-45 h-5 rounded-md bg-gray-200"></div>
       
       
        {/* Add more shimmer cards as needed */}
        </div>
    );
}


export default Shimmer;