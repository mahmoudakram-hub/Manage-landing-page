/** @format */

export default function SectionComponent({ children, flexAlign, reverse }) {
    return (
        <div
            className={` container flex ${
                reverse ? "flex-col-reverse" : "flex-col"
            } sm:${flexAlign} lg:flex-row text-center gap-3 justify-around pt-14`}
        >
            {children}
        </div>
    );
}
