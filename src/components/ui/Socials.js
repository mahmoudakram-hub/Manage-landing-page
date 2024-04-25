/** @format */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Socials = ({ socials }) => {
    return (
        <ul className="flex justify-center items-centr gap-5">
            {socials.map((logo, index) => (
                <li key={index}>
                    <a
                        href="/"
                        className="no-underline text-slate-50 text-2xl hover:text-btn"
                    >
                        <FontAwesomeIcon icon={logo} />
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default Socials;
