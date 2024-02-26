import React, { useState, useEffect } from "react";
import Template from "./Template";
import { CiHashtag } from "react-icons/ci";


import { Link } from "react-router-dom";

function Invoice() {
  const [InvoiceNumber, setInvoiceNumber] = useState("");

  const [Dates, setDates] = useState("");

  const [view, setView] = useState(true);
  const [isAddFormView, setAddFormView] = useState(false);


// import React, {  createContext, useContext } from "react";

// const UserContext = createContext();


// <UserContext.Provider > 


// </UserContext.Provider>


  useEffect(() => {
    const current = new Date();
    const date = `${current.getDate()}/${
      current.getMonth() + 1
    }/${current.getFullYear()}`;
    // console.log(`Date is ${date}`);
    setDates(date);
  }, []);

  const Create = () => {
    setView(false);
  };

  return (
    <>
      {view ? (
        <>
          <div className=" flex items-center justify-center w-[100vw] h-[100vh]   ">
            <div className="inline-block  align-bottom bg-white rounded-lg text-left overflow-hidden shadow-lg  transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full  ">
              <div className="bg-gray-50 px-4 pt-4 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex justify-center items-center ">
                  <div className=" text-center  sm:text-left">
                    <h1 class="text-3xl font-semibold flex justify-center items-center  dark:text-white">
                      Welcome to IGO{" "}
                      <span class="bg-blue-100 text-blue-800 text-2xl font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-2">
                        Invoice
                      </span>
                    </h1>
                  </div>
                </div>
              </div>
              <div className=" px-4  ">
                <div className="containers w-[100%] ">
                  <div className="form flex justify-center items-center mt-3  w-[100%] ">
                    <div class="relative  w-[80%] ">
                      <div class=" absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <CiHashtag className="text-gray-500" />
                      </div>
                      <input
                        type="text"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search Invoice Number"
                      />
                    </div>
                  </div>

                  <div className=" flex items-center justify-center">
                    <div className=" overflow-y-scroll w-full h-[300px] items-center justify-center mt-3 ">
                      <div className=" flex items-center mb-2  justify-center ">
                        <div class=" pl-[20px] w-[211px] text-sm font-semibold text-gray-600 dark:text-white">
                          IGO-0001
                        </div>
                        <Link
                          to="/template"
                          class="  w-[135px] ml-4  rounded-lg text-sm px-5 py-2 text-center  text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium   dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                        >
                          {" "}
                          View{" "}
                        </Link>
                      </div>

                      <div className=" flex items-center mb-2  justify-center ">
                        <div class=" pl-[20px] w-[211px] text-sm font-semibold text-gray-600 dark:text-white">
                          IGO-0002
                        </div>
                        <Link
                          to="/template"
                          class="  w-[135px] ml-4  rounded-lg text-sm px-5 py-2 text-center  text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium   dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                        >
                          {" "}
                          View{" "}
                        </Link>
                      </div>

                    </div>
                  </div>

                  <div className="flex items-center justify-center mt-4 mb-3 ">
                    <div class=" pl-[20px] w-[211px] text-md font-normal text-gray-400 dark:text-white">
                      Generate a New Invoice{" "}
                    </div>

                    <button
                      type="button"
                      id="simple-search"
                      onClick={() => setAddFormView(true)}
                      class="text-white h-[42px] ml-4 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                      Add New
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {isAddFormView ? (
            <div className="h-screen w-screen bg-[#000000a6] z-[100]  flex justify-center items-center absolute top-0 left-0">
              <div>
                <div class="relative p-4 w-full  h-full  flex justify-center items-center ">
                  <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div class="p-8  text-center  ">
                      <div class="relative mb-3   ">
                        <div class=" absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                          <CiHashtag className="text-gray-500" />
                        </div>
                        <input
                          type="text"
                          id="simple-search"
                          class="    bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Invoice Number"
                          value={InvoiceNumber}
                          autoFocus={true}
                          onChange={(e) => setInvoiceNumber(e.target.value)}
                          required
                        />
                      </div>

                      <button
                        onClick={Create}
          
                        type="button"
                        class="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:green-red-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                      >
                        Create
                      </button>
                      <button
                   
                        onClick={() => setAddFormView(false)}
                        type="button"
                        class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800
                                         dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </>
      ) : (
        <Template InvoiceNumber={InvoiceNumber} date={Dates} /> 
      )}
    </>
  );
}

export default Invoice;
