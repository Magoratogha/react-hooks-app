import { memo } from "react";

const Small = memo(({ value }) => {

    console.log(':c');
    
    return (
        <small>{value}</small>
    );
});

export default Small;