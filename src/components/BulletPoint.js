import { Fragment } from "react";
import Bullet from "./Bullet";

export default function BulletPoint({ children }) {
    return (
        <div className="hstack" style={{}}>
            <Bullet />
            <p style={{
                marginLeft: '3rem',
                marginBlock: '0.5rem',
                opacity: '100%',

            }}>{children}</p>
        </div>
    );
}
