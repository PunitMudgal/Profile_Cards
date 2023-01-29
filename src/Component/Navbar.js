import React from "react";

export default function Navbar() {
    return (
        <header className=" flex justify-between items-center h-16 w-full bg-orange-400">
            <a className="ml-5 md:ml-9 mr-10 font-bold text-lg" href="/">Profile Cards</a>

            {/* <div className="font-semibold ">
                <a href="/" className="mx-3 md:mx-6 hover:font-bold md:p-2 rounded-md hover:bg-orange-500" >About</a>
                <a href="/" className="mx-3 md:mx-6 hover:font-bold md:p-2 rounded-md hover:bg-orange-500" >Favorites</a>
                <a href="/" className="mx-3 md:mx-6 hover:font-bold md:p-2 rounded-md hover:bg-orange-500" >Credits</a>
                <a href="/" className="mx-3 md:mx-6 hover:font-bold md:p-2 rounded-md  focus:outline-none disabled:opacity-50 hover:bg-orange-500" >Contact Us</a>
            </div> */}
        </header>
    )
}

