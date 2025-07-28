import React from "react";

import { useRouteError } from "react-router-dom";

const Error  =  () => {
    //err contains the information of every error type
    const err = useRouteError();

    return (
        <div>
            <h1>Opps: </h1>
            
            <h2>Somethig Went wrong</h2>

            <h2>{err.status} {err.statusText}</h2>
        </div>
    )
}


export default Error;