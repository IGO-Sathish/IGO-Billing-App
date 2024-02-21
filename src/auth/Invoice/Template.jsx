import ReactPrint from "react-to-print";
import IgoLogo from "../Invoice/Igo.png";
import { MdCurrencyRupee } from "react-icons/md";
import { useRef, useState, useEffect } from "react";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
import { IoTrashOutline } from "react-icons/io5";





function Template(props) {
    const ref = useRef();
    const [openAirPopup, setAirPopup] = useState(false);

    const [Item, setItem] = useState("");
    const [Amount, setAmount] = useState("");

    const [vat, setVat] = useState('')

    const removeFunction = (index) => {
        let Filtered = List.filter((Item, i) => {
            return i !== index;
        });
        setList(Filtered);
    };

    const updatedEditOpenClick = (items, index) => {

        setAirPopup(true);
        setAmount(items.amount);
        setItem(items.product);

    }


    const closePopup = () => {
        setAirPopup(false);
        setAmount("");
        setItem("");

    }


    useEffect(() => {
        console.log(`useEffect is working`);
    }, [vat, Amount])



    const [List, setList] = useState([]);

    const addData = () => {
        List.push({
            product: Item,
            amount: Amount,
        });

        setItem("");
        setAmount("");
        setAirPopup(false);
    };


    let sum = 0;
    List.forEach((amount) => {
        sum += parseInt(amount.amount);
    });





    const onChangeVat = (e) => {
        const vatValue = e.target.value.replace(/\D/g, "");
        const value = vatValue.length > 2 ? vatValue?.substring(0, 2) : vatValue;
        setVat(value)
    }


    let ab = 0;
    function vatOnchange(vat, sum) {
        ab = (sum * vat) / 100;
    }

    let abc = vatOnchange(vat, sum);



    let b = 0;
    function totalFunction(ab, sum) {
        let a = (parseInt(sum)) + (parseInt(ab))
        b = a;
        return b;
    }

    let t = totalFunction(ab, sum)

    return (
        <>
            <div className=" w-full" ref={ref}>
                <div className=" mr-8 ml-8 ">
                    <div className="row">
                        <div>
                            <div className="col-md-12 mt-4">
                                <div className="flex justify-between">
                                    <div className="w-[67%] ">
                                        <div className=" flex  justify-between ">
                                            <div className=" h-[48px] flex justify-center items-center ">
                                                <h2
                                                    className="font-bold  text-[30px] "
                                                    style={{ color: "#000000" }}
                                                >
                                                    INVOICE :{" "}
                                                    <span style={{ color: "#EC842A" }}>
                                                        {" "}
                                                        {props.InvoiceNumber}{" "}
                                                    </span>{" "}
                                                </h2>
                                            </div>


                                        </div>

                                        <h4
                                            className="mt-[12px]  text-sm "
                                            style={{ color: "#325aa8" }}
                                        >
                                            <strong>Payment Details</strong>
                                        </h4>

                                        <p className="flex mt-2 ">
                                            {" "}
                                            <div className="text-gray-400 w-[90px] ">
                                                Bank Name
                                            </div>{" "}
                                            <div className=" w-[10px] text-gray-400">: </div>SBI
                                        </p>
                                        <p className="flex ">
                                            {" "}
                                            <div className="text-gray-400 w-[90px] ">
                                                Account No
                                            </div>{" "}
                                            <div className=" w-[10px] text-gray-400">: </div>{" "}
                                            12345678901114
                                        </p>

                                        <p className="flex  ">
                                            {" "}
                                            <div className="text-gray-400 w-[90px] ">
                                                IFSC Code
                                            </div>{" "}
                                            <div className=" w-[10px] text-gray-400">: </div> 6654
                                            1111 001
                                        </p>
                                        <p className="flex  mb-4">
                                            {" "}
                                            <div className="text-gray-400 w-[90px] ">
                                                Due Date
                                            </div>{" "}
                                            <div className=" w-[10px] text-gray-400">: </div>{" "}
                                            15-Mar-2024
                                        </p>
                                    </div>

                                    <div className="w-[33%]  flex flex-col items-end ">
                                        <div className="  ">
                                            <img
                                                className=" h-[48px]   "
                                                src={IgoLogo}
                                                alt="IgoLogo"
                                            />
                                            <h4
                                                className="mt-[12px] text-sm "
                                                style={{ color: "#325aa8" }}
                                            >
                                                <strong>IGO Solutions Private Limited</strong>
                                            </h4>
                                            <div></div>

                                            <p className="flex mt-2 ">
                                                {" "}
                                                <div className="text-gray-400 w-[25px] ">Em</div>{" "}
                                                <div className=" w-[10px] text-gray-400">: </div>{" "}
                                                info@igosolutions.eu
                                            </p>
                                            <p className="flex ">
                                                {" "}
                                                <div className="text-gray-400 w-[25px] ">Ph</div>{" "}
                                                <div className=" w-[10px] text-gray-400">: </div> (+91)
                                                93423 30496
                                            </p>
                                            <p className="flex ">
                                                {" "}
                                                <div className="text-gray-400 w-[25px] ">Tel</div>{" "}
                                                <div className=" w-[10px] text-gray-400">: </div> (044)
                                                6654 1111
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>
                                                    <h5>List of Items</h5>
                                                </th>
                                                <th>
                                                    <h5>Price</h5>
                                                </th>
                                                <th>
                                                    <h5 className=" text-center">Edit</h5>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {List.length
                                                ? List.map((items, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td className="col-md-9">{items.product}</td>
                                                            <td className="col-md-2">
                                                                <i
                                                                    className="fas fa-rupee-sign"
                                                                    area-hidden="true"
                                                                ></i>{" "}
                                                                ₹ {items.amount}{" "}
                                                            </td>
                                                            <td className="col-md-1">
                                                                <div className=" flex justify-around items-center gap-2 " >
                                                                    <button type="button" onClick={() => updatedEditOpenClick(items, index)} class=" w-[100%] h-[25px] flex justify-center items-center text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600
                                                             dark:hover:text-white dark:hover:bg-gray-700"><MdModeEdit /></button>
                                                                    <button type="button"
                                                                        onClick={() => removeFunction(index)}
                                                                        class=" w-[100%] h-[25px] flex justify-center items-center text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-red-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600
                                                             dark:hover:text-white dark:hover:bg-gray-700"><IoTrashOutline /></button>

                                                                </div>
                                                            </td>
                                                        </tr>
                                                    );
                                                })
                                                : null}
                                            <tr>
                                                <td className="text-right">
                                                    <p>
                                                        <strong className="" >Sub Total </strong>  <strong>: </strong>
                                                    </p>

                                                    <p>

                                                        <strong>VAT</strong>
                                                        <input value={vat} name="Vat" onChange={onChangeVat} className=" w-[22px] text-center " type="tel" placeholder="0" />
                                                        <strong className="mr-1 text-gray-400 " >%  </strong>  <strong>: </strong>
                                                    </p>
                                                </td>
                                                <td>
                                                    <p>
                                                        <strong>
                                                            <i
                                                                className="fas fa-rupee-sign"
                                                                area-hidden="true"
                                                            ></i>
                                                            ₹ {sum}
                                                        </strong>
                                                    </p>

                                                    <p>
                                                        <strong>
                                                            <i
                                                                className="fas fa-rupee-sign"
                                                                area-hidden="true"
                                                            ></i>{" "}
                                                            ₹  {Math.round(ab)}
                                                        </strong>
                                                    </p>
                                                </td>
                                                <td>

                                                </td>
                                            </tr>
                                            <tr style={{ color: "#F81D2D" }}>
                                                <td style={{ color: "#EC842A" }} className="text-right">
                                                    <h4>
                                                        <strong>Total Invoice Amount :</strong>
                                                    </h4>
                                                </td>
                                                <td style={{ color: "#EC842A" }} className="text-left">
                                                    <h4>
                                                        <strong>
                                                            <i
                                                                className="fas fa-rupee-sign"
                                                                area-hidden="true"
                                                            ></i>{" "}
                                                            ₹ {Math.round(b)}{" "}
                                                        </strong>
                                                    </h4>
                                                </td>

                                                <td>

                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="row">
                                    <div className="col-sm-8">
                                        <p className="text-sm ">
                                            <strong> Payment Terms :</strong> Due date for payment is
                                            30 days from the invoice date. <br /> Thank you for your prompt
                                            attention.
                                        </p>
                                    </div>

                                    <div className="col-sm-4 justify-start items-end flex flex-col ">
                                        <p className="text-sm w-[150px] ">
                                            <strong>PO :</strong> #IGO-00123456{" "}
                                        </p>
                                        <p className="text-sm w-[150px]  ">
                                            <strong>Date :</strong> {props.date}{" "}
                                        </p>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" container flex items-center z-10  justify-center gap-3 mt-4 mb-4 ">


                <button

                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-[125px] py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none
                 dark:focus:ring-blue-800"
                    onClick={() => setAirPopup(true)}
                >
                    Add List
                </button>

                <ReactPrint
                    trigger={() => (
                        <button

                            class="py-2.5  w-[125px]   text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100
                 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                        >
                            Print
                        </button>
                    )}
                    content={() => ref.current}
                    documentTitle={`INVOICE ${props.InvoiceNumber}`}
                />
            </div>


            {openAirPopup ?


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
                                    onClick={closePopup}
                                    className="py-2.5 px-5 ml-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
                : null}


        </>
    );
}

export default Template;
