import Head from "next/head";
import Image from "next/image";
import { NextSeo } from "next-seo";
import Link from "next/link";

export default function Apply() {
    return (
        <div className="light-container">
            <NextSeo
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

            <Head></Head>
            <div className="navbar-spacer" />
            <h1 className="services-header">
                HOW TO <span className="theme-color">CONTACT</span> PHOENIX
            </h1>
            <section className="contact-container">
                <section className="section">
                    <h3 className="contact-header">PHONE</h3>
                    <p className="contact-text">1-800-261-2858</p>
                </section>
                <section className="section">
                    <h3 className="contact-header">EMAIL</h3>
                    <p className="contact-text">info@phoenixcr.net</p>
                </section>
                <section className="section">
                    <h3 className="contact-header">HOURS</h3>
                    <p className="contact-text">MON-FRI 8AM-6PM</p>
                </section>
            </section>
            <section className="contact-container-bottom">
                <div className="hstack contact-arrows-container">
                    <Link href="/services">
                        <a className="hstack card-footer-arrow-container">
                            <p className="card-footer-index card-footer-text">
                                HIRE PHOENIX
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
                    <Link href="apply">
                        <a className="hstack card-footer-arrow-container">
                            <p className="card-footer-index card-footer-text">
                                APPLY TO PHOENIX
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
                <h3 className="contact-header">LOCATION</h3>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2943.7294431033806!2d-71.1316586!3d42.45477239999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3743a1f298bf5%3A0x479753efd66c3dca!2s165%20Washington%20St%20a%2C%20Winchester%2C%20MA%2001890!5e0!3m2!1sen!2sus!4v1669871082969!5m2!1sen!2sus"
                    className="map"
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>

                <p className="contact-adress">
                    165 Washington Street, Suite A, Winchester, MA 01890
                </p>
            </section>
        </div>
    );
}
