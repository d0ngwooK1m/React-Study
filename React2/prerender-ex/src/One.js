import React from "react";
import { Helmet } from "react-helmet";

const One = (props) => {
    return (

        <div>
            <Helmet>
                <title>page one</title>
                <meta property="og:title" content="og page one" />
                <meta property="og:description" content="hi there!" />
                <meta property="og:image" content="https://steamuserimages-a.akamaihd.net/ugc/1618439156949856647/EBFE6D18C67B0599FFA3F25DA20F020E6C9854C8/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true" />
            </Helmet>
            <h2>Hi, there :) ! page one</h2>
            <button
                onClick={() => {
                    props.history.push("/");
                }}
            >
                page one
            </button>
            <button
                onClick={() => {
                    props.history.push("/two");
                }}
            >
                page two
            </button>
        </div>
    );
}

export default One;