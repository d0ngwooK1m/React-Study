import React, { useState, useCallback } from "react";
import _ from "lodash";

const Search = () => {
    const debounce = _.debounce((e) => {
        console.log("debounce::: ", e.target.value);
    }, 1000);


    const [text, setText] = useState("");
    const keyPress = useCallback(debounce, []);

    const onChange = (e) => {
        setText(e.target.value);
        keyPress(e);
    }


    const throttle = _.throttle((e) => {
        console.log("throttle::: ", e.target.value);
    }, 1000);

    return (
        <div>
            <input type="text" onChange={onChange} value={text} />
        </div>
    );
};

export default Search;