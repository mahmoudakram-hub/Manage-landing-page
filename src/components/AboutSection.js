/** @format */

import SectionComponent from "./ui/SectionComponent";
import backgroundImage from "../assets/images/bg-tablet-pattern.svg";
const content = [
    {
        title: "Track company-wide progress",
        paragraph: ` See how your day-to-day tasks fit into the
                    wider vision. Go from tracking progress at
                    the milestone level all the way done to the
                    smallest of details. Never lose sight of the
                    bigger picture again.`,
    },
    {
        title: "Advanced built-in reports",
        paragraph: `Set internal delivery
        estimates and track progress toward company goals.
        Our customisable dashboard helps you build out the
        reports you need to keep key stakeholders informed.`,
    },
    {
        title: "Everything you need in one place",
        paragraph: ` Stop jumping from
        one service to another to communicate, store files,
        track tasks and share documents. Manage offers an
        all-in-one team productivity solution.`,
    },
];
const AboutSection = () => {
    return (
        <div className="about pt-10 pb-20 relative">
            <div className=" absolute md:w-[1000px]  md:left-[-442px] md:bottom-[-400px] w-full left-[-100px] bottom-[-100px]  -z-10 ">
                <img
                    src={backgroundImage}
                    alt="bacground"
                    className=" w-full"
                ></img>
            </div>
            <SectionComponent flexAlign="items-start" reverse={false}>
                <div className="description lg:text-start text-center mb-16 lg:mb-0">
                    <h2 className=" text-[40px] text-darkBlue mb-9 font-bold">
                        What’s different about Manage?
                    </h2>
                    <p className=" text-darkGrayishBlue text-[20px]">
                        Manage provides all the functionality your team needs,
                        without the complexity. Our software is tailor-made for
                        modern digital product teams.
                    </p>
                </div>
                <div className="feature-list w-fit ">
                    <ul>
                        {content.map((element, index) => {
                            return (
                                <li
                                    className=" flex gap-8 text-start mb-10"
                                    key={index}
                                >
                                    <span className=" block bg-btn rounded-3xl w-fit py-2 px-6 text-white font-bold h-fit">
                                        0{index + 1}
                                    </span>
                                    <div>
                                        <h2 className=" text-darkBlue mb-5 font-bold mt-3">
                                            {element.title}
                                        </h2>
                                        <p className="text-darkGrayishBlue leading-6 text-[18px]">
                                            {element.paragraph}
                                        </p>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </SectionComponent>
        </div>
    );
};

export default AboutSection;
