import { Fragment } from "react";

export default function NumberedList({ title, list }) {
    return (
        <div className="numbered-list-container">
            {list?.map((element, index) => {
                return (
                    <section className="hstack numbered-list-item-container" key={element.title}>
                        <div className="numbered-list-number">
                            {"0" + (index + 1)}
                        </div>
                        <div className="numbered-list-element-container">
                            <h4>{element.title}</h4>
                            <p className="numbered-list-text">{element.text}</p>
                        </div>
                    </section>
                );
            })}
        </div>
    );
}
