import Image from "next/image";
import Link from "next/link";
import BulletPointSmall from "../components/BulletPointSmall";
import Card from "../components/Card";
import NumberedBullet from "../components/NumberedBullet";
import NumberedList from "../components/NumberedList";
import { NextSeo } from "next-seo";
import { useEffect, useState } from "react";
import ImageCard from "../components/ImageCard";

// function Home() {
//     const [preLoaded, setPreLoaded] = useState(true);
//     const [index, setIndex] = useState(0);

//     useEffect(() => {
//         setPreLoaded(false);
//     }, []);

//     const d = 0.3;
//     const slide = 1.4;

//     return (
//         <main
//             style={{
//                 display: "flex",
//                 flexDirection: "column",
//                 width: "100vw",
//                 background: "#111",
//                 overflowX: "hidden",
//             }}
//         >
//             <NextSeo
//                 title="Hire Construction Labourers in New England | PHOENIX"
//                 description="This is a demo description"
//                 canonical="https://www.example.com"
//                 openGraph={{
//                     url: "https://www.example.com",
//                     title: "Open Graph Title",
//                     description: "Open Graph Description",
//                     images: [
//                         {
//                             url: "https://www.example.com/og-image01.jpg",
//                             width: 800,
//                             height: 600,
//                             alt: "Og Image Alt",
//                             type: "image/jpeg",
//                         },
//                         {
//                             url: "https://www.example.com/og-image02.jpg",
//                             width: 900,
//                             height: 800,
//                             alt: "Og Image Alt Second",
//                             type: "image/jpeg",
//                         },
//                         { url: "https://www.example.com/og-image03.jpg" },
//                         { url: "https://www.example.com/og-image04.jpg" },
//                     ],
//                     site_name: "YourSiteName",
//                 }}
//                 twitter={{
//                     handle: "@handle",
//                     site: "@site",
//                     cardType: "summary_large_image",
//                 }}
//             />
//             <div
//                 style={{
//                     display: "flex",
//                     flexDirection: "column",
//                     justifyContent: "center",
//                     height: "100vh",
//                 }}
//             >
//                 <div
//                     style={{
//                         display: "flex",
//                         flexDirection: "row",
//                         alignItems: "center",
//                         height: "100vh",
//                         width: "100vw",
//                         // paddingRight: "5vw",
//                     }}
//                 >
//                     <h1
//                         style={{
//                             letterSpacing: "0.04em",
//                             fontWeight: "800",
//                             fontSize: "6.8vw",
//                             margin: "0",
//                             lineHeight: "0.75em",
//                             writingMode: "vertical-lr",
//                             transform: "rotate(180deg)",
//                             color: "#4B4B4B",
//                             opacity: preLoaded ? "0%" : "100%",
//                             transition: "1s ease",
//                         }}
//                     >
//                         FERNANDO
//                     </h1>
//                     <div
//                         style={{
//                             width: "1px",
//                             background: "#5B5B5B",
//                             marginLeft: "2.8vw",
//                             height: "100vh",
//                             transformOrigin: "center bottom",
//                             transform: preLoaded ? "scaleY(0)" : "scaleY(1)",
//                             transition: `${slide}s ease`,
//                             transitionDelay: `${d}s`,
//                         }}
//                     ></div>
//                     <div
//                         style={{
//                             display: "flex",
//                             flexDirection: "row",
//                             height: "40vw",
//                             width: "100%",
//                         }}
//                     >
//                         <div
//                             style={{
//                                 display: "flex",
//                                 flexDirection: "column",
//                                 justifyContent: "flex-end",
//                                 width: "100%",
//                             }}
//                         >
//                             <h2
//                                 style={{
//                                     letterSpacing: "0.5em",
//                                     fontWeight: "200",
//                                     fontSize: "2.6vw",
//                                     margin: "0",
//                                     lineHeight: "0.8em",
//                                     marginLeft: "2.8vw",
//                                     // transform: preLoaded
//                                     //     ? "translateY(-100vh)"
//                                     //     : "translateY(0)",
//                                     //     opacity: preLoaded
//                                     //         ? "0%"
//                                     //         : "100%",
//                                     // transition: `3s ease`,
//                                     // transitionDelay: `${d + 0}s`,
//                                     opacity: preLoaded ? "0%" : "100%",
//                                     transition: "1s ease",
//                                 }}
//                             >
//                                 PHOTOGRAPHER
//                             </h2>

//                             <div
//                                 style={{
//                                     display: "flex",
//                                     flexDirection: "row",
//                                     gap: "1vw",
//                                     marginTop: "1.5vw",
//                                     marginLeft: "2.8vw",
//                                 }}
//                             >
//                                 <div
//                                     style={{
//                                         display: "flex",
//                                         flexDirection: "row",
//                                         background: "#FF4C41",
//                                         paddingBlock: "0.3vw",
//                                         paddingInline: "2.4vw",
//                                         gap: "0.4vw",
//                                         alignItems: "center",
//                                         fontFamily: "Share Tech Mono",
//                                         fontSize: "1.2vw",
//                                         // background: "#fff",
//                                         // boxShadow: '4px 4px 0px 0px #FF4C41',
//                                         color: "black",
//                                         background: "#30ffa1",
//                                         // transform: preLoaded
//                                         //     ? "translateY(-100vh)"
//                                         //     : "translateY(0)",
//                                         // opacity: preLoaded
//                                         // ? "0%"
//                                         // : "100%",
//                                         // transition: `3s ease`,
//                                         // transitionDelay: `${d}s`,
//                                         opacity: preLoaded ? "0%" : "100%",
//                                         transition: "1s ease",
//                                     }}
//                                 >
//                                     <div>book me.</div>
//                                     <div style={{ height: "2vw" }}>
//                                         <svg
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             fill="none"
//                                             viewBox="0 0 24 24"
//                                             strokeWidth={1}
//                                             stroke="currentColor"
//                                             className="w-6 h-6"
//                                             style={{
//                                                 height: "100%",
//                                             }}
//                                         >
//                                             <path
//                                                 strokeLinecap="round"
//                                                 strokeLinejoin="round"
//                                                 d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
//                                             />
//                                         </svg>
//                                     </div>
//                                 </div>
//                                 <div
//                                     style={{
//                                         display: "flex",
//                                         flexDirection: "row",
//                                         background: "#FF4C41",
//                                         paddingBlock: "0.3vw",
//                                         paddingInline: "2.4vw",
//                                         gap: "0.4vw",
//                                         alignItems: "center",
//                                         fontFamily: "Share Tech Mono",
//                                         fontSize: "1.2vw",
//                                         // boxShadow: '4px 4px 0px 0px #FF4C41',
//                                         // background: "#fff",
//                                         color: "black",
//                                         background: "#30ffa1",
//                                         // transform: preLoaded
//                                         //     ? "translateY(-100vh)"
//                                         //     : "translateY(0)",
//                                         // opacity: preLoaded
//                                         // ? "0%"
//                                         // : "100%",
//                                         // transition: `3s ease`,
//                                         // transitionDelay: `${d}s`,
//                                         opacity: preLoaded ? "0%" : "100%",
//                                         transition: "1s ease",
//                                     }}
//                                 >
//                                     <div>my story.</div>
//                                     <div style={{ height: "2vw" }}>
//                                         <svg
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             fill="none"
//                                             viewBox="0 0 24 24"
//                                             strokeWidth={1}
//                                             stroke="currentColor"
//                                             className="w-6 h-6"
//                                             style={{
//                                                 height: "100%",
//                                             }}
//                                         >
//                                             <path
//                                                 strokeLinecap="round"
//                                                 strokeLinejoin="round"
//                                                 d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
//                                             />
//                                         </svg>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div
//                                 style={{
//                                     height: "1px",
//                                     marginBlock: "1.8vw",
//                                     position: "relative",
//                                 }}
//                             >
//                                 <div
//                                     style={{
//                                         height: "1px",
//                                         background: "#5B5B5B",
//                                         width: "100vw",
//                                         position: "absolute",
//                                         transformOrigin: "right center",
//                                         transform: preLoaded
//                                             ? "scaleX(0)"
//                                             : "scaleX(1)",
//                                         transition: `${slide}s ease`,
//                                         transitionDelay: `${d}s`,
//                                     }}
//                                 ></div>
//                             </div>

//                             <div
//                                 style={{
//                                     display: "flex",
//                                     flexDirection: "row",
//                                     justifyContent: "space-between",
//                                     gap: "1vw",
//                                     paddingInline: "2.8vw",
//                                 }}
//                             >
//                                 <LocationCard
//                                     abr={"BOS."}
//                                     loc={"Boston, Mass"}
//                                     href={"/boston-b.jpg"}
//                                     delay={0}
//                                     preLoaded={preLoaded}
//                                 />
//                                 <LocationCard
//                                     abr={"HTX."}
//                                     loc={"Houston, Texas"}
//                                     href={"/houston-b.jpg"}
//                                     delay={0.1}
//                                     preLoaded={preLoaded}
//                                 />
//                                 <LocationCard
//                                     abr={"SFO."}
//                                     loc={"San Fran, Cali"}
//                                     href={"/goldengate-b.jpg"}
//                                     delay={0.2}
//                                     preLoaded={preLoaded}
//                                 />
//                             </div>
//                         </div>
//                         <div
//                             style={{
//                                 display: "flex",
//                                 overflow: "hidden",
//                                 maxWidth: "40vw",
//                             }}
//                         >
//                             <div
//                                 style={{
//                                     display: "flex",
//                                     flexDirection: "row",
//                                     transform: `translateX(${index * -45.4}vw)`,
//                                     transition: "0.6s ease",
//                                     // background: '#742',
//                                 }}
//                             >
//                                 <PhotoCard
//                                     href={"/jackedarm.png"}
//                                     index={"001"}
//                                     name={"bmw | KSH3N"}
//                                     color={"#242329"}
//                                     isDark={true}
//                                     preLoaded={preLoaded}
//                                 />
//                                 <PhotoCard
//                                     href={"/techsuit.png"}
//                                     index={"002"}
//                                     name={"techware | GUREIFOKKUSU"}
//                                     color={"#0D0E13"}
//                                     isDark={true}
//                                     preLoaded={preLoaded}
//                                 />
//                                 <PhotoCard
//                                     href={"/angel.png"}
//                                     index={"003"}
//                                     name={"angel in white"}
//                                     color={"#EDF8F2"}
//                                     isDark={true}
//                                     preLoaded={preLoaded}
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div
//                 style={{
//                     display: "flex",
//                     flexDirection: "row",
//                     alignItems: "center",
//                     position: "absolute",
//                     height: "100vh",
//                     justifyContent: "end",
//                     paddingRight: "1.1vw",
//                     gap: "37.5vw",
//                     width: "100vw",
//                 }}
//             >
//                 <button
//                     style={{
//                         height: "2.4vw",
//                         opacity: index == 0 ? "0%" : "100%",
//                         transition: "0.6s ease",
//                     }}
//                     onClick={() => {
//                         if (index == 2) {
//                             setIndex(1);
//                         }
//                         if (index == 1) {
//                             setIndex(0);
//                         }
//                     }}
//                 >
//                     <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         strokeWidth={1.5}
//                         stroke="currentColor"
//                         className="w-6 h-6"
//                         style={{
//                             height: "100%",
//                         }}
//                     >
//                         <path
//                             // strokeLinecap="round"
//                             // strokeLinejoin="round"
//                             d="M15.75 19.5L8.25 12l7.5-7.5"
//                         />
//                     </svg>
//                 </button>

//                 <button
//                     style={{
//                         height: "2.4vw",
//                         opacity: index == 2 ? "0%" : "100%",
//                         transition: "0.6s ease",
//                     }}
//                     onClick={() => {
//                         if (index == 0) {
//                             setIndex(1);
//                         }
//                         if (index == 1) {
//                             setIndex(2);
//                         }
//                     }}
//                 >
//                     <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         strokeWidth={1.5}
//                         stroke="currentColor"
//                         className="w-6 h-6"
//                         style={{
//                             height: "100%",
//                         }}
//                     >
//                         <path
//                             // strokeLinecap="round"
//                             // strokeLinejoin="round"
//                             d="M8.25 4.5l7.5 7.5-7.5 7.5"
//                         />
//                     </svg>
//                 </button>
//             </div>
//             <div
//                 style={{
//                     display: "flex",
//                     flexirection: "row",
//                 }}
//             >
//                 <h1
//                     style={{
//                         letterSpacing: "0.04em",
//                         fontWeight: "800",
//                         fontSize: "6.8vw",
//                         margin: "0",
//                         lineHeight: "0.75em",
//                         writingMode: "vertical-lr",
//                         transform: "rotate(180deg)",
//                         color: "#4B4B4B",
//                         opacity: "0%",
//                         transition: "1s ease",
//                     }}
//                 >
//                     i
//                 </h1>
//                 <div
//                     style={{
//                         width: "1px",
//                         height: "3vw",
//                         marginLeft: "2.8vw",
//                         background: "#5B5B5B",
//                     }}
//                 ></div>
//             </div>

//             <div
//                 style={{
//                     width: "100vw",
//                     height: "1px",
//                     background: "#5B5B5B",
//                 }}
//             ></div>
//                                         <h2
//                                 style={{
//                                     letterSpacing: "0.5em",
//                                     fontWeight: "200",
//                                     fontSize: "2.6vw",
//                                     margin: "0",
//                                     lineHeight: "0.8em",
//                                     marginLeft: "8vw",
//                                     // transform: preLoaded
//                                     //     ? "translateY(-100vh)"
//                                     //     : "translateY(0)",
//                                     //     opacity: preLoaded
//                                     //         ? "0%"
//                                     //         : "100%",
//                                     // transition: `3s ease`,
//                                     // transitionDelay: `${d + 0}s`,
//                                     opacity: preLoaded ? "0%" : "100%",
//                                     transition: "1s ease",
//                                     marginTop: '3vw',
//                                 }}
//                             >
//                                 PORTFOLIO
//                             </h2>
//             <div
//                 style={{
//                     display: "grid",
//                     gridTemplateColumns: "auto auto auto",
//                     paddingBlock: "6vw",
//                     paddingInline: "8vw",
//                     rowGap: "1vw",
//                     columnGap: "1vw",
//                     // background: '#000',
//                 }}
//             >
{
    /* <ImageCard href={"/angel.png"} />
<ImageCard href={"/techsuit.png"} />
<ImageCard href={"/jackedarm.png"} />
<ImageCard href={"/pic1.png"} />
<ImageCard href={"/pic2.png"} />
<ImageCard href={"/pic3.png"} />
<ImageCard href={"/pic4.png"} />
<ImageCard href={"/pic5.png"} />
<ImageCard href={"/pic6.png"} />
<ImageCard href={"/pic7.png"} />
<ImageCard href={"/pic8.png"} />
<ImageCard href={"/pic9.png"} /> */
}
//             </div>
//         </main>
//     );
// }

// export default Home;

// function LocationCard({ abr, loc, href, delay, preLoaded }) {
//     const c = "#1b1b1b";
//     const d = 0;
//     const slide = 0.6;
//     return (
// <div
//     style={{
//         display: "flex",
//         flexDirection: "row",
//         padding: "0.6vw",
//         gap: "0.5vw",
//         background: c,
//         width: "100%",
//         // transform: preLoaded ? "translateY(100vh)" : "translateY(0)",
//         // transition: `${slide}s ease`,
//         // transitionDelay: `${d + delay}s`,
//         opacity: preLoaded ? "0%" : "100%",
//         transition: "1s ease",
//     }}
// >
//     <div
//         style={{
//             transform: "rotate(180deg)",
//             fontSize: "4.8vw",
//             fontWeight: "800",
//             writingMode: "vertical-lr",
//             lineHeight: "0.8em",
//             color: "#4B4B4B",
//         }}
//     >
//         {abr}
//     </div>
//     <div
//         style={{
//             display: "flex",
//             flexDirection: "column",
//             gap: "0.4vw",
//             alignItems: "flex-end",
//             width: "100%",
//         }}
//     >
//         <div
//             style={{
//                 lineHeight: "1em",
//                 fontFamily: "Share Tech Mono",
//                 fontSize: "0.9vw",
//             }}
//         >
//             {loc}
//         </div>
//         <div
//             style={{
//                 width: "100%",
//                 height: "100%",
//                 position: "relative",
//             }}
//         >
//             <Image
//                 src={href}
//                 alt="test"
//                 layout="fill"
//                 objectFit="cover"
//                 sizes="12vw"
//                 priority
//                 style={{
//                     mixBlendMode: "lighten",
//                 }}
//             />
//         </div>
//     </div>
// </div>
//     );
// }

// function PhotoCard({ name, index, href, color, isDark, preLoaded }) {
//     return (
// <div
//     style={{
//         display: "flex",
//         flexDirection: "row",
//         zIndex: 1,
//         border: "1px solid #5B5B5B",
//         marginRight: "10vw",
//         opacity: preLoaded ? "0%" : "100%",
//         transition: "1s ease",
//     }}
// >
//     <div
//         style={{
//             height: "100%",
//             aspectRatio: "62/78",
//             position: "relative",
//             background: color,
//         }}
//     >
//         <Image
//             src={href}
//             alt="test"
//             layout="fill"
//             objectFit="cover"
//             sizes="40vw"
//             priority
//         />
//     </div>
//     <div
//         style={{
//             display: "flex",
//             flexDirection: "column",
//             background: "#000",
//             paddingBlock: "0.8vw",
//             justifyContent: "space-between",
//         }}
//     >
//         <div
//             style={{
//                 fontSize: "1.2vw",
//                 fontWeight: "800",
//                 writingMode: "vertical-lr",
//                 fontFamily: "Share Tech Mono",
//             }}
//         >
//             {name}
//         </div>
//         <div>
//             <div
//                 style={{
//                     lineHeight: "1.1em",
//                     fontFamily: "Share Tech Mono",
//                     fontSize: "1.6vw",
//                     marginInline: "0.5vw",
//                 }}
//             >
//                 {index}
//             </div>
//             <div
//                 style={{
//                     lineHeight: "1.1em",
//                     fontFamily: "Share Tech Mono",
//                     fontSize: "1.6vw",
//                     marginInline: "0.5vw",
//                     opacity: "45%",
//                 }}
//             >
//                 184
//             </div>
//         </div>
//     </div>
// </div>
//     );
// }

function MobileHome() {
    const [preLoaded, setPreLoaded] = useState(true);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        setPreLoaded(false);
    }, []);

    const d = 0.3;
    const slide = 1.4;

    return (
        <>
            <NextSeo
                title="High End Portrait Photography Massachusetts| FERNANDO"
                description="Lifestyle Portrait Photography in Massachusetts, California, and Texas"
                canonical="https://www.frenando.com"
                openGraph={{
                    url: "https://www.frenando.com",
                    title: "High End Portrait Photography Massachusetts| FERNANDO",
                    description: "Lifestyle Portrait Photography in Massachusetts, California, and Texas",
                    images: [
                        {
                            url: "/openg.png",
                            width: 800,
                            height: 600,
                            alt: "Og Image Alt",
                            type: "image/png",
                        },
                        {
                            url: "https://www.example.com/og-image02.jpg",
                            width: 900,
                            height: 800,
                            alt: "Og Image Alt Second",
                            type: "image/jpeg",
                        },
                        { url: "https://www.example.com/og-image03.jpg" },
                        { url: "https://www.example.com/og-image04.jpg" },
                    ],
                    site_name: "Frenando",
                }}
                twitter={{
                    handle: "@handle",
                    site: "@site",
                    cardType: "summary_large_image",
                }}
            />
            <main
                className="show-in-desktop"
                style={{
                    flexDirection: "column",
                    width: "100vw",
                    background: "#111",
                    overflowX: "hidden",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        height: "100vh",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            height: "100vh",
                            width: "100vw",
                            // paddingRight: "5vw",
                        }}
                    >
                        <h1
                            style={{
                                letterSpacing: "0.04em",
                                fontWeight: "800",
                                fontSize: "6.8vw",
                                margin: "0",
                                lineHeight: "0.75em",
                                writingMode: "vertical-lr",
                                transform: "rotate(180deg)",
                                color: "#4B4B4B",
                                opacity: preLoaded ? "0%" : "100%",
                                transition: "1s ease",
                            }}
                        >
                            FERNANDO
                        </h1>
                        <div
                            style={{
                                width: "1px",
                                background: "#5B5B5B",
                                marginLeft: "2.8vw",
                                height: "100vh",
                                transformOrigin: "center bottom",
                                transform: preLoaded
                                    ? "scaleY(0)"
                                    : "scaleY(1)",
                                transition: `${slide}s ease`,
                                transitionDelay: `${d}s`,
                            }}
                        ></div>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                height: "40vw",
                                width: "100%",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "flex-end",
                                    width: "100%",
                                }}
                            >
                                <h2
                                    style={{
                                        letterSpacing: "0.5em",
                                        fontWeight: "200",
                                        fontSize: "2.6vw",
                                        margin: "0",
                                        lineHeight: "0.8em",
                                        marginLeft: "2.8vw",
                                        // transform: preLoaded
                                        //     ? "translateY(-100vh)"
                                        //     : "translateY(0)",
                                        //     opacity: preLoaded
                                        //         ? "0%"
                                        //         : "100%",
                                        // transition: `3s ease`,
                                        // transitionDelay: `${d + 0}s`,
                                        opacity: preLoaded ? "0%" : "100%",
                                        transition: "1s ease",
                                    }}
                                >
                                    PHOTOGRAPHER
                                </h2>

                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        gap: "1vw",
                                        marginTop: "1.5vw",
                                        marginLeft: "2.8vw",
                                    }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "row",
                                            background: "#FF4C41",
                                            paddingBlock: "0.3vw",
                                            paddingInline: "2.4vw",
                                            gap: "0.4vw",
                                            alignItems: "center",
                                            fontFamily: "Share Tech Mono",
                                            fontSize: "1.2vw",
                                            // background: "#fff",
                                            // boxShadow: '4px 4px 0px 0px #FF4C41',
                                            color: "black",
                                            background: "#30ffa1",
                                            // transform: preLoaded
                                            //     ? "translateY(-100vh)"
                                            //     : "translateY(0)",
                                            // opacity: preLoaded
                                            // ? "0%"
                                            // : "100%",
                                            // transition: `3s ease`,
                                            // transitionDelay: `${d}s`,
                                            opacity: preLoaded ? "0%" : "100%",
                                            transition: "1s ease",
                                        }}
                                    >
                                        <div>book me.</div>
                                        <div style={{ height: "2vw" }}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1}
                                                stroke="currentColor"
                                                className="w-6 h-6"
                                                style={{
                                                    height: "100%",
                                                }}
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "row",
                                            background: "#FF4C41",
                                            paddingBlock: "0.3vw",
                                            paddingInline: "2.4vw",
                                            gap: "0.4vw",
                                            alignItems: "center",
                                            fontFamily: "Share Tech Mono",
                                            fontSize: "1.2vw",
                                            // boxShadow: '4px 4px 0px 0px #FF4C41',
                                            // background: "#fff",
                                            color: "black",
                                            background: "#30ffa1",
                                            // transform: preLoaded
                                            //     ? "translateY(-100vh)"
                                            //     : "translateY(0)",
                                            // opacity: preLoaded
                                            // ? "0%"
                                            // : "100%",
                                            // transition: `3s ease`,
                                            // transitionDelay: `${d}s`,
                                            opacity: preLoaded ? "0%" : "100%",
                                            transition: "1s ease",
                                        }}
                                    >
                                        <div>my story.</div>
                                        <div style={{ height: "2vw" }}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1}
                                                stroke="currentColor"
                                                className="w-6 h-6"
                                                style={{
                                                    height: "100%",
                                                }}
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    style={{
                                        height: "1px",
                                        marginBlock: "1.8vw",
                                        position: "relative",
                                    }}
                                >
                                    <div
                                        style={{
                                            height: "1px",
                                            background: "#5B5B5B",
                                            width: "100vw",
                                            position: "absolute",
                                            transformOrigin: "right center",
                                            transform: preLoaded
                                                ? "scaleX(0)"
                                                : "scaleX(1)",
                                            transition: `${slide}s ease`,
                                            transitionDelay: `${d}s`,
                                        }}
                                    ></div>
                                </div>

                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        gap: "1vw",
                                        paddingInline: "2.8vw",
                                    }}
                                >
                                    <LocationCard
                                        abr={"BOS."}
                                        loc={"Boston, Mass"}
                                        href={"/boston-b.jpg"}
                                        delay={0}
                                        preLoaded={preLoaded}
                                    />
                                    <LocationCard
                                        abr={"HTX."}
                                        loc={"Houston, Texas"}
                                        href={"/houston-b.jpg"}
                                        delay={0.1}
                                        preLoaded={preLoaded}
                                    />
                                    <LocationCard
                                        abr={"SFO."}
                                        loc={"San Fran, Cali"}
                                        href={"/goldengate-b.jpg"}
                                        delay={0.2}
                                        preLoaded={preLoaded}
                                    />
                                </div>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    overflow: "hidden",
                                    maxWidth: "40vw",
                                }}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        transform: `translateX(${
                                            index * -45.4
                                        }vw)`,
                                        transition: "0.6s ease",
                                        // background: '#742',
                                    }}
                                >
                                    <PhotoCard
                                        href={"/jackedarm.png"}
                                        index={"001"}
                                        name={"bmw | KSH3N"}
                                        color={"#242329"}
                                        isDark={true}
                                        preLoaded={preLoaded}
                                    />
                                    <PhotoCard
                                        href={"/techsuit.png"}
                                        index={"002"}
                                        name={"techware | GUREIFOKKUSU"}
                                        color={"#0D0E13"}
                                        isDark={true}
                                        preLoaded={preLoaded}
                                    />
                                    <PhotoCard
                                        href={"/angel.png"}
                                        index={"003"}
                                        name={"angel in white"}
                                        color={"#EDF8F2"}
                                        isDark={true}
                                        preLoaded={preLoaded}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        position: "absolute",
                        height: "100vh",
                        justifyContent: "end",
                        paddingRight: "1.1vw",
                        gap: "37.5vw",
                        width: "100vw",
                    }}
                >
                    <button
                        style={{
                            height: "2.4vw",
                            opacity: index == 0 ? "0%" : "100%",
                            transition: "0.6s ease",
                        }}
                        onClick={() => {
                            if (index == 2) {
                                setIndex(1);
                            }
                            if (index == 1) {
                                setIndex(0);
                            }
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                            style={{
                                height: "100%",
                            }}
                        >
                            <path
                                // strokeLinecap="round"
                                // strokeLinejoin="round"
                                d="M15.75 19.5L8.25 12l7.5-7.5"
                            />
                        </svg>
                    </button>

                    <button
                        style={{
                            height: "2.4vw",
                            opacity: index == 2 ? "0%" : "100%",
                            transition: "0.6s ease",
                        }}
                        onClick={() => {
                            if (index == 0) {
                                setIndex(1);
                            }
                            if (index == 1) {
                                setIndex(2);
                            }
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                            style={{
                                height: "100%",
                            }}
                        >
                            <path
                                // strokeLinecap="round"
                                // strokeLinejoin="round"
                                d="M8.25 4.5l7.5 7.5-7.5 7.5"
                            />
                        </svg>
                    </button>
                </div>
                <div
                    style={{
                        display: "flex",
                        flexirection: "row",
                    }}
                >
                    <h1
                        style={{
                            letterSpacing: "0.04em",
                            fontWeight: "800",
                            fontSize: "6.8vw",
                            margin: "0",
                            lineHeight: "0.75em",
                            writingMode: "vertical-lr",
                            transform: "rotate(180deg)",
                            color: "#4B4B4B",
                            opacity: "0%",
                            transition: "1s ease",
                        }}
                    >
                        i
                    </h1>
                    <div
                        style={{
                            width: "1px",
                            height: "3vw",
                            marginLeft: "2.8vw",
                            background: "#5B5B5B",
                        }}
                    ></div>
                </div>

                <div
                    style={{
                        width: "100vw",
                        height: "1px",
                        background: "#5B5B5B",
                    }}
                ></div>
                <h2
                    style={{
                        letterSpacing: "0.5em",
                        fontWeight: "200",
                        fontSize: "2.6vw",
                        margin: "0",
                        lineHeight: "0.8em",
                        marginLeft: "8vw",
                        // transform: preLoaded
                        //     ? "translateY(-100vh)"
                        //     : "translateY(0)",
                        //     opacity: preLoaded
                        //         ? "0%"
                        //         : "100%",
                        // transition: `3s ease`,
                        // transitionDelay: `${d + 0}s`,
                        opacity: preLoaded ? "0%" : "100%",
                        transition: "1s ease",
                        marginTop: "3vw",
                    }}
                >
                    PORTFOLIO
                </h2>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "auto auto auto",
                        paddingBlock: "6vw",
                        paddingInline: "8vw",
                        rowGap: "1vw",
                        columnGap: "1vw",
                        // background: '#000',
                    }}
                >
                    <ImageCard href={"/angel.png"} />
                    <ImageCard href={"/techsuit.png"} />
                    <ImageCard href={"/jackedarm.png"} />
                    <ImageCard href={"/pic1.png"} />
                    <ImageCard href={"/pic2.png"} />
                    <ImageCard href={"/pic3.png"} />
                    <ImageCard href={"/pic4.png"} />
                    <ImageCard href={"/pic5.png"} />
                    <ImageCard href={"/pic6.png"} />
                    <ImageCard href={"/pic7.png"} />
                    <ImageCard href={"/pic8.png"} />
                    <ImageCard href={"/pic9.png"} />
                </div>
            </main>
            <main
                className="show-in-mobile"
                style={{
                    flexDirection: "column",
                    width: "100vw",
                    background: "#111",
                    overflowX: "hidden",
                    position: "relative",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            paddingInline: "4vw",
                        }}
                    >
                        <h1
                            style={{
                                letterSpacing: "0.04em",
                                fontWeight: "800",
                                fontSize: "16vw",
                                margin: "0",
                                lineHeight: "0.75em",
                                color: "#4B4B4B",
                                opacity: preLoaded ? "0%" : "100%",
                                transition: "1s ease",
                            }}
                        >
                            FERNANDO
                        </h1>

                        <div
                            style={{
                                display: "flex",
                                overflow: "hidden",
                                maxWidth: "100vw",
                                marginTop: "25vw",
                                paddingLeft: "9.1vw",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    transform: `translateX(${
                                        index * -101.7
                                    }vw)`,
                                    transition: "0.6s ease",
                                    // background: '#742',
                                }}
                            >
                                <PhotoCard
                                    href={"/jackedarm.png"}
                                    index={"001"}
                                    name={"bmw | KSH3N"}
                                    color={"#242329"}
                                    isDark={true}
                                    preLoaded={preLoaded}
                                />
                                <PhotoCard
                                    href={"/techsuit.png"}
                                    index={"002"}
                                    name={"techware | GUREIFOKKUSU"}
                                    color={"#0D0E13"}
                                    isDark={true}
                                    preLoaded={preLoaded}
                                />
                                <PhotoCard
                                    href={"/angel.png"}
                                    index={"003"}
                                    name={"angel in white"}
                                    color={"#EDF8F2"}
                                    isDark={true}
                                    preLoaded={preLoaded}
                                />
                            </div>
                        </div>

                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                gap: "2vw",
                                paddingBlock: "0",
                                paddingInline: "0",
                                width: "100%",
                                paddingTop: "20vw",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    width: "100%",
                                    flexDirection: "row",
                                    background: "#FF4C41",
                                    justifyContent: "center",
                                    // paddingBlock: "1.4vw",
                                    // paddingInline: "1.4vw",
                                    gap: "0.4vw",
                                    alignItems: "center",
                                    fontFamily: "Share Tech Mono",
                                    fontSize: "5vw",
                                    // background: "#fff",
                                    // boxShadow: '4px 4px 0px 0px #FF4C41',
                                    color: "black",
                                    background: "#30ffa1",
                                    // transform: preLoaded
                                    //     ? "translateY(-100vh)"
                                    //     : "translateY(0)",
                                    // opacity: preLoaded
                                    // ? "0%"
                                    // : "100%",
                                    // transition: `3s ease`,
                                    // transitionDelay: `${d}s`,
                                    opacity: preLoaded ? "0%" : "100%",
                                    transition: "1s ease",
                                }}
                            >
                                <div
                                    style={
                                        {
                                            // textOrientation: "upright",
                                            // writingMode: "vertical-rl",
                                        }
                                    }
                                >
                                    my story
                                </div>
                                <div style={{ height: "10vw" }}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1}
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                        style={{
                                            height: "100%",
                                        }}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    width: "100%",
                                    background: "#FF4C41",
                                    justifyContent: "center",
                                    // paddingBlock: "1.4vw",
                                    // paddingInline: "1.4vw",
                                    gap: "0.4vw",
                                    alignItems: "center",
                                    fontFamily: "Share Tech Mono",
                                    fontSize: "5vw",
                                    // background: "#fff",
                                    // boxShadow: '4px 4px 0px 0px #FF4C41',
                                    color: "black",
                                    background: "#30ffa1",
                                    // transform: preLoaded
                                    //     ? "translateY(-100vh)"
                                    //     : "translateY(0)",
                                    // opacity: preLoaded
                                    // ? "0%"
                                    // : "100%",
                                    // transition: `3s ease`,
                                    // transitionDelay: `${d}s`,
                                    opacity: preLoaded ? "0%" : "100%",
                                    transition: "1s ease",
                                }}
                            >
                                <div
                                    style={
                                        {
                                            // textOrientation: "upright",
                                            // writingMode: "vertical-rl",
                                        }
                                    }
                                >
                                    my story
                                </div>
                                <div style={{ height: "10vw" }}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1}
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                        style={{
                                            height: "100%",
                                        }}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                height: "40vw",
                                width: "100%",
                                paddingTop: "18vw",
                                height: "100%",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "row-reverse",
                                    justifyContent: "flex-end",
                                    width: "100%",
                                }}
                            >
                                <h2
                                    style={{
                                        letterSpacing: "0.5em",
                                        fontWeight: "200",
                                        fontSize: "6.6vw",
                                        margin: "0",
                                        lineHeight: "0.8em",
                                        right: "7vw",
                                        writingMode: "vertical-lr",
                                        // transform: preLoaded
                                        //     ? "translateY(-100vh)"
                                        //     : "translateY(0)",
                                        //     opacity: preLoaded
                                        //         ? "0%"
                                        //         : "100%",
                                        // transition: `3s ease`,
                                        // transitionDelay: `${d + 0}s`,
                                        opacity: preLoaded ? "0%" : "100%",
                                        transition: "1s ease",
                                        position: "absolute",
                                    }}
                                >
                                    PHOTOGRAPHER
                                </h2>

                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "space-between",
                                        gap: "3vw",
                                        // paddingInline: "2.8vw",
                                    }}
                                >
                                    <LocationCard
                                        abr={"BOS."}
                                        loc={"Boston, MA"}
                                        href={"/boston-b.jpg"}
                                        delay={0}
                                        preLoaded={preLoaded}
                                    />
                                    <LocationCard
                                        abr={"HTX."}
                                        loc={"Houston, TX"}
                                        href={"/houston-b.jpg"}
                                        delay={0.1}
                                        preLoaded={preLoaded}
                                    />
                                    <LocationCard
                                        abr={"SFO."}
                                        loc={"San Fran, CA"}
                                        href={"/goldengate-b.jpg"}
                                        delay={0.2}
                                        preLoaded={preLoaded}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        position: "absolute",
                        justifyContent: "space-between",
                        width: "100vw",
                        paddingTop: "78.5vw",
                    }}
                >
                    <button
                        style={{
                            height: "8vw",
                            opacity: index == 0 ? "0%" : "100%",
                            transition: "0.6s ease",
                            zIndex: "3",
                        }}
                        onClick={() => {
                            if (index == 2) {
                                setIndex(1);
                            }
                            if (index == 1) {
                                setIndex(0);
                            }
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
                                height: "100%",
                                aspectRatio: 1,
                            }}
                        >
                            <path
                                // strokeLinecap="round"
                                // strokeLinejoin="round"
                                d="M15.75 19.5L8.25 12l7.5-7.5"
                            />
                        </svg>
                    </button>

                    <button
                        style={{
                            height: "8vw",
                            opacity: index == 2 ? "0%" : "100%",
                            transition: "0.6s ease",
                        }}
                        onClick={() => {
                            if (index == 0) {
                                setIndex(1);
                            }
                            if (index == 1) {
                                setIndex(2);
                            }
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
                                height: "100%",
                                aspectRatio: 1,
                            }}
                        >
                            <path
                                // strokeLinecap="round"
                                // strokeLinejoin="round"
                                d="M8.25 4.5l7.5 7.5-7.5 7.5"
                            />
                        </svg>
                    </button>
                </div>
                <h2
                    style={{
                        letterSpacing: "0.5em",
                        fontWeight: "200",
                        fontSize: "8vw",
                        margin: "0",
                        lineHeight: "0.8em",
                        marginLeft: "4vw",
                        // transform: preLoaded
                        //     ? "translateY(-100vh)"
                        //     : "translateY(0)",
                        //     opacity: preLoaded
                        //         ? "0%"
                        //         : "100%",
                        // transition: `3s ease`,
                        // transitionDelay: `${d + 0}s`,
                        opacity: preLoaded ? "0%" : "100%",
                        transition: "1s ease",
                        marginTop: "30vw",
                    }}
                >
                    PORTFOLIO
                </h2>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "auto auto auto",
                        paddingBlock: "12vw",
                        paddingInline: "4vw",
                        rowGap: "1vw",
                        columnGap: "1vw",
                        // background: '#000',
                    }}
                >
                    <ImageCard href={"/angel.png"} />
                    <ImageCard href={"/techsuit.png"} />
                    <ImageCard href={"/jackedarm.png"} />
                    <ImageCard href={"/pic1.png"} />
                    <ImageCard href={"/pic2.png"} />
                    <ImageCard href={"/pic3.png"} />
                    <ImageCard href={"/pic4.png"} />
                    <ImageCard href={"/pic5.png"} />
                    <ImageCard href={"/pic6.png"} />
                    <ImageCard href={"/pic7.png"} />
                    <ImageCard href={"/pic8.png"} />
                    <ImageCard href={"/pic9.png"} />
                </div>
            </main>
        </>
    );
}

function LocationCard({ abr, loc, href, delay, preLoaded }) {
    const c = "#1b1b1b";
    const d = 0;
    const slide = 0.6;
    return (
        <>
            <div
                className="show-in-desktop"
                style={{
                    flexDirection: "row",
                    padding: "0.6vw",
                    gap: "0.5vw",
                    background: c,
                    width: "100%",
                    // transform: preLoaded ? "translateY(100vh)" : "translateY(0)",
                    // transition: `${slide}s ease`,
                    // transitionDelay: `${d + delay}s`,
                    opacity: preLoaded ? "0%" : "100%",
                    transition: "1s ease",
                }}
            >
                <div
                    style={{
                        transform: "rotate(180deg)",
                        fontSize: "4.8vw",
                        fontWeight: "800",
                        writingMode: "vertical-lr",
                        lineHeight: "0.8em",
                        color: "#4B4B4B",
                    }}
                >
                    {abr}
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.4vw",
                        alignItems: "flex-end",
                        width: "100%",
                    }}
                >
                    <div
                        style={{
                            lineHeight: "1em",
                            fontFamily: "Share Tech Mono",
                            fontSize: "0.9vw",
                        }}
                    >
                        {loc}
                    </div>
                    <div
                        style={{
                            width: "100%",
                            height: "100%",
                            position: "relative",
                        }}
                    >
                        <Image
                            src={href}
                            alt="test"
                            layout="fill"
                            objectFit="cover"
                            sizes="12vw"
                            priority
                            style={{
                                mixBlendMode: "lighten",
                            }}
                        />
                    </div>
                </div>
            </div>
            <div
                className="show-in-mobile"
                style={{
                    flexDirection: "row",
                    alignItems: "flex-end",
                    gap: "2vw",
                    width: "100%",
                    // transform: preLoaded ? "translateY(100vh)" : "translateY(0)",
                    // transition: `${slide}s ease`,
                    // transitionDelay: `${d + delay}s`,
                    opacity: preLoaded ? "0%" : "80%",
                    transition: "1s ease",
                }}
            >
                <div
                    style={{
                        position: "relative",
                    }}
                >
                    <div
                        style={{
                            width: "100%",
                            aspectRatio: "1.2",
                            position: "absolute",
                            overflow: "hidden",
                            height: "100%",
                            opacity: "30%",
                        }}
                    >
                        <Image
                            src={href}
                            alt="test"
                            layout="fill"
                            objectFit="cover"
                            sizes="50vw"
                            priority
                            style={{
                                mixBlendMode: "lighten",
                            }}
                        />
                    </div>

                    <div
                        style={{
                            fontSize: "26vw",
                            fontWeight: "800",
                            lineHeight: "0.8em",
                            color: "#fff",
                            paddingBlock: "3vw",
                            paddingInline: "2vw",
                            width: "66vw",
                        }}
                    >
                        {abr}
                    </div>
                </div>
                <div
                    style={{
                        lineHeight: "1em",
                        fontFamily: "Share Tech Mono",
                        fontSize: "3.5vw",
                        writingMode: "vertical-lr",
                        whiteSpace: "nowrap",
                    }}
                >
                    {loc}
                </div>
            </div>
        </>
    );
}

function PhotoCard({ name, index, href, color, isDark, preLoaded }) {
    return (
        <>
            <div
                className="show-in-desktop"
                style={{
                    flexDirection: "row",
                    zIndex: 1,
                    border: "1px solid #5B5B5B",
                    marginRight: "10vw",
                    opacity: preLoaded ? "0%" : "100%",
                    transition: "1s ease",
                }}
            >
                <div
                    style={{
                        height: "100%",
                        aspectRatio: "62/78",
                        position: "relative",
                        background: color,
                    }}
                >
                    <Image
                        src={href}
                        alt="test"
                        layout="fill"
                        objectFit="cover"
                        sizes="40vw"
                        priority
                    />
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        background: "#000",
                        paddingBlock: "0.8vw",
                        justifyContent: "space-between",
                    }}
                >
                    <div
                        style={{
                            fontSize: "1.2vw",
                            fontWeight: "800",
                            writingMode: "vertical-lr",
                            fontFamily: "Share Tech Mono",
                        }}
                    >
                        {name}
                    </div>
                    <div>
                        <div
                            style={{
                                lineHeight: "1.1em",
                                fontFamily: "Share Tech Mono",
                                fontSize: "1.6vw",
                                marginInline: "0.5vw",
                            }}
                        >
                            {index}
                        </div>
                        <div
                            style={{
                                lineHeight: "1.1em",
                                fontFamily: "Share Tech Mono",
                                fontSize: "1.6vw",
                                marginInline: "0.5vw",
                                opacity: "45%",
                            }}
                        >
                            184
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="show-in-mobile"
                style={{
                    display: "flex",
                    flexDirection: "row",
                    zIndex: 1,
                    border: "1px solid #5B5B5B",
                    marginRight: "20vw",
                    opacity: preLoaded ? "0%" : "100%",
                    transition: "1s ease",
                }}
            >
                <div
                    style={{
                        width: "72vw",
                        aspectRatio: "62/78",
                        position: "relative",
                        background: color,
                    }}
                >
                    <Image
                        src={href}
                        alt="test"
                        layout="fill"
                        objectFit="cover"
                        sizes="40vw"
                        priority
                    />
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        background: "#000",
                        paddingBlock: "2vw",
                        justifyContent: "space-between",
                    }}
                >
                    <div
                        style={{
                            fontSize: "4vw",
                            fontWeight: "800",
                            writingMode: "vertical-lr",
                            fontFamily: "Share Tech Mono",
                        }}
                    >
                        {name}
                    </div>
                    <div>
                        <div
                            style={{
                                lineHeight: "1.1em",
                                fontFamily: "Share Tech Mono",
                                fontSize: "5vw",
                                marginInline: "0.5vw",
                            }}
                        >
                            {index}
                        </div>
                        <div
                            style={{
                                lineHeight: "1.1em",
                                fontFamily: "Share Tech Mono",
                                fontSize: "5vw",
                                marginInline: "0.5vw",
                                opacity: "45%",
                            }}
                        >
                            184
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MobileHome;

// function MobileHome() {
//     const [preLoaded, setPreLoaded] = useState(true);
//     const [index, setIndex] = useState(0);

//     useEffect(() => {
//         setPreLoaded(false);
//     }, []);

//     const d = 0.3;
//     const slide = 1.4;

//     return (
//         <main
//             style={{
//                 display: "flex",
//                 flexDirection: "row",
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 width: "100vw",
//                 background: "#111",
//                 overflowX: "hidden",
//             }}
//         >
//             <NextSeo
//                 title="Hire Construction Labourers in New England | PHOENIX"
//                 description="This is a demo description"
//                 canonical="https://www.example.com"
//                 openGraph={{
//                     url: "https://www.example.com",
//                     title: "Open Graph Title",
//                     description: "Open Graph Description",
//                     images: [
//                         {
//                             url: "https://www.example.com/og-image01.jpg",
//                             width: 800,
//                             height: 600,
//                             alt: "Og Image Alt",
//                             type: "image/jpeg",
//                         },
//                         {
//                             url: "https://www.example.com/og-image02.jpg",
//                             width: 900,
//                             height: 800,
//                             alt: "Og Image Alt Second",
//                             type: "image/jpeg",
//                         },
//                         { url: "https://www.example.com/og-image03.jpg" },
//                         { url: "https://www.example.com/og-image04.jpg" },
//                     ],
//                     site_name: "YourSiteName",
//                 }}
//                 twitter={{
//                     handle: "@handle",
//                     site: "@site",
//                     cardType: "summary_large_image",
//                 }}
//             />
//             <div
//                 style={{
//                     width: "100vw",
//                     height: "100vh",
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                     position: "absolute",
//                 }}
//             >
//                 <div
//                     style={{
//                         width: "40vw",
//                         height: "70vh",
//                         position: "relative",
//                     }}
//                 >
//                     <Image
//                         src="/jackedarm.png"
//                         alt="test"
//                         layout="fill"
//                         objectFit="cover"
//                         sizes="40vw"
//                         priority
//                     />
//                 </div>
//             </div>
//             <div
//                 style={{
//                     width: "4vw",
//                     height: "60vh",
//                     background: '#f00',
//                     zIndex: '1',
//                     mixBlendMode: 'exclusion',
//                     margin: '1vw',
//                     opacity: preLoaded ? '0%' : '100%',
//                     transition: 'cubic-bezier(0,)',
//                     transitionDuration: '2s',
//                     transitionDelay: '1s',

//                 }}
//             ></div>
//             <div
//                 style={{
//                     width: "50vw",
//                     height: "40vh",
//                     background: '#f00',
//                     zIndex: '1',
//                     mixBlendMode: 'darken',
//                     margin: '0vw',
//                     position: 'absolute'
//                 }}
//             ></div>
//             <div
//                 style={{
//                     width: "10vw",
//                     height: "90vh",
//                     background: '#f0f',
//                     zIndex: '1',
//                     mixBlendMode: 'exclusion',
//                     margin: '0vw',
//                 }}
//             ></div>
//             <div
//                 style={{
//                     width: "1vw",
//                     height: "80vh",
//                     background: '#ff0',
//                     zIndex: '1',
//                     mixBlendMode: 'exclusion',
//                     margin: '0vw',
//                 }}
//             ></div>
//             <div
//                 style={{
//                     width: "6vw",
//                     height: "56vh",
//                     background: '#00f',
//                     zIndex: '1',
//                     mixBlendMode: 'exclusion',
//                     margin: '2vw',
//                 }}
//             ></div>
//         </main>
//     );
// }

// export default MobileHome;

// <div
// style={{
//     display: "flex",
//     flexDirection: "column",
//     gap: "2vw",
//     marginLeft: "5vw",
// }}
// >
// <div
//     style={{
//         display: "flex",
//         flexDirection: "column",
//         background: "#FF4C41",
//         paddingBlock: "8vw",
//         paddingInline: "1.4vw",
//         gap: "0.4vw",
//         alignItems: "center",
//         fontFamily: "Share Tech Mono",
//         fontSize: "5vw",
//         // background: "#fff",
//         // boxShadow: '4px 4px 0px 0px #FF4C41',
//         color: "black",
//         background: "#30ffa1",
//         // transform: preLoaded
//         //     ? "translateY(-100vh)"
//         //     : "translateY(0)",
//         // opacity: preLoaded
//         // ? "0%"
//         // : "100%",
//         // transition: `3s ease`,
//         // transitionDelay: `${d}s`,
//         opacity: preLoaded ? "0%" : "100%",
//         transition: "1s ease",
//     }}
// >
//     <div
//         style={{
//             // textOrientation: "upright",
//             writingMode: "vertical-rl",
//         }}
//     >
//         my story
//     </div>
//     <div style={{ width: "10vw" }}>
//         <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1}
//             stroke="currentColor"
//             className="w-6 h-6"
//             style={{
//                 width: "100%",
//             }}
//         >
//             <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3"
//             />
//         </svg>
//     </div>
// </div>
// <div
//     style={{
//         display: "flex",
//         flexDirection: "column",
//         background: "#FF4C41",
//         paddingBlock: "8vw",
//         paddingInline: "1.4vw",
//         gap: "0.4vw",
//         alignItems: "center",
//         fontFamily: "Share Tech Mono",
//         fontSize: "5vw",
//         // background: "#fff",
//         // boxShadow: '4px 4px 0px 0px #FF4C41',
//         color: "black",
//         background: "#30ffa1",
//         // transform: preLoaded
//         //     ? "translateY(-100vh)"
//         //     : "translateY(0)",
//         // opacity: preLoaded
//         // ? "0%"
//         // : "100%",
//         // transition: `3s ease`,
//         // transitionDelay: `${d}s`,
//         opacity: preLoaded ? "0%" : "100%",
//         transition: "1s ease",
//     }}
// >
//     <div
//         style={{
//             // textOrientation: "upright",
//             writingMode: "vertical-rl",
//         }}
//     >
//         my story
//     </div>
//     <div style={{ width: "10vw" }}>
//         <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1}
//             stroke="currentColor"
//             className="w-6 h-6"
//             style={{
//                 width: "100%",
//             }}
//         >
//             <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3"
//             />
//         </svg>
//     </div>
// </div>
// </div>
