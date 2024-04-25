/** @format */

const LinksList = ({ links }) => {
    return (
        <ul>
            {links.map((link, index) => (
                <li key={index}>
                    <a
                        href="/"
                        className="py-3 mb-2 text-white no-underline block  hover:text-btn "
                    >
                        {link}
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default LinksList;
