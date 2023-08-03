import React from "react";
import FILE from '../files/file.pdf';

function Downloads() {
    return (
        <div>
            <a href={FILE} target="_blank"><p>DOCUMENT 2</p></a>
        </div>
    )
}

export default Downloads;