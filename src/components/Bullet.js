export default function Bullet() {
    return (
        <div
            style={{
                display: "flex",
                width: "1rem",
                height: "1rem",
                position: "relative",
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
            }}
        >
            <div
                style={{
                    border: `0.1rem solid ${process.env.color.theme}`,
                    borderRadius: "1rem",
                    width: "100%",
                    height: "100%",
                    boxShadow: `0 0 0.4rem  ${process.env.color.theme}`,
                    background: "#0000",
                }}
            ></div>
            <div
                style={{
                    background: process.env.color.theme,
                    width: "60%",
                    height: "60%",
                    borderRadius: "1rem",
                    position: "absolute",
                    boxShadow: `0 0 1rem  ${process.env.color.theme}`,
                }}
            ></div>
        </div>
    );
}
