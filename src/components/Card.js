import Link from "next/link";

export default function Card({ smallText, bigText, index, name, href }) {
    return (
        <div className="vstack card-container">
            <div className="card-top-container vstack">
                {/* <div
                style={{
                    width: "100%",
                    aspectRatio: '2/1',
                    background: "#345",
                }}
            /> */}
                <p className="card-text-small">{smallText}</p>
                <p className="card-text-big">{bigText}</p>
            </div>
            <div className="hstack card-footer">
                <p className="card-footer-name card-footer-text">{name}</p>
                {/* FIX THISQ!! */}
                {/* <Link href={href}> */}
                <Link href="services">
                    <a className="hstack card-footer-arrow-container">
                        <p className="card-footer-index card-footer-text">
                            {index}
                        </p>
                        <div className="arrow-spacer"></div>
                        <div className="double-arrow-svg-container">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-6 h-6"
                                style={{
                                    width: "100%",
                                    aspectRatio: 1,
                                }}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                                />
                            </svg>
                        </div>
                    </a>
                </Link>
            </div>
        </div>
    );
}
