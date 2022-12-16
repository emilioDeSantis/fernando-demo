

export default function BulletPointSmall({ children }) {
    return (
        <div className="hstack small-bullet-container">
            <div className="small-bullet"/>
            <p className="small-bullet-text">{children}</p>
        </div>
    );
}
