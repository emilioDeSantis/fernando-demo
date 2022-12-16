export default function NumberedBullet({ title, text, index }) {
    return (
        <div className="hstack numbered-bullet-container">
            <p className="numbered-bullet-index">{index}</p>
            <div className="arrow-spacer"></div>
            <div className="vstack numbered-bullet-text-container">
                <h4 className="numbered-bullet-title">{title}</h4>
                <p className="numbered-bullet-text">{text}</p>
            </div>
        </div>
    );
}
