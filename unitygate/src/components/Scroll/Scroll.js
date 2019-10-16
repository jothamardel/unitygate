import React from 'react';

const Scroll = (props) => {

    return(
        <div style={{ overflowY: 'scroll', border: '1px solid green', height: '490px'}}>
            {props.children}
        </div>
    );

}





export default Scroll;