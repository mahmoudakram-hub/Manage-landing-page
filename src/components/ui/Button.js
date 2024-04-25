/** @format */

export default function Button({ children, className }) {
    return (
        <button
            className={`border-none rounded-3xl h-10 w-40 tracking-wide  hover:bg-btnHover ${className}`}
        >
            {children}
        </button>
    );
}
