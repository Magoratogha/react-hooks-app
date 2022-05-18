import { useEffect, useState } from "react";

function Message() {

    const [coords, setCoords] = useState({ x: 0, y: 0 });
    const { x, y } = coords;

    useEffect(() => {
        const mouseMoveListener = ({ x, y }) => {
            setCoords({ x, y })
        };
        window.addEventListener('mousemove', mouseMoveListener);

        return () => {
            window.removeEventListener('mousemove', mouseMoveListener);
        }
    }, []);

    return (
        <div>
            <h3>You rock</h3>
            <p>X: { x }, Y: { y }</p>
        </div>
    );
}

export default Message;