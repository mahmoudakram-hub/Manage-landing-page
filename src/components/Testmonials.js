/** @format */

import { SwiperSlide } from "swiper/react";
import ali from "../assets/images/avatar-ali.png";
import anisha from "../assets/images/avatar-anisha.png";
import richard from "../assets/images/avatar-richard.png";
import shanai from "../assets/images/avatar-shanai.png";
import Button from "./ui/Button";
import TestmonialsSlider from "./ui/TestmonialsSlider";
const comments = [
    {
        name: "Anisha Li",
        commentText: `“Manage has supercharged our team’s workflow. The ability to
        maintain visibility on larger milestones at all times keeps
        everyone motivated.”`,
        image: anisha,
    },
    {
        name: "Ali Bravo",
        commentText: `“We have been able to cancel so many other subscriptions since using 
        Manage. There is no more cross-channel confusion and everyone is much 
        more focused.”`,
        image: ali,
    },
    {
        name: "Richard Watts",
        commentText: `“Manage allows us to provide structure and process. It keeps us organized 
        and focused. I can’t stop recommending them to everyone I talk to!”`,
        image: richard,
    },
    {
        name: "Shanai Gough",
        commentText: `“Their software allows us to track, manage and collaborate on our projects 
        from anywhere. It keeps the whole team in-sync without being intrusive.”`,
        image: shanai,
    },
];

const Testmonials = () => {
    return (
        <div
            className={`testmonials text-center relative overflow-hidden pb-10`}
        >
            <h2 className="text-[35px] text-darkBlue mb-9 font-bold">
                What they’ve said
            </h2>
            <TestmonialsSlider>
                {comments.map((comment, index) => (
                    <SwiperSlide className="w-3/4" key={index}>
                        <div
                            className={`comment-box  bg-veryLightGray p-5 pt-14 text-center relative transition-all`}
                        >
                            <img
                                src={comment.image}
                                alt="avatar"
                                className=" w-24 block mx-auto mb-6 rounded-full "
                            />
                            <h3 className=" text-darkBlue font-bold mb-5">
                                {comment.name}
                            </h3>
                            <p className=" text-darkGrayishBlue">
                                {comment.commentText}
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </TestmonialsSlider>
            <Button className="bg-btn text-white"> Get Started</Button>
        </div>
    );
};

export default Testmonials;
