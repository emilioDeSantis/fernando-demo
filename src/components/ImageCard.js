import Image from "next/image";
import Link from "next/link";

export default function ImageCard({ href }) {
    return (
        <div
        style={{
            width: "100%",
            aspectRatio: "62/78",
            position: "relative",
            // border: "1px solid #5B5B5B",
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
    );
}
