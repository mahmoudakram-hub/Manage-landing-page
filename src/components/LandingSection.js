/** @format */
import NavBar from "./NavBar.js";
import laningImg from "../assets/images/illustration-intro.svg";
import Button from "./ui/Button.js";
import SectionComponent from "./ui/SectionComponent.js";
const LandingSection = () => {
    return (
        <div className="Landing lg:h-screen ">
            <NavBar />
            <SectionComponent flexAlign="items-center" reverse={true}>
                <div className="Landing-content w-full lg:w-[400px]">
                    <h1 className=" md:text-5xl text-4xl  -60 font-bold text-darkBlue mb-10">
                        Bring everyone together to build better products.
                    </h1>
                    <p className=" text-darkGrayishBlue mb-10">
                        Manage makes it simple for software teams to plan
                        day-to-day tasks while keeping the larger team goals in
                        view.
                    </p>
                    <Button className="bg-btn text-white">Get Started</Button>
                </div>
                <div className="Landing-img grow lg:grow-0">
                    <img src={laningImg} alt="landing" />
                </div>
            </SectionComponent>
        </div>
    );
};
export default LandingSection;
