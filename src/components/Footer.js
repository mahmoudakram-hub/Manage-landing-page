/** @format */
//hooks
import { useState } from "react";
//components
import Socials from "./ui/Socials";
import LinksList from "./ui/LinksList";
import Button from "./ui/Button";

// imports for ui data
import {
    faFacebook,
    faPinterest,
    faYoutube,
    faTwitter,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../assets/images/logo.svg";

//make the data in a arrays
const socials = [faFacebook, faInstagram, faYoutube, faPinterest, faTwitter];
const footerNavLinks = ["Home", "Pricing", "Products", "About Us"];
const infoNavLinks = ["Careere", "Community", "Privacy Policy"];

const Footer = () => {
    const [isInvalid, setIsInvalid] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        const email = event.target.email.value;
        if (!email.includes("@") || email.trim() === "") {
            setIsInvalid(true);
        } else {
            setIsInvalid(false);
        }
    }
    return (
        <div className="footer bg-veryDarkBlue py-9">
            <div className="container flex justify-between lg:flex-row flex-col items-center text-center gap-9">
                <div className=" h-44 flex flex-col justify-between items-center">
                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <Socials socials={socials} />
                </div>
                <div>
                    <LinksList links={footerNavLinks} />
                </div>
                <div>
                    <LinksList links={infoNavLinks} />
                </div>
                <div className="flex flex-col justify-between items-start gap-6">
                    <form
                        className="flex gap-2 flex-wrap justify-center"
                        onSubmit={handleSubmit}
                    >
                        <div>
                            <input
                                type="text"
                                placeholder="Updates in your inbox…"
                                className=" pl-3 rounded-[32px] w-[250px] h-16 mb-3"
                                name="email"
                            />
                            {isInvalid && (
                                <p className="text-red-500">
                                    insert valid email
                                </p>
                            )}
                        </div>
                        <Button className="bg-btn text w-20 h-16 rounded-[32px] text-white font-bold">
                            Go
                        </Button>
                    </form>
                    <p className="text-darkGrayishBlue">
                        Copyright 2020. All Rights Reserved
                    </p>
                </div>
            </div>
            <div className="text-center font-bold text-darkGrayishBlue text-3xl  mt-7">
                Challenge by
                <a
                    href="https://www.frontendmentor.io?ref=challenge"
                    target="_blank"
                    rel="noreferrer"
                    className="text-btn hover:btnHover"
                >
                    Frontend Mentor
                </a>
                . Coded by
                <a
                    href="http://www.linkedin.com/in/mahmoud-akram-77287b188"
                    target="_blank"
                    rel="noreferrer"
                    className="text-btn hover:btnHover "
                >
                    Mahmoud Akram
                </a>
                .
            </div>
        </div>
    );
};

export default Footer;
