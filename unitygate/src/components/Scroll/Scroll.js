import React from 'react';

const Scroll = (props) => {

    return(
        <div style={{ overflowY: 'scroll', border: '1px solid green', height: '650px'}}>
            {props.children}
        </div>
    );

}





export default Scroll;