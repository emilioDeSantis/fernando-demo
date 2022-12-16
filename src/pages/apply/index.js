import Image from "next/image";
import Link from "next/link";
import Bullet from "../../components/Bullet";
import BulletPoint from "../../components/BulletPoint";
import BulletPointSmall from "../../components/BulletPointSmall";
import { NextSeo } from "next-seo";

export default function Apply() {
    return (
        <div className="light-container"><NextSeo
        title="Hire Construction Labourers in New England | PHOENIX"
        description="This is a demo description"
        canonical="https://www.example.com"
        openGraph={{
            url: "https://www.example.com",
            title: "Open Graph Title",
            description: "Open Graph Description",
            images: [
                {
                    url: "https://www.example.com/og-image01.jpg",
                    width: 800,
                    height: 600,
                    alt: "Og Image Alt",
                    type: "image/jpeg",
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
            site_name: "YourSiteName",
        }}
        twitter={{
            handle: "@handle",
            site: "@site",
            cardType: "summary_large_image",
        }}
    />
    
            <div className="navbar-spacer" />
            <h1 className="services-header">
                HOW TO <span className="theme-color">JOIN</span> PHOENIX
                {/* How to Hire Phoenix */}
            </h1>
            <div className="info-content-container">
                <div className="info-content-image-container image-container">
                    <Image
                        src="/sunset.png"
                        alt="sunset"
                        layout="fill"
                        objectFit="contain"
                        sizes="100vw"
                        priority
                    />
                </div>
                <div className="info-content-sub-container vstack">
                    <h2>Contact Us</h2>
                    <BulletPointSmall>
                    Call us or you can submit an application online.
                    </BulletPointSmall>
                    <BulletPointSmall>
                    We will have you come into our office to see if you are a
                    good fit.
                    </BulletPointSmall>
                    <BulletPointSmall>
                    Once hired you can begin working right away.
                    </BulletPointSmall>
                    <div className="hstack servics-contact-container">
                        {/* <Link href="services">
                        <a className="hstack arrow-button form-button">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                                style={{
                                    height: "2rem",
                                }}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                                />
                            </svg>

                            <div className="arrow-button-text">Hire Us</div>
                        </a> 
                    </Link>*/}
                        <div className="hstack phone-container">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 phone-icon"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                                />
                            </svg>

                            <div className="phone-number">1-800-261-2858</div>
                        </div>

                        <div className="hstack card-footer-arrow-container">
                            <p className="card-footer-index card-footer-text">
                                APPLY
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
