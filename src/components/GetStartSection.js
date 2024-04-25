/** @format */
import Button from "../components/ui/Button";
const GetStartSection = () => {
    return (
        <div className="get-start bg-btn py-20">
            <div className="container flex lg:flex-row flex-col text-center lg:text-left items-center justify-between ">
                <p className="text-white font-bold text-4xl lg:w-[450px] w-[300px] lg:mb-0 mb-20">
                    Simplify how your team works today.
                </p>
                <Button className="bg-white text-btn hover:bg-white hover:text-btnHover">
                    Get Started
                </Button>
            </div>
        </div>
    );
};

export default GetStartSection;
