import { useRouter } from "next/router";
import Link from "next/link";
import { Fragment, useState } from "react";
import Image from "next/image";

const navigationRoutes = ["home", "services", "apply", "contact"];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const router = useRouter();
    return (
        <Fragment>
            <header className="navbar">
                <Link href="/">
                    <a className="header-logo-container vstack">
                        <div className="logo">PHOENIX</div>
                        <div className="logo-subtitle">
                            Construction Resources Inc.
                        </div>
                    </a>
                </Link>
                <HamburgerButton setOpen={setOpen} />
                <nav
                    className="hstack show-in-desktop"
                    style={{
                        justifyContent: "end",
                        height: "100%",
                        alignItems: "center",
                    }}
                >
                    {navigationRoutes.map((singleRoute) => {
                        return (
                            <Fragment key={singleRoute}>
                                <NavigationLink
                                    setOpen={setOpen}
                                    href={`/${singleRoute}`}
                                    text={singleRoute}
                                    router={router}
                                />
                            </Fragment>
                        );
                    })}
                    <a
                        className="linkedin-button"
                        href="https://www.linkedin.com/company/phoenix-construction-resources/about/"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            width="26"
                            height="26"
                            viewBox="0 0 192 192"
                        >
                            {
                                <g
                                    fill="none"
                                    fillRule="nonzero"
                                    stroke="none"
                                    strokeWidth="1"
                                    strokeLinecap="butt"
                                    strokeLinejoin="miter"
                                    strokeMiterlimit="10"
                                    strokeDasharray=""
                                    strokeDashoffset="0"
                                    fontFamily="none"
                                    fontWeight="none"
                                    fontSize="none"
                                    textAnchor="none"
                                >
                                    <path
                                        d="M0,192v-192h192v192z"
                                        fill="none"
                                    ></path>
                                    <g fill="#ffffff">
                                        <g id="surface1">
                                            <path d="M156,0h-120c-19.875,0 -36,16.125 -36,36v120c0,19.875 16.125,36 36,36h120c19.875,0 36,-16.125 36,-36v-120c0,-19.875 -16.125,-36 -36,-36zM59.36539,162.98077h-29.82693l-0.17307,-89.30769h29.82692zM43.70192,61.99038h-0.17308c-9.75,0 -16.03846,-6.72115 -16.03846,-15.08653c0,-8.56731 6.49039,-15.0577 16.41347,-15.0577c9.92308,0 16.00961,6.49038 16.21153,15.0577c0,8.36538 -6.31731,15.08653 -16.41346,15.08653zM162.77885,162.98077h-30.08654v-48.51923c0,-11.74039 -3.11538,-19.73077 -13.61538,-19.73077c-8.01923,0 -12.34615,5.39423 -14.42308,10.61538c-0.77885,1.875 -0.98077,4.44231 -0.98077,7.06731v50.56731h-30.23077l-0.17308,-89.30769h30.23077l0.17308,12.60577c3.86538,-5.97116 10.29808,-14.42308 25.70192,-14.42308c19.09616,0 33.37501,12.46154 33.37501,39.25961v51.86539z"></path>
                                        </g>
                                    </g>
                                </g>
                            }
                        </svg>
                    </a>
                </nav>
            </header>
            <button
                style={{
                    position: "fixed",
                    top: 0,
                    zIndex: 10,
                    width: "100vw",
                    opacity: open ? "100%" : "0%",
                    transform: open ? "translateX(0)" : "translateX(100vw)",
                    transition: "0.3s opacity ease",
                    background: "#fff2",
                    height: "100vh",
                }}
                onClick={() => {
                    setOpen(false);
                }}
            ></button>
            <nav
                className="nav-dropdown-container"
                style={{
                    position: "fixed",
                    top: 0,
                    zIndex: 10,
                    right: 0,
                    display: "flex",
                    flexDirection: "column",
                    height: "100vh",
                    transition: "0.3s all ease",
                    transform: open ? "translateX(0)" : "translateX(100vw)",
                    alignItems: "end",
                }}
            >
                <button
                    className="close-button"
                    onClick={() => {
                        setOpen(false);
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="#fff"
                        className="w-6 h-6"
                        style={{
                            height: "2rem",
                        }}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
                <ul
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        height: "100vh",
                        paddingTop: "4rem",
                    }}
                >
                    {navigationRoutes.map((singleRoute) => {
                        return (
                            <Fragment key={singleRoute}>
                                <NavigationLink
                                    setOpen={setOpen}
                                    href={`/${singleRoute}`}
                                    text={singleRoute}
                                    router={router}
                                />
                            </Fragment>
                        );
                    })}
                </ul>
            </nav>
        </Fragment>
    );
}

function NavigationLink({ href, text, router, setOpen }) {
    const isActive = router.asPath === (href === "/home" ? "/" : href);
    return (
        <Link href={href === "/home" ? "/" : href} passHref>
            <a
                href={href === "/home" ? "/" : href}
                className={isActive ? "nav-bar-text nav-bar-text-active" : "nav-bar-text"}
                onClick={() => {
                    setOpen(false);
                }}
            >
                {/* {text.charAt(0).toUpperCase() + text.slice(1)} */}
                {text.toUpperCase()}
            </a>
        </Link>
    );
}

function HamburgerButton({ setOpen }) {
    return (
        <button
            className="hamburger-button-container dont-show-in-desktop"
            onClick={() => {
                setOpen((prevOpen) => !prevOpen);
            }}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#fff"
                className="w-6 h-6"
                style={{
                    height: "2.6rem",
                }}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
            </svg>
        </button>
    );
}
