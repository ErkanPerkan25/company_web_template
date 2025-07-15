import {useState} from "react"

function ProductFilter(){

    return(
        <div className="w-80 border-1 rounded-sm p-3">
            <h2 className="">FILTER BY</h2>
            <div>
                <div>
                    <div className="sr-only">
                        <span className="">Products</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                        </svg>
                    </div>

                    <div>
                    </div>
                    
                </div>
                <div>
                    <div className="sr-only">
                        <span className="">Availability</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                        </svg>
                    </div>

                    <div className="flex flex-col">
                        <div className="m-1">
                            <input className="mr-2" type="checkbox"/>
                            <label>In Stock</label>
                        </div>

                        <div className="m-1">
                            <input className="mr-2" type="checkbox"/>
                            <label>Limited Stock</label>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductFilter;
