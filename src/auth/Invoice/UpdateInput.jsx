import React from "react";

const UpdateInput = (props) => {

    return(

        <>
             <div className="h-screen w-screen bg-[#000000a6] z-[100] absolute flex items-center justify-center top-0 left-0">
           
            
            
           <div className="  rounded-lg w-[450px] shadow-lg  z-20  overflow-y-auto">
               <div>
                   <div className=" p-3   bg-gray-50 text-[20px]  font-semibold ">
                       <div className=" ">New List Item</div>
                   </div>
               </div>
               <div className="p-4 bg-white  ">
                   <div className="p-4 md:p-5 text-center">
                       <div className="mb-4">
                           <div className="relative">
                               <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                   <MdOutlineDriveFileRenameOutline className="text-gray-500" />
                               </div>
                               <input
                                   type="text"
                                   value={Item}
                                   onChange={(e) => setItem(e.target.value)}
                                   placeholder="Enter item name"
                                   className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full pl-10 py-2.5 focus:outline-none focus:ring focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               />
                           </div>
                           <div className="mt-2 relative">
                               <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                   <MdCurrencyRupee className="text-gray-500" />
                               </div>
                               <input
                                   type="number"
                                   value={Amount}
                                   onChange={(e) => setAmount(e.target.value)}
                                   placeholder="Enter amount"
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full pl-10 py-2.5 focus:outline-none focus:ring focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               />
                           </div>
                       </div>
                       <button
                           onClick={addData}
                       
                           type="button"
                           className="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:green-red-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5"
                       >
                           Add
                       </button>
                       <button
                          
                           type="button"
                           onClick={() => setAirPopup(false)}
                           className="py-2.5 px-5 ml-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                       >
                           Cancel
                       </button>
                   </div>
               </div>
           </div>
           
           </div> </>

    )

}

export default UpdateInput;