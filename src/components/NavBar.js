/** @format */

import logo from "../assets/images/logo.svg";
import closeMenue from "../assets/images/icon-close.svg";
import openMenue from "../assets/images/icon-hamburger.svg";
import { useState } from "react";
import Button from "./ui/Button";

const NavBar = () => {
    const [isMenuepen, setIsMenuOpen] = useState(false);
    function handeMenu() {
        setIsMenuOpen((prev) => !prev);
    }

    window.addEventListener("resize", () => {
        setIsMenuOpen(false);
    });
    return (
        <div className="nav-bar relative">
            <div className="container flex h-24 justify-between items-center ">
                <div className="logo w-32">
                    <img src={logo} alt="logo" className="w-full" />
                </div>
                <div
                    className={`${
                        isMenuepen ? "block" : "hidden"
                    } lg:block fixed lg:relative lg:w-fit lg:bg-transparent left-0 top-0  text-right w-full h-full lg:from-[transparent] lg:to-[transparent] bg-gradient-to-b from-[#0000] to-[#000000c9]`}
                >
                    <button
                        className=" lg:hidden mb-10 mt-14  mr-9 ml-aut "
                        onClick={handeMenu}
                    >
                        <img src={closeMenue} alt="close menue" />
                    </button>
                    <ul
                        className={`flex gap-2 bg-white lg:flex-row flex-col lg:w-fit w-[300px] mx-auto rounded-xl lg:rounded-none`}
                    >
                        <li>
                            <a
                                href="/"
                                className=" relative before:block before:w-0 before:h-[2px] before:bottom-0 before:left-0 before:absolute before:bg-btn before:hover:w-full before:transition-all   lg:w-[100px] w-full h-[80px] flex justify-center items-center text-darkBlue hover:text-darkGrayishBlue"
                            >
                                Pricing
                            </a>
                        </li>
                        <li>
                            <a
                                href="/"
                                className=" relative before:block before:w-0 before:h-[2px] before:bottom-0 before:left-0 before:absolute before:bg-btn before:hover:w-full before:transition-all lg:w-[100px] w-full h-[80px] flex justify-center items-center text-darkBlue hover:text-darkGrayishBlue"
                            >
                                Product
                            </a>
                        </li>
                        <li>
                            <a
                                href="/"
                                className=" relative before:block before:w-0 before:h-[2px] before:bottom-0 before:left-0 before:absolute before:bg-btn before:hover:w-full before:transition-all lg:w-[100px] w-full h-[80px] flex justify-center items-center text-darkBlue hover:text-darkGrayishBlue"
                            >
                                About Us
                            </a>
                        </li>
                        <li>
                            <a
                                href="/"
                                className=" relative before:block before:w-0 before:h-[2px] before:bottom-0 before:left-0 before:absolute before:bg-btn before:hover:w-full before:transition-all lg:w-[100px] w-full h-[80px] flex justify-center items-center text-darkBlue hover:text-darkGrayishBlue"
                            >
                                Careers
                            </a>
                        </li>
                        <li>
                            <a
                                href="/"
                                className=" relative before:block before:w-0 before:h-[2px] before:bottom-0 before:left-0 before:absolute before:bg-btn before:hover:w-full before:transition-all lg:w-[100px] w-full h-[80px] flex justify-center items-center text-darkBlue hover:text-darkGrayishBlue"
                            >
                                Community
                            </a>
                        </li>
                    </ul>
                </div>
                <Button className="hidden lg:block bg-btn text-white">
                    Get Started
                </Button>
                <button
                    className={`${
                        isMenuepen ? "scale-0" : " scale-100"
                    } lg:hidden transition-all`}
                    onClick={handeMenu}
                >
                    <img src={openMenue} alt="close menue" />
                </button>
            </div>
        </div>
    );
};

export default NavBar;
