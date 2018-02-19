import React from 'react';

export default Number = (props) => {
    return (
        <div className={props.isTarget ? "number target" : "number"}>
            <span>{props.value}</span>
        </div>
    );
}