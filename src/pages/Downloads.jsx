import React from "react";
import FILE from '../files/guida.pdf';
import './Downloads.css';

function Downloads() {
    return (
        <div>
            <a class="doc-link" href={FILE} ><p>Guida d'uso</p></a>
        </div>
    )
}

export default Downloads;
